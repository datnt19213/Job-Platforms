import React from 'react';

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import { HoverButton } from '@/components/customs/Buttons';
import { DotItemList } from '@/components/customs/DotItemList';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';

interface ItemsBlogCardProps {
	data: any;
}

export const ItemsBlogCard: React.FC<ItemsBlogCardProps> = ({data}) => {
	return (
		<FlexLayout direction="col" className="px-[15px] w-full 990:max-w-[440px] ">
			<FlexLayout
				direction="col"
				className="border border-gray-200 rounded-[8px] p-[10px] 1200:p-[15px] w-full gap-[18px] hover:shadow-light transition-all duration-500 group cursor-pointer"
			>
				<Image
					src={data.image}
					alt="image"
					className="w-full h-[200px] object-cover rounded-[8px] aspect-[0.6] "
					imageClass='group-hover:scale-110 transition-all duration-500'
				/>
				<FlexLayout direction="col" className="gap-[10px] 1200:px-[20px] pb-[12px] w-full">
					<DotItemList
						className="text-[14px] font-medium text-gray-500"
						items={[`${data.date}`, `${data.category}`, `${data.category}`]}
					/>
					<h3 className="text-[18px] font-semibold text-black">{data.title}</h3>
					<p className="text-[15px] font-medium text-gray-500 line-clamp-2">{data.description}</p>
					<HoverButton isGroup={false}>
						<Link
							href={`${data.link}`}
							className="text-[14px] w-fit font-medium text-blue-hover flex items-center gap-1"
						>
							Read More <ChevronRight size={16} />
						</Link>
					</HoverButton>
				</FlexLayout>
			</FlexLayout>
		</FlexLayout>
	);
};
