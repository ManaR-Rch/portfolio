// Middleware for request/response handling
export const requestLogger = (request) => {
  console.log('API Request:', request);
  return request;
};

export const responseLogger = (response) => {
  console.log('API Response:', response);
  return response;
};

export const errorLogger = (error) => {
  console.error('API Error:', error);
  throw error;
};

export const authMiddleware = (request) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    request.headers = {
      ...request.headers,
      'Authorization': `Bearer ${token}`,
    };
  }
  return request;
};
