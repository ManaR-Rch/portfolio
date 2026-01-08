/**
 * Analytics utilities for tracking user behavior
 */

/**
 * Initialize Google Analytics
 */
export const initializeAnalytics = (gaId) => {
  if (!gaId) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', gaId);
};

/**
 * Track page view
 */
export const trackPageView = (pageTitle, pagePath) => {
  if (typeof gtag !== 'undefined') {
    window.gtag('config', process.env.REACT_APP_GA_ID, {
      page_title: pageTitle,
      page_path: pagePath
    });
  }
};

/**
 * Track custom event
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track link click
 */
export const trackLinkClick = (linkName, linkUrl) => {
  trackEvent('link_click', {
    link_name: linkName,
    link_url: linkUrl
  });
};

/**
 * Track project view
 */
export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    project_name: projectName
  });
};

/**
 * Track skill view
 */
export const trackSkillView = (skillName) => {
  trackEvent('skill_view', {
    skill_name: skillName
  });
};

/**
 * Track form submission
 */
export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });
};
