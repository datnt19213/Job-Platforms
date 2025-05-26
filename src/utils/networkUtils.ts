// utils/networkUtils.ts
/**
 * Utility class providing network-related helper methods for handling HTTP requests,
 * retry mechanisms, and connection status monitoring.
 *
 * @class NetworkUtils
 *
 * @example
 * ```typescript
 * // Making a request with timeout
 * const response = await NetworkUtils.fetchWithTimeout('https://api.example.com');
 *
 * // Retrying a failed request
 * const data = await NetworkUtils.retryRequest(async () => {
 *   return await someAsyncOperation();
 * });
 *
 * // Checking online status
 * if (NetworkUtils.isOnline()) {
 *   // proceed with network operations
 * }
 *
 * // Monitoring connection changes
 * NetworkUtils.monitorConnection(
 *   () => console.log('Online'),
 *   () => console.log('Offline')
 * );
 * ```
 */
export class NetworkUtils {
  /**
   * Makes a fetch request with a given timeout in milliseconds. If the
   * request does not complete within the given timeout, the request is
   * aborted and a TimeoutError is thrown.
   *
   * @param url The URL of the request
   * @param options The options object to pass to fetch. Defaults to an empty object.
   * @param timeout The number of milliseconds to wait before aborting the request. Defaults to 5000.
   * @returns The response object from the successful request
   * @throws If the request times out, a TimeoutError is thrown
   *
   * @example
   * ```typescript
   * try {
   *   const response = await NetworkUtils.fetchWithTimeout('https://api.example.com/data', {
   *     method: 'GET',
   *     headers: { 'Content-Type': 'application/json' }
   *   }, 3000);
   *   const data = await response.json();
   * } catch (error) {
   *   console.error('Request failed:', error);
   * }
   * ```
   */
  static async fetchWithTimeout(
    url: string,
    options: RequestInit = {},
    timeout = 5000
  ): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(id);
      return response;
    } catch (error) {
      clearTimeout(id);
      throw error;
    }
  }

  /**
   * Attempts to execute a promise-returning function, retrying if it fails,
   * with an exponential backoff delay between retries.
   *
   * @param fn A function returning a promise to be executed.
   * @param maxRetries The maximum number of retry attempts before giving up. Defaults to 3.
   * @param delay The initial delay in milliseconds before retrying. This delay is doubled after each failed attempt. Defaults to 1000ms.
   * @returns The resolved value of the promise if successful.
   * @throws The error from the final failed attempt if all retries are exhausted.
   *
   * @example
   * ```typescript
   * try {
   *   const data = await NetworkUtils.retryRequest(
   *     async () => {
   *       const response = await fetch('https://api.example.com/data');
   *       return response.json();
   *     },
   *     3,    // maximum 3 retries
   *     1000  // starting with 1 second delay
   *   );
   *   console.log('Data retrieved:', data);
   * } catch (error) {
   *   console.error('All retry attempts failed:', error);
   * }
   * ```
   */

  static async retryRequest(
    fn: () => Promise<any>,
    maxRetries = 3,
    delay = 1000
  ): Promise<any> {
    try {
      return await fn();
    } catch (error) {
      if (maxRetries === 0) throw error;

      await new Promise((resolve) => setTimeout(resolve, delay));
      return this.retryRequest(fn, maxRetries - 1, delay * 2);
    }
  }

  /**
   * Checks the current online status of the browser.
   *
   * @returns {boolean} True if the browser is online, false otherwise.
   *
   * @example
   * ```typescript
   * if (NetworkUtils.isOnline()) {
   *   console.log('The browser is online.');
   * } else {
   *   console.log('The browser is offline.');
   * }
   * ```
   */

  static isOnline(): boolean {
    return navigator.onLine;
  }

  /**
   * Adds event listeners for online and offline events on the window object.
   *
   * @param {(() => void) | undefined} onOnline - A callback function to be executed when the browser comes online.
   * @param {(() => void) | undefined} onOffline - A callback function to be executed when the browser goes offline.
   *
   * @example
   * ```typescript
   * NetworkUtils.monitorConnection(
   *   () => console.log('Network connection restored'),
   *   () => console.log('Network connection lost')
   * );
   * ```
   */
  static monitorConnection(onOnline?: () => void, onOffline?: () => void) {
    window.addEventListener("online", onOnline || (() => {}));
    window.addEventListener("offline", onOffline || (() => {}));
  }
}
