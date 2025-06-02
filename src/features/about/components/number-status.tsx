import React from 'react';

import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';

const breakpoints = [
	{
		minWidth: 0,
		columns: 1,
	},
	{
		minWidth: 768,
		columns: 3,
	},
];

export const NumberStatus = () => {
	return (
		<GridLayout breakpoints={breakpoints} className="max-w-[880px] mx-auto w-full ">
			<FlexLayout className="flex flex-col items-center p-[15px]">
				<h3 className="text-[35px] md:text-[50px] font-bold text-center text-[#77838F]">4M</h3>
				<p className="text-[15px] font-medium text-center text-gray-950">
					4 million daily active users
				</p>
			</FlexLayout>
			<FlexLayout className="flex flex-col items-center p-[15px]">
				<h3 className="text-[35px] md:text-[50px] font-bold text-center text-[#77838F]">12K</h3>
				<p className="text-[15px] font-medium text-center text-gray-950">
					Over 12k open job positions
				</p>
			</FlexLayout>
			<FlexLayout className="flex flex-col items-center p-[15px]">
				<h3 className="text-[35px] md:text-[50px] font-bold text-center text-[#77838F]">20M</h3>
				<p className="text-[15px] font-medium text-center text-gray-950">
					Over 20 million stories shared
				</p>
			</FlexLayout>
			
		</GridLayout>
	);
};
