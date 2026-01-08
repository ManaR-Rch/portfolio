// Math utilities
export const clamp = (value, min, max) => {
  return Math.max(min, Math.min(max, value));
};

export const lerp = (a, b, t) => {
  return a + (b - a) * t;
};

export const map = (value, inMin, inMax, outMin, outMax) => {
  return outMin + (value - inMin) * (outMax - outMin) / (inMax - inMin);
};

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const distance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};
