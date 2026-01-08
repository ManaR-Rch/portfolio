// Performance monitoring utilities
export const measurePerformance = (label, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label}: ${end - start}ms`);
  return result;
};

export const measureAsyncPerformance = async (label, fn) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(`${label}: ${end - start}ms`);
  return result;
};

export const logMetrics = () => {
  if (performance.getEntriesByType) {
    const metrics = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Metrics:', metrics);
  }
};
