// API Response handler
export const handleApiResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(`HTTP Error: ${response.status}`);
};

export const handleApiError = (error) => {
  console.error('API Error:', error);
  throw error;
};
