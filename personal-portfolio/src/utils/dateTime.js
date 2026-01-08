/**
 * Date and time utilities
 */

/**
 * Get current date
 */
export const getCurrentDate = () => {
  return new Date();
};

/**
 * Format date to locale string
 */
export const formatDateLocale = (date) => {
  return new Date(date).toLocaleDateString();
};

/**
 * Format time
 */
export const formatTime = (date, locale = 'en-US') => {
  return new Date(date).toLocaleTimeString(locale);
};

/**
 * Get time ago (e.g., "2 days ago")
 */
export const getTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  for (const [key, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
};

/**
 * Add days to date
 */
export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Get difference in days
 */
export const getDaysDifference = (date1, date2) => {
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.floor((new Date(date2) - new Date(date1)) / msPerDay);
};
