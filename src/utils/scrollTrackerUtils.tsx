import { useEffect, useState, useRef } from 'react';

type ScrollDirection = 'up' | 'down' | null;

interface ScrollInfo {
  scrollY: number;
  scrollPercent: number;
  isScrolling: boolean;
  scrollDirection: ScrollDirection;
}

export const useScrollTracker = (): ScrollInfo => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = () => {
    const currentY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Update direction
    if (currentY > lastScrollY.current) {
      setScrollDirection('down');
    } else if (currentY < lastScrollY.current) {
      setScrollDirection('up');
    }

    // Update values
    lastScrollY.current = currentY;
    setScrollY(currentY);
    setScrollPercent(Math.min(100, Math.max(0, (currentY / maxScroll) * 100)));
    setIsScrolling(true);

    // Reset isScrolling after user stops scrolling
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150); // 150ms sau khi dừng scroll
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { scrollY, scrollPercent, isScrolling, scrollDirection };
};
