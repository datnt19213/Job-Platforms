import React from 'react';

import {
  Car,
  Code,
  Coins,
  Headphones,
  Lightbulb,
  Megaphone,
} from 'lucide-react';

import { FlexLayout } from '@/components/customs/FlexLayout';

const list = [
	{
		title: "Accounting / Finance",
		icon: <Coins size={24} strokeWidth={1.5} className='group-hover:text-white transition-all !duration-500' />,
	},
	{title: "Marketing", icon: <Megaphone size={24} strokeWidth={1.5} className='group-hover:text-white transition-all !duration-500' />},
	{title: "Design", icon: <Lightbulb size={24} strokeWidth={1.5} className='group-hover:text-white transition-all !duration-500' />},
	{title: "Development", icon: <Code size={24} strokeWidth={1.5}  className='group-hover:text-white transition-all !duration-500'/>},
	{title: "Customer Service", icon: <Headphones size={24} strokeWidth={1.5} className='group-hover:text-white transition-all !duration-500' />},
	{title: "Automotive Jobs", icon: <Car size={24} strokeWidth={1.5} className='group-hover:text-white transition-all !duration-500' />},
];

export const PopularBrowseCards = () => {
	return (
		<FlexLayout direction="row" className="gap-5 text-blue-hover flex-wrap mt-[20px] 990:mt-[50px] min-h-[80px]">
			{list.map((item, index) => (
				<FlexLayout
					key={index}
					direction="row"
					align="center"
					className="gap-x-2 rounded-full text-blue-dark h-[44px] md:h-[72px] border border-[#F5F7FB] group bg-[#F5F7FB] p-[10px] md:pr-[20px] hover:bg-white transition-all !duration-500 cursor-pointer"
				>
					<div className="!size-[50px] hidden md:flex items-center justify-center rounded-full bg-white group-hover:bg-blue-dark  transition-all !duration-500">
						{item.icon}
					</div>
					<span className="font-bold text-base">{item.title}</span>
				</FlexLayout>
			))}
		</FlexLayout>
	);
};
