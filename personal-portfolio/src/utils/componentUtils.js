// React component utilities
export const withErrorBoundary = (Component) => {
  return (props) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export const withLoading = (Component, LoadingComponent) => {
  return ({ isLoading, ...props }) => (
    isLoading ? <LoadingComponent /> : <Component {...props} />
  );
};

export const withConditionalRender = (Component, condition) => {
  return (props) => condition ? <Component {...props} /> : null;
};
