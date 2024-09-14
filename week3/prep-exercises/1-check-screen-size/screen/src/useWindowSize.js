import { useState, useEffect, useDebugValue } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Custom message for debugging in React DevTools
  useDebugValue(windowSize.width > 768 ? 'Desktop View' : 'Mobile View');

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);  // Empty dependency array ensures this runs once on mount

  return windowSize;
}

export default useWindowSize;
