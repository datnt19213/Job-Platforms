// components/ui/BaseComponent.tsx
import React, {forwardRef, JSX} from "react";
import {twMerge} from "tailwind-merge";
import {cva, VariantProps} from "class-variance-authority";

// Variant base cho mọi component
export const baseVariants = cva("transition-all duration-300 ease-in-out", {
  variants: {
    sizes: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
    colors: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    },
    variants: {
      solid: "bg-current text-white",
      outline: "border border-current bg-transparent text-current",
      ghost: "bg-transparent text-current hover:bg-gray-100",
    },
    roundeds: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    sizes: "md",
    colors: "primary",
    variants: "solid",
    roundeds: "md",
  },
});

// Interface chung cho component
interface BaseComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof baseVariants> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

// The background component can be expanded
export const BaseComponent = forwardRef<HTMLElement, BaseComponentProps>(
  (
    {
      as = "div",
      sizes,
      colors,
      variants,
      roundeds,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;
    const componentProps = {
      ref,
      className: twMerge(
        baseVariants({sizes, colors, variants, roundeds}),
        className
      ),
      ...props,
    };

    return React.createElement(Component, componentProps, children);
  }
);
