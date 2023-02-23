import { useLayoutEffect, useState } from 'react';

const useWindowWidth = () => {
  const [width, setWidth] = useState(null);

  useLayoutEffect(() => {
    if (!window) return;
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return width;
};

export default useWindowWidth;
