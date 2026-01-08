/**
 * HTTP client for API calls
 */

/**
 * Fetch wrapper with error handling
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} - Response data
 */
export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

/**
 * GET request
 * @param {string} url - API endpoint
 * @returns {Promise} - Response data
 */
export const get = (url) => {
  return fetchData(url, { method: 'GET' });
};

/**
 * POST request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @returns {Promise} - Response data
 */
export const post = (url, data) => {
  return fetchData(url, {
    method: 'POST',
    body: JSON.stringify(data)
  });
};

/**
 * PUT request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @returns {Promise} - Response data
 */
export const put = (url, data) => {
  return fetchData(url, {
    method: 'PUT',
    body: JSON.stringify(data)
  });
};

/**
 * DELETE request
 * @param {string} url - API endpoint
 * @returns {Promise} - Response data
 */
export const del = (url) => {
  return fetchData(url, { method: 'DELETE' });
};

/**
 * PATCH request
 * @param {string} url - API endpoint
 * @param {object} data - Request body
 * @returns {Promise} - Response data
 */
export const patch = (url, data) => {
  return fetchData(url, {
    method: 'PATCH',
    body: JSON.stringify(data)
  });
};
