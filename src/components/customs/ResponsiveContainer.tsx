// components/layout/ResponsiveContainer.tsx
import React from "react";
import {twMerge} from "tailwind-merge";

interface ResponsiveContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  centered?: boolean;
  padding?: number;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  maxWidth = "lg",
  centered = true,
  padding = 4,
  className,
  children,
  ...props
}) => {
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  };

  return (
    <div
      className={twMerge(
        maxWidthClasses[maxWidth],
        centered && "mx-auto",
        `p-${padding}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
