/**
 * SEO utilities for portfolio
 */

/**
 * Generate meta tags for SEO
 * @returns {object} - Meta tags object
 */
export const generateMetaTags = () => {
  return {
    title: 'Manar Marchoube - Full-Stack Developer Portfolio',
    description: 'Explore the portfolio of Manar Marchoube, a full-stack developer specializing in React.js, Laravel, and Java Spring Boot with 30+ projects.',
    keywords: 'Full-Stack Developer, React, Laravel, Java, Spring Boot, Web Development',
    author: 'Manar Marchoube',
    ogImage: '/og-image.png',
    ogUrl: 'https://manar-portfolio.com',
    ogType: 'website'
  };
};

/**
 * Generate JSON-LD structured data
 * @returns {object} - Structured data
 */
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manar Marchoube',
    url: 'https://manar-portfolio.com',
    sameAs: [
      'https://github.com/ManaR-Rch',
      'https://www.linkedin.com/in/manar-marchoube-a955a9337'
    ],
    jobTitle: 'Full-Stack Developer',
    email: 'manarmarchou6@gmail.com'
  };
};

/**
 * Generate sitemap entry
 * @param {string} url - Page URL
 * @param {string} lastmod - Last modified date
 * @param {string} changefreq - Change frequency
 * @param {number} priority - Priority (0-1)
 * @returns {object} - Sitemap entry
 */
export const generateSitemapEntry = (url, lastmod, changefreq = 'weekly', priority = 0.8) => {
  return {
    url,
    lastmod,
    changefreq,
    priority
  };
};

/**
 * Generate robots.txt content
 * @returns {string} - Robots.txt content
 */
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://manar-portfolio.com/sitemap.xml
`;
};

/**
 * Get canonical URL
 * @param {string} currentPath - Current page path
 * @returns {string} - Canonical URL
 */
export const getCanonicalUrl = (currentPath = '') => {
  return `https://manar-portfolio.com${currentPath}`;
};
