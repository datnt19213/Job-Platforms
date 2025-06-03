"use client"
import React from 'react';

import {
  AlignRight,
  Bell,
  User2,
} from 'lucide-react';

import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { cn } from '@/lib/utils';
import { useLoginRegisterState } from '@/stores/state';
import { useNavigationState } from '@/stores/state/navigation-state';

interface LeftHeaderProps {
	isMobile: boolean;
	isHome: boolean;
	pathName: string;
}
const RightHeader: React.FC<LeftHeaderProps> = ({isMobile, isHome, pathName}) => {
	const {setShowModal} = useLoginRegisterState();
	const {setShowSheet} = useNavigationState();
	if (!isMobile)
		return (
			<FlexLayout className="w-1/2 gap-4" justify="end">
				<ButtonBase onClick={() => setShowModal(true)} className={cn("rounded-[8px] font-semibold text-[15px]", isHome ? "text-white bg-white/10 border border-white/10 hover:border-white hover:bg-transparent" : "text-blue-hover bg-blue-not-hover")} variant={"secondary"}>
					Login/Register
				</ButtonBase>
				<ButtonBase className={cn("rounded-[8px] font-semibold text-[15px] ", isHome ? "text-blue-hover bg-white hover:text-white" : "text-white bg-blue-hover")} variant={"default"}>
					Job Post
				</ButtonBase>
			</FlexLayout>
		);

	if (isMobile)
		return (
			<FlexLayout className="w-1/2 gap-5" justify="end">
				<User2
					size={24}
					strokeWidth={1.7}
					className={cn("hover:text-blue-hover transition-all cursor-pointer", isHome ? "text-black 1200:text-white" : "text-black")}
					onClick={() => setShowModal(true)}
				/>
				<Bell
					size={24}
					strokeWidth={1.7}
					className={cn("hover:text-blue-hover transition-all cursor-pointer", isHome ? "text-black 1200:text-white" : "text-black")}
				/>
				<AlignRight
					size={24}
					strokeWidth={1.7}
					className={cn("hover:text-blue-hover transition-all cursor-pointer", isHome ? "text-black 1200:text-white" : "text-black")}
					onClick={() => setShowSheet(true)}
				/>
			</FlexLayout>
		);
};

export default RightHeader;
