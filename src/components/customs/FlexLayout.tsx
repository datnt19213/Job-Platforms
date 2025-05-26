// components/layout/FlexLayout.tsx
import React from "react";
import {twMerge} from "tailwind-merge";

type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse";
type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
type AlignItems = "start" | "end" | "center" | "baseline" | "stretch";

interface FlexLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirection;
  justify?: JustifyContent;
  align?: AlignItems;
  wrap?: boolean;
  gap?: number;
}

export const FlexLayout: React.FC<FlexLayoutProps> = ({
  direction = "row",
  justify = "start",
  align = "stretch",
  wrap = false,
  gap = 0,
  className,
  children,
  ...props
}) => {
  const directionClasses = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
  };

  const justifyClasses = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignClasses = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
  };

  return (
    <div
      className={twMerge(
        "flex",
        directionClasses[direction],
        justifyClasses[justify],
        alignClasses[align],
        wrap && "flex-wrap",
        `gap-${gap}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
