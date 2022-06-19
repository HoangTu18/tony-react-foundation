import { useState, useLayoutEffect } from 'react';

export const useResizeWindow = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  function checkScreenSize() {
    setOnSmallScreen(window.innerWidth < 768);
  }

  useLayoutEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // result
  return {
    onSmallScreen
  }
}