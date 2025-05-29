"use client";
import React, { HTMLAttributes } from 'react';

import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonBaseProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
	asChild?: boolean;
	variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
	size?: "default" | "sm" | "lg" | "icon";
}

interface ButtonLikeBadgeProps extends ButtonBaseProps {
	isHover?: boolean;
	isClick?: boolean;
	isActive?: boolean;
}

interface ButtonLoadMoreProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
	children: (isLoading?: boolean) => React.ReactNode;
	className?: string;
	isLoading?: boolean;
	onClick?: () => void;
}

export const ButtonBase: React.FC<ButtonBaseProps> = ({
	className,
	children,
	asChild,
	variant = "default",
	size = "default",
	...props
}) => {
	return (
		<Button
			variant={variant}
			size={size}
			className={cn(
				"h-[50px] cursor-pointer w-fit px-10 font-semibold transition-all",
				variant === "default" ? "bg-blue-hover text-white hover:bg-blue-hover" : "",
				variant === "secondary"
					? "bg-blue-not-hover hover:bg-blue-hover text-blue-hover  hover:text-white"
					: "",
				className
			)}
			{...props}
		>
			{children}
		</Button>
	);
};
export const ButtonLikeBadge: React.FC<ButtonLikeBadgeProps> = ({
	className,
	children,
	asChild,
	variant = "default",
	size = "default",
	isActive = false,
	isHover = true,
	isClick = true,
	...props
}) => {
	return (
		<Button
			variant={variant}
			size={size}
			className={cn(
				"h-[34px] rounded-full cursor-pointer w-fit py-[4px] px-[14px] text-sm flex items-center font-normal transition-all bg-white border border-gray-200 hover:bg-white text-black ",
				isHover ? "hover:text-blue-hover" : "",
				isActive ? "text-blue-hover bg-blue-not-hover" : "",
				isClick ? "cursor-pointer" : "cursor-text ",
				className
			)}
			{...props}
		>
			{children}
		</Button>
	);
};

export const LoadMoreButton: React.FC<ButtonLoadMoreProps> = ({
	className,
	isLoading,
	children,
	onClick,
	...props
}) => {
	return (
		<div
			className={cn("text-blue-hover w-fit px-[15px] font-semibold cursor-pointer", className)}
			onClick={() => onClick && onClick()}
			{...props}
		>
			{isLoading ? (
				<Loader2 strokeWidth={1.5} className="animate-spin text-gray-500 " size={40} />
			) : (
				children(isLoading || false)
			)}
		</div>
	);
};

interface HoverButtonProps {
	children: React.ReactNode;
	className?: string;
	lineClassName?: string;
	onClick?: () => void;
}

export const HoverButton: React.FC<HoverButtonProps> = ({
	children,
	className,
	lineClassName,
	onClick,
}) => {
	return (
		<div
			className={cn(
				"bg-transparent group relative text-white cursor-pointer inline-block hover:bg-transparent shadow-none group",
				className
			)}
			onClick={() => onClick && onClick()}
		>
			{children}
			<span
				className={cn(
					"mt-1 block h-0.5 origin-left scale-x-0 transform bg-white transition-transform duration-300 ease-in-out group-hover:origin-left group-hover:scale-x-100 group-[&:not(:hover)]:origin-right",
					lineClassName
				)}
			></span>
		</div>
	);
};
