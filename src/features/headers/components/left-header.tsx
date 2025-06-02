import React from 'react';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

import {
  logo,
  logo_white,
} from '@/assets/images';
import Image from '@/components/customs/Image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { NavigationListType } from '@/features/headers';
import { cn } from '@/lib/utils';

interface LeftHeaderProps {
	isMobile: boolean;
	isHome: boolean;
	pathName: string;
	navigations: NavigationListType[];
}

const LeftHeader: React.FC<LeftHeaderProps> = ({isMobile, isHome, pathName, navigations}) => {
	const menuRender = () => {
		if (!isMobile)
			return (
				<div className="flex items-center gap-x-5 xl:gap-x-11">
					{navigations.slice(0, 3).map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className={`text-base text-nowrap ${isHome ? "text-white" : "text-black"} ${
								pathName === item.href && "text-primary"
							}`}
						>
							{item.name}
						</Link>
					))}
					{navigations?.length > 3 && (
						<Popover>
							<PopoverTrigger
								className={cn(`flex items-center gap-x-1 ${isHome ? "text-white" : "text-black"}`)}
							>
								More
								<ChevronDown strokeWidth={1.5} className="size-5" />
							</PopoverTrigger>
							<PopoverContent className="flex flex-col z-[51] p-0 py-2 bg-white border border-gray-200 !shadow-light rounded-[8px] overflow-hidden">
								{navigations.slice(3, navigations.length).map((item, index) => (
									<Link
										key={index}
										href={item.href}
										className={`text-base px-[15px] h-10 flex items-center hover:bg-gray-50 text-nowrap  ${pathName === item.href && "text-primary"}`}
									>
										{item.name}
									</Link>
								))}
							</PopoverContent>
						</Popover>
					)}
				</div>
			);
	};

	return (
		<div className="h-10 xl:h-[50px] w-1/2 flex items-center my-auto gap-x-5 xl:gap-x-11">
			{isHome && !isMobile && <Image src={logo_white.src} alt="logo" className="h-full" />}
			{isHome && isMobile && <Image src={logo.src} alt="logo" className="h-full" />}
			{!isHome && <Image src={logo.src} alt="logo" className="h-full" />}
			{menuRender()}
		</div>
	);
};

export default LeftHeader;
