// hooks/useAdvancedState.ts
import {useState, useCallback, useRef} from "react";

/**
 * A custom React hook that provides advanced state management capabilities.
 *
 * @template T - The type of the state.
 * @param {T} initialState - The initial state value.
 * @returns {{
 *   state: T,
 *   setState: (newState: T | ((prev: T) => T)) => void,
 *   resetState: () => void,
 *   undoState: () => void,
 *   prevState: T,
 * }} An object containing the current state, update functions, and previous state.
 *
 * @example
 * ```typescript
 * import React from "react";
 * import { useAdvancedState } from "./useAdvancedState";
 *
 * const Counter: React.FC = () => {
 *   const { state, setState, resetState, undoState } = useAdvancedState(0);
 *
 *   return (
 *     <div>
 *       <p>Current count: {state}</p>
 *       <button onClick={() => setState((prev) => prev + 1)}>Increment</button>
 *       <button onClick={() => setState((prev) => prev - 1)}>Decrement</button>
 *       <button onClick={resetState}>Reset</button>
 *       <button onClick={undoState}>Undo</button>
 *     </div>
 *   );
 * };
 *
 * export default Counter;
 * ```
 */
export function useAdvancedState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const prevStateRef = useRef<T>(initialState);

  const updateState = useCallback((newState: T | ((prev: T) => T)) => {
    setState((prev) => {
      const resolvedState =
        typeof newState === "function"
          ? (newState as (prev: T) => T)(prev)
          : newState;

      prevStateRef.current = prev;
      return resolvedState;
    });
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  const undoState = useCallback(() => {
    setState(prevStateRef.current);
  }, []);

  return {
    state,
    setState: updateState,
    resetState,
    undoState,
    prevState: prevStateRef.current,
  };
}
