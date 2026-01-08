// Error logging service
const logError = (error, context = {}) => {
  console.error('Error:', error);
  console.error('Context:', context);
  // Can be extended to send to error tracking service
};

export default logError;
