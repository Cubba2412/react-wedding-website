import { useCallback, useEffect, useState } from 'react';

const useResponsiveSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const setSizes = useCallback(() => {
    const container = document.getElementById('canvas-container');
    if (container) {
      setWidth(container.offsetWidth);
      setHeight(container.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const container = document.getElementById('canvas-container');
    if (container) {
      const resizeObserver = new ResizeObserver(() => setSizes());
      resizeObserver.observe(container);

      // Initial size set
      setSizes();

      return () => resizeObserver.disconnect(); // Cleanup observer on unmount
    }

    // If container is not found, return undefined
    return undefined;
  }, [setSizes]);

  return { width, height };
};

export default useResponsiveSize;
