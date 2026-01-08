/**
 * Performance optimization utilities
 */

/**
 * Debounce function execution
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {function} - Debounced function
 */
export const debounce = (func, delay = 300) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Throttle function execution
 * @param {function} func - Function to throttle
 * @param {number} limit - Time limit in ms
 * @returns {function} - Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Memoize function results
 * @param {function} func - Function to memoize
 * @returns {function} - Memoized function
 */
export const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};

/**
 * Lazy load image
 * @param {string} src - Image source
 * @returns {Promise} - Image loaded promise
 */
export const lazyLoadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Check connection speed
 * @returns {Promise} - Connection speed info
 */
export const checkConnectionSpeed = async () => {
  const startTime = performance.now();
  try {
    await fetch('data:text/plain,test');
    const endTime = performance.now();
    return endTime - startTime;
  } catch {
    return null;
  }
};
