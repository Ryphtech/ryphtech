import { useState, useEffect } from 'react';

// Font loading utility to prevent GSAP SplitText warnings
export const waitForFonts = () => {
  return new Promise((resolve) => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(resolve);
    } else {
      // Fallback for browsers that don't support document.fonts
      setTimeout(resolve, 100);
    }
  });
};

// Hook for components that need to wait for fonts
export const useFontLoader = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    waitForFonts().then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return fontsLoaded;
};
