// Toast notification utility
export const showToast = (message, type = 'info') => {
  console.log(`[${type.toUpperCase()}] ${message}`);
};

export const showSuccessToast = (message) => showToast(message, 'success');
export const showErrorToast = (message) => showToast(message, 'error');
export const showWarningToast = (message) => showToast(message, 'warning');
