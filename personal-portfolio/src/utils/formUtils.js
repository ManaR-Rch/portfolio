// Form utilities
export const handleFormChange = (e, setState) => {
  const { name, value } = e.target;
  setState(prev => ({ ...prev, [name]: value }));
};

export const handleFormSubmit = async (e, formData, onSubmit) => {
  e.preventDefault();
  try {
    await onSubmit(formData);
  } catch (error) {
    console.error('Form submission error:', error);
  }
};

export const resetForm = (setFormData, initialState) => {
  setFormData(initialState);
};

export const validateForm = (formData, rules) => {
  const errors = {};
  Object.keys(rules).forEach(field => {
    if (!rules[field](formData[field])) {
      errors[field] = `${field} is invalid`;
    }
  });
  return errors;
};
