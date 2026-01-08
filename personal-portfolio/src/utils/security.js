// Security headers middleware
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self' https:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
};

/**
 * Set security headers in response
 */
export const setSecurityHeaders = () => {
  if (typeof window !== 'undefined') {
    Object.keys(securityHeaders).forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header;
      meta.content = securityHeaders[header];
      document.head.appendChild(meta);
    });
  }
};

/**
 * Sanitize HTML string
 * @param {string} html - HTML to sanitize
 * @returns {string} - Sanitized HTML
 */
export const sanitizeHTML = (html) => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Validate and sanitize URL
 * @param {string} url - URL to validate
 * @returns {string|null} - Sanitized URL or null
 */
export const sanitizeURL = (url) => {
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:', 'mailto:'].includes(parsed.protocol)) {
      return null;
    }
    return parsed.toString();
  } catch {
    return null;
  }
};

/**
 * Escape special characters for safe output
 * @param {string} str - String to escape
 * @returns {string} - Escaped string
 */
export const escapeSpecialChars = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};
