import React from "react";
import clsx from "clsx";

interface DividerProps {
  text?: string;
  textPosition?: "left" | "center" | "right";
  lineColor?: string;
  lineThickness?: string;
  textColor?: string;
  textSize?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  text = "PLUS",
  textPosition = "center",
  lineColor = "bg-gray-300/50",
  lineThickness = "bg-[1px]",
  textColor = "text-gray-600",
  textSize = "text-sm",
  className,
}) => {
  return (
    <div className={clsx("flex items-center w-full", className)}>
      {/* Dòng bên trái */}
      <div
        className={clsx(
          "flex-1 h-px",
          lineColor,
          lineThickness,
          textPosition === "left" && "w-2/3"
        )}
      />
      {/* Nội dung văn bản */}
      {text && (
        <span
          className={clsx(
            "px-2",
            textColor,
            textSize,
            textPosition === "left"
              ? "pl-4"
              : textPosition === "right"
              ? "pr-4"
              : "px-2"
          )}
        >
          {text}
        </span>
      )}
      {/* Dòng bên phải */}
      <div
        className={clsx(
          "flex-1 h-px",
          lineColor,
          lineThickness,
          textPosition === "right" && "w-2/3"
        )}
      />
    </div>
  );
};
