import React from 'react';

import { ChevronRight } from 'lucide-react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { HoverButton } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import BodyContainer from '@/containers/body-container';

import { PopularBrowseCards } from '../mini-components';
import { PopularHowWorkCards } from '../mini-components/popular-how-work-cards';

export const PopularJobCategories = () => {
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px]">
			<FlexLayout direction="col">
				<span className="font-bold text-[30px]">Popular Job Categories</span>
				<FlexLayout direction="row" justify="between">
					<span className="font-medium text-[15px] text-gray-500">
						2020 jobs live – 293 added today.
					</span>
					<HoverButton
						className="text-[15px] text-blue-hover "
						lineClassName="bg-blue-hover/50 h-[0.5px]"
					>
						<FlexLayout direction="row" align="center" className="leading-none">
							Browse All <ChevronRight size={20} strokeWidth={1} />
						</FlexLayout>
					</HoverButton>
				</FlexLayout>
			</FlexLayout>
      <PopularBrowseCards />
      <ScrollAnimator isZoom={false} fade slide="right" delay={0.8} distancing={20}><PopularHowWorkCards /> </ScrollAnimator>
		</BodyContainer>
	);
};
