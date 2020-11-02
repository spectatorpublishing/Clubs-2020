import { useState, useEffect } from 'react';

export const useFocused = obj => {
  const [active, setActive] = useState(document.activeElement);

  const handleFocusIn = e => {
    if (obj.current === document.activeElement) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    document.addEventListener('focusin', handleFocusIn);
    return () => {
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, []);

  return active;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,

        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};
