// Object manipulation utilities
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

export const mergeObjects = (...objects) => {
  return objects.reduce((merged, obj) => {
    return { ...merged, ...obj };
  }, {});
};

export const filterObject = (obj, predicate) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(key, value))
  );
};

export const invertObject = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
};
