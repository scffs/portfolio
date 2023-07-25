import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const ScrollLock = ({ isLocked, children }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1000 });

  useEffect(() => {
    const handleScroll = () => {
      if (isLocked && !isTabletOrMobile) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    handleScroll();
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLocked, isTabletOrMobile]);

  return <>{children}</>;
};

export default ScrollLock;
