"use client";
import 'maplibre-gl/dist/maplibre-gl.css';

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  FullscreenControl,
  Layer,
  Map,
  MapRef,
  Marker,
  NavigationControl,
  Popup,
  Source,
} from 'react-map-gl/maplibre';

type MapFrameProps = {
  geojsonData?: GeoJSON.FeatureCollection;
  style?: React.CSSProperties;
  isMovingMarker?: boolean;
  movingMarkers?: { id: number; longitude: number; latitude: number, popupContent: React.ReactNode }[];
  init?: {
    longitude: number;
    latitude: number;
    zoom: number; 
    center: {
      lng: number;
      lat: number;
    };
  }
  userLocation?: [number, number]; // [longitude, latitude]
};

const mapStyles = {
  Light: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  Dark: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  Street: "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
  Global: "https://raw.githubusercontent.com/go2garret/maps/main/src/assets/json/openStreetMap.json",
  Satelite: "https://raw.githubusercontent.com/go2garret/maps/main/src/assets/json/arcgis_hybrid.json"
};

/**
 * MapFrame is a custom Map component which provides some basic functionalities and customizations.
 *
 * It receives a GeoJSON FeatureCollection as a prop and renders it on the map.
 * It also provides a cluster layer and a heatmap layer.
 *
 * The component also provides a dynamic fake moving markers feature.
 * The moving markers are rendered as red dots on the map and can be clicked to show a popup with some information.
 *
 * The component also provides a popup with some information when a marker is clicked.
 *
 * The component is fully customizable and can be styled using CSS.
 *
 * @param {GeoJSON.FeatureCollection} geojsonData - The GeoJSON FeatureCollection to be rendered on the map.
 * @param {boolean} isMovingMarker - A boolean indicating whether to render the dynamic fake moving markers.
 * @param {Array<{ id: number, longitude: number, latitude: number, popupContent: React.ReactNode }>} movingMarkers - An array of objects containing the information of the dynamic fake moving markers.
 * @param {{ longitude: number, latitude: number, zoom: number }} init - An object containing the initial longitude, latitude and zoom of the map.
 * @param {React.CSSProperties} style - The CSS styles to be applied to the component.
 * @param {[number, number]} userLocation - An array containing the longitude and latitude of the user's location.
 */
