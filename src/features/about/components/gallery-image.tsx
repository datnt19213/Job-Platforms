import React from 'react';

import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';

const breakpoints = [
	{
		minWidth: 0,
		columns: 1,
	},
	{
		minWidth: 768,
		columns: 4,
	},
];

const sampleImage =
	"https://images.unsplash.com/photo-1663970206512-9d785d57b5dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D";
const sampleImage1 =
	"https://plus.unsplash.com/premium_photo-1744950377679-dbcea87766e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D";
const sampleImage2 =
	"https://images.unsplash.com/photo-1708533548085-4d869ab08486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D";

export const GalleryImage = () => {
	return (
		<GridLayout breakpoints={breakpoints} className="gap-[10px] w-full md:aspect-[3.17]">
			<Image
				src={sampleImage2}
				alt="image"
				className="w-full h-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
			/>
			<FlexLayout direction="col" className="w-full gap-[10px]">
				<Image
					src={sampleImage}
					alt="image"
					className="h-full 990:h-2/5 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
				<Image
					src={sampleImage1}
					alt="image"
					className="h-full 990:h-3/5 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
			</FlexLayout>
			<FlexLayout direction="col" className="w-full gap-[10px]">
				<Image
					src={sampleImage}
					alt="image"
					className="h-full 990:h-3/5 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
				<Image
					src={sampleImage}
					alt="image"
					className="h-full 990:h-2/5 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
			</FlexLayout>
			<Image
				src={sampleImage2}
				alt="image"
				className="w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
			/>
		</GridLayout>
	);
};
