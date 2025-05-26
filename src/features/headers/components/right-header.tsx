import React from 'react';

import {
  AlignRight,
  Bell,
  User2,
} from 'lucide-react';

import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';

interface LeftHeaderProps {
	isMobile: boolean;
	pathName: string;
}
const RightHeader: React.FC<LeftHeaderProps> = ({isMobile, pathName}) => {
	if (!isMobile)
		return (
			<FlexLayout className="w-1/2 gap-4" justify="end">
				<ButtonBase className="rounded-[8px] font-semibold text-[15px]" variant={"secondary"}>
					Login/Register
				</ButtonBase>
				<ButtonBase className="rounded-[8px] font-semibold text-[15px] text-white bg-blue-hover" variant={"default"}>
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
					className="hover:text-blue-hover transition-all cursor-pointer"
				/>
				<Bell
					size={24}
					strokeWidth={1.7}
					className="hover:text-blue-hover transition-all cursor-pointer"
				/>
				<AlignRight
					size={24}
					strokeWidth={1.7}
					className="hover:text-blue-hover transition-all cursor-pointer"
				/>
			</FlexLayout>
		);
};

export default RightHeader;
