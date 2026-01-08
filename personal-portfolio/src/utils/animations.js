/**
 * Animation and transition utilities
 */

/**
 * Create fade-in animation
 * @returns {object} - Animation styles
 */
export const fadeInAnimation = () => ({
  animation: 'fadeIn 1.2s ease-in'
});

/**
 * Create slide-up animation
 * @returns {object} - Animation styles
 */
export const slideUpAnimation = () => ({
  animation: 'slideUp 1.2s ease-out'
});

/**
 * Create zoom animation
 * @returns {object} - Animation styles
 */
export const zoomAnimation = () => ({
  animation: 'zoomIn 1.2s ease-out'
});

/**
 * Create smooth transition
 * @param {string} property - CSS property to transition
 * @param {number} duration - Duration in ms
 * @param {string} timing - Timing function
 * @returns {object} - Transition styles
 */
export const smoothTransition = (property = 'all', duration = 600, timing = 'ease') => ({
  transition: `${property} ${duration}ms ${timing}`
});

/**
 * Create hover scale effect
 * @param {number} scale - Scale factor
 * @returns {object} - Transform styles
 */
export const hoverScale = (scale = 1.05) => ({
  transform: `scale(${scale})`,
  transition: 'transform 0.6s ease'
});

/**
 * Delay execution
 * @param {function} callback - Function to execute
 * @param {number} delay - Delay in ms
 * @returns {number} - Timeout ID
 */
export const delayExecution = (callback, delay = 300) => {
  return setTimeout(callback, delay);
};

/**
 * Request animation frame wrapper
 * @param {function} callback - Function to execute
 */
export const requestAnimFrame = (callback) => {
  return requestAnimationFrame(callback);
};

/**
 * Cancel animation frame
 * @param {number} id - Animation frame ID
 */
export const cancelAnimFrame = (id) => {
  cancelAnimationFrame(id);
};
