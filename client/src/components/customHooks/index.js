import { useState, useEffect } from 'react';

export const useFocused = ( obj ) => {
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
