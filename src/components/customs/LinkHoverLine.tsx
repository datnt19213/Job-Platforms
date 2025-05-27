import React, { HTMLAttributes } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode;
	href: string;
	className?: string;
}

export const LinkHoverLine: React.FC<LinkProps> = ({children, className, href, ...props}) => {
	return (
		<Link
			href={href}
			className={cn("group flex w-fit cursor-pointer items-center gap-1.5", className)}
			{...props}
		>
			<span className="!h-[2px] w-0 bg-blue-hover transition-all duration-500 group-hover:w-[15px]"></span>
			{children}
		</Link>
	);
};
