// Environment variables constants
export const ENVIRONMENT = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
};

export const CURRENT_ENV = process.env.NODE_ENV || ENVIRONMENT.DEV;

// Feature flags
export const FEATURES = {
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_DARK_MODE: true,
  ENABLE_NOTIFICATIONS: true,
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
};
