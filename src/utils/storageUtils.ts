// utils/storageUtils.ts
export class StorageUtils {
  private static prefix = "app_";

  /**
   * Saves a value to localStorage.
   * @param key The key to store the value under.
   * @param value The value to store.
   * @param expires The number of milliseconds from now to expire the value.
   * If undefined, the value will not expire.
   */
  static setItem(key: string, value: any, expires?: number) {
    const item = {
      value,
      expires: expires ? Date.now() + expires : null,
    };
    localStorage.setItem(this.prefix + key, JSON.stringify(item));
  }

  /**
   * Retrieves a value from localStorage.
   * @param key The key to retrieve the value for.
   * @returns The value stored, or null if it does not exist or has expired.
   */
  static getItem<T>(key: string): T | null {
    const itemStr = localStorage.getItem(this.prefix + key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    if (item.expires && Date.now() > item.expires) {
      localStorage.removeItem(this.prefix + key);
      return null;
    }

    return item.value;
  }

  /**
   * Removes the item with the given key from localStorage.
   * @param key The key of the item to remove.
   */
  static removeItem(key: string) {
    localStorage.removeItem(this.prefix + key);
  }

  /**
   * Clears all values stored by this class from localStorage.
   */
  static clear() {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(this.prefix))
      .forEach((key) => localStorage.removeItem(key));
  }
}
