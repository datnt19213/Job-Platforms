'use client';

import {
  useEffect,
  useState,
} from 'react';

interface NonHyrationProps {
  children: React.ReactNode;
}

/**
 * This component is used to prevent hydration errors.
 */
const NonHyration = ({ children }: NonHyrationProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{children}</>;
};

export default NonHyration;
