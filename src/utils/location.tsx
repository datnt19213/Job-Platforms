import {
  useEffect,
  useState,
} from 'react';

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
  isWatching: boolean;
}

interface UseCurrentLocationOptions {
  watch?: boolean;
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

function useCurrentLocation({
  watch = false,
  enableHighAccuracy = true,
  timeout = 10000,
  maximumAge = 0,
}: UseCurrentLocationOptions = {}) {
  const [coords, setCoords] = useState<Coordinates>({
    latitude: null,
    longitude: null,
    error: null,
    isWatching: false,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setCoords((prev) => ({
        ...prev,
        error: "Geolocation is not supported by this browser.",
      }));
      return;
    }

    const geoOptions: PositionOptions = {
      enableHighAccuracy,
      timeout,
      maximumAge,
    };

    const success = (position: GeolocationPosition) => {
      setCoords({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
        isWatching: watch,
      });
    };

    const error = (error: GeolocationPositionError) => {
      let message = "";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          message = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          message =
            "Location information is unavailable (possibly due to poor signal or internal error).";
          break;
        case error.TIMEOUT:
          message = "The request to get user location timed out.";
          break;
        default:
          message = "An unknown error occurred.";
          break;
      }

      setCoords((prev) => ({
        ...prev,
        error: message,
        isWatching: false,
      }));
    };

    if (watch) {
      const watchId = navigator.geolocation.watchPosition(success, error, geoOptions);
      setCoords((prev) => ({ ...prev, isWatching: true }));

      return () => {
        navigator.geolocation.clearWatch(watchId);
        setCoords((prev) => ({ ...prev, isWatching: false }));
      };
    } else {
      navigator.geolocation.getCurrentPosition(success, error, geoOptions);
    }
  }, [watch, enableHighAccuracy, timeout, maximumAge]);

  return coords;
}

export default useCurrentLocation;
