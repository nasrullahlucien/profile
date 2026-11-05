/**
 * Safe localStorage utilities that handle browser storage restrictions or disabled cookies.
 */

export function getStorageItem(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
  } catch (error) {
    console.warn(`[storage] Unable to read localStorage key "${key}":`, error);
  }
  return null;
}

export function setStorageItem(key: string, value: string): boolean {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
      return true;
    }
  } catch (error) {
    console.warn(`[storage] Unable to write localStorage key "${key}":`, error);
  }
  return false;
}
