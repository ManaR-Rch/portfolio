// URL utilities
export const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const result = {};
  params.forEach((value, key) => {
    result[key] = value;
  });
  return result;
};

export const buildQueryString = (params) => {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
};

export const updateURL = (params) => {
  const queryString = buildQueryString(params);
  window.history.replaceState({}, '', `?${queryString}`);
};

export const getHashParams = () => {
  const hash = window.location.hash.substring(1);
  return hash.split('&').reduce((acc, param) => {
    const [key, value] = param.split('=');
    acc[decodeURIComponent(key)] = decodeURIComponent(value);
    return acc;
  }, {});
};
