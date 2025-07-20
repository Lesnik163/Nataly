import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const HEADER_HEIGHT = 100;

export const useScrollEffect = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > HEADER_HEIGHT) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setIsScrolled(false);

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return isScrolled;
};
