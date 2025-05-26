import React, {
  useEffect,
  useState,
} from 'react';

import clsx from 'clsx';

type SmartLoaderProps = {
  loading: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  mode?: 'overlay' | 'inline';
  spinnerSize?: number | string;
  spinnerColor?: string;
  backgroundColor?: string;
  blur?: boolean;
  fullHeight?: boolean;
  timeoutComponent?: React.ReactNode;
  timeoutMs?: number;
  isTimeout?: boolean;
  className?: string;
  containerClassOverlay?: string;
  loaderClass?: string;
};

const SmartLoader: React.FC<SmartLoaderProps> = ({
  loading,
  children,
  fallback,
  mode = 'inline',
  spinnerSize = 32,
  spinnerColor = '#4B5563',
  backgroundColor = 'rgba(255, 255, 255, 0.6)',
  blur = false,
  fullHeight = false,
  className,
  containerClassOverlay,
  loaderClass,
  timeoutComponent,
  timeoutMs = 10000,
  isTimeout = true,
}) => {
  const [showTimeout, setShowTimeout] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (loading && isTimeout && timeoutComponent) {
      timer = setTimeout(() => {
        setShowTimeout(true);
      }, timeoutMs);
    } else {
      setShowTimeout(false);
    }

    return () => clearTimeout(timer);
  }, [loading, isTimeout, timeoutComponent, timeoutMs]);

  if (!loading) return <>{children}</>;

  if (showTimeout && timeoutComponent) return <>{timeoutComponent}</>;

  const spinner = fallback || (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={spinnerSize}
      height={spinnerSize}
      viewBox="0 0 24 24"
      fill="none"
      stroke={spinnerColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );

  if (mode === 'overlay') {
    return (
      <div className={clsx("relative", containerClassOverlay)}>
        <div className={clsx(fullHeight ? 'min-h-screen' : 'h-full', className)}>{children}</div>
        <div
          className={clsx(
            'absolute inset-0 flex items-center justify-center transition-all',
            blur && 'backdrop-blur-sm', loaderClass
          )}
          style={{ backgroundColor }}
        >
          {spinner}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx("flex justify-center items-center p-4", loaderClass)}>
      {spinner}
    </div>
  );
};

export default SmartLoader;
