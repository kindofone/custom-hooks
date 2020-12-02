import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
  }, []);

  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  return [isSmallScreen, checkScreenSize];
};

export default useScreenSize;