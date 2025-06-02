"use client";
import React from 'react';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { useIsMobile } from '../../hooks/common/use-mobile';
import LeftHeader from './components/left-header';
import RightHeader from './components/right-header';

export interface NavigationListType {
	name: string;
	href: string;
}
export const NavigationList: NavigationListType[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Find Jobs",
		href: "/jobs",
	},
	{
		name: "Candidates",
		href: "/candidates",
	},
	{
		name: "Blog",
		href: "/blog",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Contact",
		href: "/contact",
	},
	{
		name: "FAQ",
		href: "/faq",
	},
];

const HeaderBar = () => {
	const isMobile = useIsMobile();
	const pathName = usePathname();

	return (
		<div
			className={cn(
				"h-[70px] xl:h-[110px] w-full transition-all px-[15px] py-[15px] xl:px-[45px] xl:py-[15px] z-50",
				pathName === "/" ? "bg-white 1200:bg-transparent absolute top-0 left-0 " : "relative bg-white shadow-light",
			)}
		> 
			<div
				className={cn(
					"w-full h-full flex items-center transition-all max-w-[970px] justify-center xl:max-w-full xl:justify-between mx-auto"
				)}
			>
				<LeftHeader isHome={pathName === "/"} isMobile={isMobile} pathName={pathName} navigations={NavigationList} />
				<RightHeader isHome={pathName === "/"} isMobile={isMobile} pathName={pathName} />
			</div>
		</div>
	);
};

export default HeaderBar;