export const MapFrame: React.FC<MapFrameProps> = ({
  geojsonData,
  isMovingMarker = false,
  movingMarkers = [],
  init = {
    longitude: 121.5595,
    latitude: 25.0330,
    zoom: 13,
    center: {
      lng: 121.5595,
      lat: 25.0330
    }
  },
  userLocation = [121.5595, 25.0330],
  style = { width: '100%', height: '100%' }
}) => {
  const mapRef = useRef<MapRef>(null);
  const { resolvedTheme } = useTheme();

  const [selectedStyle, setSelectedStyle] = useState<'Light' | 'Dark' | 'Street' | "Global" | "Satelite">(
    resolvedTheme === 'dark' ? 'Dark' : 'Light'
  );
  const [showHeatmap, setShowHeatmap] = useState(true);
  const [showClustering, setShowClustering] = useState(true);
  const [popupInfo, setPopupInfo] = useState<any>(null);
  const [showStyleSelector, setShowStyleSelector] = useState(false);
  const mapStyle = mapStyles[selectedStyle];

  const fakeMovingMarkers = useMemo(
    () =>
      movingMarkers?.length > 0 ? movingMarkers.map((marker, i) => ({
        ...marker,
        id: `move-${i}`,
      })) : Array.from({ length: 3 }).map((_, i) => ({
        id: `move-${i}`,
        latitude: 37.77 + Math.sin(Date.now() / 10000 + i) * 0.01,
        longitude: -122.41 + Math.cos(Date.now() / 10000 + i) * 0.01,
        popupContent: `Dynamic pin ${i + 1}`
      })),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      mapRef.current?.getMap().flyTo({
        center: init && init.center || [
          -122.41 + Math.cos(Date.now() / 10000) * 0.01,
          37.77 + Math.sin(Date.now() / 10000) * 0.01
        ],
        duration: 1000
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-full h-full">
        {showStyleSelector && <div id="option-map-selector" className="absolute z-10 top-5 right-5 h-[80px] bg-white border-[0.5px] border-gray-100 dark:bg-black rounded p-3 space-y-2">
          <select
            value={selectedStyle}
            onChange={e => setSelectedStyle(e.target.value as any)}
            className="p-1 rounded bg-white dark:bg-gray-800 text-sm w-full outline-none border border-gray-300 dark:border-gray-700 focus:outline-none "
          >
            {Object.keys(mapStyles).map(k => (
              <option  key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
          <div className="text-sm flex gap-2 items-center">
            <label className="flex items-center gap-0.5">
              <input type="checkbox" className={showHeatmap ? 'accent-gray-800' : 'accent-transparent'} checked={showHeatmap} onChange={e => setShowHeatmap(e.target.checked)} />
              Heatmap
            </label>
            <label className="flex items-center gap-0.5">
              <input type="checkbox" className={showClustering ? 'accent-gray-800' : 'accent-transparent'} checked={showClustering} onChange={e => setShowClustering(e.target.checked)} />
              Cluster
            </label>
          </div>
        </div>}
      
        <ChevronDown size={20} className="absolute top-2 right-2 z-10 cursor-pointer" onClick={() => setShowStyleSelector(!showStyleSelector)} />
        <Map
          ref={mapRef}
          initialViewState={init}
          style={style}
          mapStyle={mapStyle}
          mapLib={import('maplibre-gl')}
          onClick={() => setPopupInfo(null)}
        >
          <NavigationControl position="top-left" />
          <FullscreenControl position="top-left" />

          {userLocation && (
        <Marker longitude={userLocation[0]} latitude={userLocation[1]}>
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: '#61a7da',
              borderRadius: '50%',
              border: '4px solid white',
              boxShadow: '0 0 10px rgb(221, 221, 221)',
              zIndex: 100,
              animationDuration: '2s',
            }}
            className='animate-ping'
          />
        </Marker>
      )}
  
          {geojsonData && (
            <Source
              id="geojson"
              type="geojson"
              data={geojsonData}
              cluster={showClustering}
              clusterRadius={50}
              clusterMaxZoom={14}
            >
              {showClustering && (
                <>
                  <Layer
                    id="clusters"
                    type="circle"
                    filter={['has', 'point_count']}
                    paint={{
                      'circle-color': '#00bbd47e',
                      'circle-radius': ['step', ['get', 'point_count'], 15, 10, 20, 30, 25]
                    }}
                  />
                  <Layer
                    id="cluster-count"
                    type="symbol"
                    filter={['has', 'point_count']}
                    layout={{
                      'text-field': '{point_count_abbreviated}',
                      'text-font': ['Open Sans Bold'],
                      'text-size': 12
                    }}
                  />
                  <Layer
                    id="unclustered-point"
                    type="circle"
                    filter={['!', ['has', 'point_count']]}
                    paint={{
                      'circle-color': '#11b5da94',
                      'circle-radius': 8,
                      'circle-stroke-width': 1,
                      'circle-stroke-color': '#ffffffa2'
                    }}
                  />
                </>
              )}
              {showHeatmap && (
                <Layer
                  id="heatmap-layer"
                  type="heatmap"
                  paint={{
                    'heatmap-intensity': 1,
                    'heatmap-radius': 20,
                    'heatmap-opacity': 0.6,
                    'heatmap-color': [
                      'interpolate',
                      ['linear'],
                      ['heatmap-density'],
                      0, 'rgba(0,0,255,0)',
                      0.5, 'rgba(94, 198, 94, 0.494)',
                      1, '#c65a5a79'
                    ]
                  }}
                />
              )}
            </Source>
          )}
  
          {/* Dynamic fake moving markers */}
          {isMovingMarker && fakeMovingMarkers.map(marker => (
            <Marker
              key={marker.id}
              longitude={marker.longitude}
              latitude={marker.latitude}
              onClick={e => {
                e.originalEvent.stopPropagation();
                setPopupInfo({ ...marker });
              }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full shadow cursor-pointer" />
            </Marker>
          ))}
  
          {popupInfo && (
            <Popup
              longitude={popupInfo.longitude}
              latitude={popupInfo.latitude}
              anchor="top"
              onClose={() => setPopupInfo(null)}
              closeOnClick={false}
            >
              {popupInfo.popupContent}
            </Popup>
          )}
        </Map>
      </div>
  );
};
