/**
 * Storage utilities for browser storage management
 */

/**
 * Set item in localStorage
 */
export const setLocalStorage = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error('LocalStorage set error:', error);
    return false;
  }
};

/**
 * Get item from localStorage
 */
export const getLocalStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('LocalStorage get error:', error);
    return defaultValue;
  }
};

/**
 * Remove item from localStorage
 */
export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('LocalStorage remove error:', error);
    return false;
  }
};

/**
 * Clear all localStorage
 */
export const clearLocalStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('LocalStorage clear error:', error);
    return false;
  }
};

/**
 * Set item in sessionStorage
 */
export const setSessionStorage = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    sessionStorage.setItem(key, serialized);
    return true;
  } catch (error) {
    console.error('SessionStorage set error:', error);
    return false;
  }
};

/**
 * Get item from sessionStorage
 */
export const getSessionStorage = (key, defaultValue = null) => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('SessionStorage get error:', error);
    return defaultValue;
  }
};
