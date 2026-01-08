/**
 * Validation utility functions
 */

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {object} - Validation result
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: regex.test(email),
    error: regex.test(email) ? null : 'Invalid email format'
  };
};

/**
 * Validate URL format
 * @param {string} url - URL to validate
 * @returns {object} - Validation result
 */
export const validateUrl = (url) => {
  try {
    new URL(url);
    return { isValid: true, error: null };
  } catch {
    return { isValid: false, error: 'Invalid URL' };
  }
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {object} - Validation result
 */
export const validatePhone = (phone) => {
  const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return {
    isValid: regex.test(phone),
    error: regex.test(phone) ? null : 'Invalid phone format'
  };
};

/**
 * Validate required field
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error message
 * @returns {object} - Validation result
 */
export const validateRequired = (value, fieldName = 'Field') => {
  const isEmpty = value === null || value === undefined || value === '';
  return {
    isValid: !isEmpty,
    error: isEmpty ? `${fieldName} is required` : null
  };
};

/**
 * Validate minimum length
 * @param {string} value - Value to validate
 * @param {number} minLength - Minimum length
 * @returns {object} - Validation result
 */
export const validateMinLength = (value, minLength = 3) => {
  const isValid = value && value.length >= minLength;
  return {
    isValid,
    error: isValid ? null : `Minimum length is ${minLength} characters`
  };
};

/**
 * Validate form data
 * @param {object} formData - Form data object
 * @param {object} schema - Validation schema
 * @returns {object} - Validation errors
 */
export const validateForm = (formData, schema) => {
  const errors = {};
  Object.keys(schema).forEach(field => {
    const validation = schema[field](formData[field]);
    if (!validation.isValid) {
      errors[field] = validation.error;
    }
  });
  return errors;
};
