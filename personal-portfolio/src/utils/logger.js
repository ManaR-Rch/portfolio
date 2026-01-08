/**
 * Logger utility for development and production
 */

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3
};

const currentLogLevel = process.env.REACT_APP_ENABLE_DEBUG ? LOG_LEVELS.DEBUG : LOG_LEVELS.INFO;

/**
 * Format log message with timestamp
 */
const formatMessage = (level, message, data) => {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level}]`;
  return `${prefix} ${message}${data ? ' - ' + JSON.stringify(data) : ''}`;
};

/**
 * Debug logging
 */
export const logDebug = (message, data) => {
  if (currentLogLevel <= LOG_LEVELS.DEBUG) {
    console.debug(formatMessage('DEBUG', message, data));
  }
};

/**
 * Info logging
 */
export const logInfo = (message, data) => {
  if (currentLogLevel <= LOG_LEVELS.INFO) {
    console.info(formatMessage('INFO', message, data));
  }
};

/**
 * Warning logging
 */
export const logWarn = (message, data) => {
  if (currentLogLevel <= LOG_LEVELS.WARN) {
    console.warn(formatMessage('WARN', message, data));
  }
};

/**
 * Error logging
 */
export const logError = (message, error) => {
  if (currentLogLevel <= LOG_LEVELS.ERROR) {
    console.error(formatMessage('ERROR', message, error));
  }
};

/**
 * Performance monitoring
 */
export const measurePerformance = (label, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  logInfo(`${label} took ${(end - start).toFixed(2)}ms`);
  return result;
};
