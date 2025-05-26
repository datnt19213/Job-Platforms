// hooks/useAsyncState.ts
import {useState, useCallback} from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * A custom React hook that manages the state of an asynchronous operation.
 *
 * @template T - The type of the result of the asynchronous function.
 *
 * @param asyncFunction - The asynchronous function to be executed. It should accept an optional parameter and return a Promise.
 * @param immediate - A boolean indicating whether the asynchronous function should be executed immediately when the hook is initialized. Default is true.
 *
 * @returns An object containing the current state of the asynchronous operation and a function to execute the asynchronous function.
 *
 * @example
 * ```typescript
 * const { data, loading, error, execute } = useAsyncState(fetchData, false);
 *
 * useEffect(() => {
 *   execute();
 * }, []);
 * ```
 */
export function useAsyncState<T>(
  asyncFunction: (params?: any) => Promise<T>,
  immediate = true
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (params?: any) => {
      setState((prev) => ({...prev, loading: true}));

      try {
        const result = await asyncFunction(params);
        setState({
          data: result,
          loading: false,
          error: null,
        });
        return result;
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error instanceof Error ? error : new Error(String(error)),
        });
        throw error;
      }
    },
    [asyncFunction]
  );

  useCallback(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    ...state,
    execute,
  };
}
