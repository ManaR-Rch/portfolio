// String manipulation utilities
export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

export const truncateString = (str, length) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export const reverseString = (str) => {
  return str.split('').reverse().join('');
};
