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

export const GalleryImage = () => {
	return (
		<GridLayout breakpoints={breakpoints} className="gap-[10px] w-full md:aspect-[3.17]">
			<Image
				src={sampleImage}
				alt="image"
				className="w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
			/>
			<FlexLayout direction="col" className="w-full gap-[10px]">
				<Image
					src={sampleImage}
					alt="image"
					className="h-1/3 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
				<Image
					src={sampleImage}
					alt="image"
					className="h-2/3 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
			</FlexLayout>
			<FlexLayout direction="col" className="w-full gap-[10px]">
				<Image
					src={sampleImage}
					alt="image"
					className="h-2/3 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
				<Image
					src={sampleImage}
					alt="image"
					className="h-1/3 w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
				/>
			</FlexLayout>
			<Image
				src={sampleImage}
				alt="image"
				className="w-full rounded-[8px] max-w-[315px] md:max-w-full mx-auto object-contain"
			/>
		</GridLayout>
	);
};
