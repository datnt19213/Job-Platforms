"use client";
import React, { useEffect } from 'react';

import { twMerge } from 'tailwind-merge';

// components/layout/GridLayout.tsx
import { useEventListener } from '@/hooks/common';

interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
	columns?: number;
	gap?: number;
	responsive?: boolean;
	className?: string;
	children?: React.ReactNode;
	breakpoints?: {
		minWidth: number;
		columns: number;
	}[];
}

export const GridLayout: React.FC<GridLayoutProps> = ({
	columns = 3,
	gap = 4,
	responsive = true,
	breakpoints,
	className,
	children,
	...props
}) => {
	const [currentColumns, setCurrentColumns] = React.useState(columns);
	const contentRef = React.useRef<HTMLDivElement>(null);
	const [height, setHeight] = React.useState(0);

	const updateColumns = React.useCallback(() => {
		if (responsive && breakpoints) {
			const width = window.innerWidth;
			let newColumns = columns;

			const sorted = [...breakpoints].sort((a, b) => b.minWidth - a.minWidth);
			for (const bp of sorted) {
				if (width >= bp.minWidth) {
					newColumns = bp.columns;
					break;
				}
			}

			setCurrentColumns(newColumns);
		}
	}, [responsive, breakpoints, columns]);

	useEffect(() => {
		updateColumns(); // tính lần đầu khi mount
	}, [updateColumns]);

	useEventListener("resize", updateColumns); // cập nhật khi resize

	useEventListener("resize", () => {
		if (contentRef.current) {
			setHeight(contentRef.current.offsetHeight);
		}
	});

	return (
		<div
			ref={contentRef}
			style={{
				gridTemplateColumns: `repeat(${currentColumns}, minmax(0, 1fr))`,
				gap: `${gap}px !important`,
				display: "grid",
			}}
			className={twMerge(className)}
			{...props}
		>
			{React.Children.map(children, child => child)}
		</div>
	);
};
