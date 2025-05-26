// components/layout/GridLayout.tsx
import React from "react";
import {twMerge} from "tailwind-merge";

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: number;
  responsive?: boolean;
}

export const GridLayout: React.FC<GridLayoutProps> = ({
  columns = 3,
  gap = 4,
  responsive = true,
  className,
  children,
  ...props
}) => {
  const gridClasses = responsive
    ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} lg:grid-cols-${columns}`
    : `grid grid-cols-${columns}`;

  return (
    <div className={twMerge(gridClasses, `gap-${gap}`, className)} {...props}>
      {children}
    </div>
  );
};
