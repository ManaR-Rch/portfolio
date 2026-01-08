// Browser utilities
export const getBrowserInfo = () => {
  const ua = navigator.userAgent;
  const isChrome = /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor);
  const isFirefox = /Firefox/.test(ua);
  const isSafari = /Safari/.test(ua) && /Apple Computer/.test(navigator.vendor);
  
  return { isChrome, isFirefox, isSafari };
};

export const getWindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const isOnline = () => navigator.onLine;

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
