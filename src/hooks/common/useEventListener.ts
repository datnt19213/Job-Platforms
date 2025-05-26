// hooks/useEventListener.ts
import {useEffect, useRef} from "react";

/**
 * A custom React hook that adds an event listener to the window object and removes it when the component unmounts.
 *
 * @template K - The type of event to listen for, which must be a key of the `WindowEventMap` interface.
 * @param {K} eventName - The name of the event to listen for.
 * @param {(event: WindowEventMap[K]) => void} handler - The function to call when the event is triggered.
 * @param {AddEventListenerOptions} [options={}] - Additional options for the event listener.
 *
 * @returns {void}
 *
 * @example
 * // Example usage: Listen for the 'resize' event and update component state
 * import React, { useState } from 'react';
 * import { useEventListener } from './useEventListener';
 *
 * const MyComponent = () => {
 *   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
 *
 *   useEventListener('resize', () => {
 *     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
 *   });
 *
 *   return (
 *     <div>
 *       <p>Window size: {windowSize.width} x {windowSize.height}</p>
 *     </div>
 *   );
 * };
 */
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  options: AddEventListenerOptions = {}
): void {
  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: WindowEventMap[K]) => {
      handlerRef.current(event);
    };

    window.addEventListener(eventName, eventListener, options);

    return () => {
      window.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, options]);
}
