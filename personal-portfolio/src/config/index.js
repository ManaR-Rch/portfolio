/**
 * Application configuration constants
 */

export const CONFIG = {
  // Site info
  SITE_NAME: 'Manar Marchoube Portfolio',
  SITE_DESCRIPTION: 'Full-Stack Developer Portfolio',
  SITE_URL: process.env.REACT_APP_SITE_URL || 'https://manar-portfolio.com',

  // API
  API_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  API_TIMEOUT: parseInt(process.env.REACT_APP_API_TIMEOUT) || 5000,

  // Analytics
  ANALYTICS_ENABLED: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  GA_ID: process.env.REACT_APP_GA_ID,

  // Contact info
  EMAIL: process.env.REACT_APP_EMAIL || 'manarmarchou6@gmail.com',
  PHONE: process.env.REACT_APP_PHONE || '+212600603449',

  // Social links
  GITHUB: process.env.REACT_APP_GITHUB_URL || 'https://github.com/ManaR-Rch',
  LINKEDIN: process.env.REACT_APP_LINKEDIN_URL || 'https://www.linkedin.com/in/manar-marchoube-a955a9337',

  // Feature flags
  DEBUG_MODE: process.env.REACT_APP_ENABLE_DEBUG === 'true',

  // Animation settings
  ANIMATION_DURATION: 300,
  SCROLL_THRESHOLD: 100,

  // Colors
  COLORS: {
    PRIMARY: '#8d37a4',
    SECONDARY: '#d946ef',
    DARK: '#121212',
    LIGHT: '#f5f5f5'
  }
};
