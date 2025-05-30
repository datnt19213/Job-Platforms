"use client"
import {cn} from "@/lib/utils";
import {useScrollTracker} from "@/utils/scrollTrackerUtils";
import React from "react";

interface ScrollerProps {
	classNames?: {
		container?: string;
		content?: string;
	};
	styles?: {
		container?: React.CSSProperties;
		content?: React.CSSProperties;
	};
}
export const Scroller: React.FC<ScrollerProps> = ({classNames, styles}) => {
	const {isScrolling, scrollDirection, scrollPercent, scrollY} = useScrollTracker();
	return (
		<div
			style={{
				position: "fixed",
				top: "0",
				left: "0",
				width: "100%",
        height: "2px",
				zIndex: 100,
        opacity: isScrolling ? 1 : 0,
        transition: "all 0.3s ease-in-out",
				...styles?.container,
			}}
      className={cn("bg-gray-50 h-[2px]", classNames?.container)}
		>
			<div style={{width: `${scrollPercent}%`, ...styles?.content}} className={cn("bg-blue-dark rounded-full h-[2px]", classNames?.container)} />
		</div>
	);
};
