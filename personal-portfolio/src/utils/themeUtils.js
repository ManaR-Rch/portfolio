// Theme utilities
const lightTheme = {
  primary: '#FF006E',
  secondary: '#8338EC',
  background: '#FFFFFF',
  text: '#161A30',
};

const darkTheme = {
  primary: '#FF006E',
  secondary: '#8338EC',
  background: '#161A30',
  text: '#FFFFFF',
};

export const getTheme = (isDark) => isDark ? darkTheme : lightTheme;

export const applyTheme = (theme) => {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
};
