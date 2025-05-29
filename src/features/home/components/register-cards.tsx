import React from 'react';

import {
  register1,
  register2,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import BodyContainer from '@/containers/body-container';

export const RegisterCards = () => {
	return (
		<BodyContainer className="w-full max-w-[1320px] p-[15px] mt-[75px] mx-auto">
			<GridLayout className="!grid-cols-1 md:!grid-cols-2">
				<ScrollAnimator isZoom={false} fade slide="left" distancing={20}>
					<FlexLayout
						direction="col"
						justify="center"
						className="!gap-[15px] group transition-all !relative "
					>
						<Image
							src={register1.src}
							alt="register1"
							className="!w-full !h-full !object-cover !rounded-[10px] !transition-all !duration-300 !group-hover:scale-[1.05] !absolute !z-[1]"
						/>
						<div className="relative z-[2] w-full md:w-1/2 flex flex-col gap-[15px] justify-center p-[15px]">
							<span className="font-semibold text-[26px] text-white">Employers</span>
							<span className="font-medium text-[14px] text-white">
								Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et
								dolore nostrud exercitation.
							</span>
							<ButtonBase className="bg-white text-black hover:underline hover:text-black hover:bg-white">
								Register Account
							</ButtonBase>
						</div>
					</FlexLayout>
				</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20}>
					<FlexLayout
						direction="col"
						justify="center"
						className="!gap-[15px] group transition-all !relative"
					>
						<Image
							src={register2.src}
							alt="register1"
							className="!w-full !h-full !object-cover !rounded-[10px] !transition-all !duration-300 !group-hover:scale-[1.05] !absolute !z-[1]"
						/>
						<div className="relative z-[2] w-full md:w-1/2 flex flex-col gap-[15px] justify-center p-[15px]">
							<span className="font-semibold text-[26px] text-black">Candidate</span>
							<span className="font-medium text-[14px] text-gray-500">
								Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Labore et
								dolore nostrud exercitation.
							</span>
							<ButtonBase className="bg-white text-red-600 hover:underline hover:text-red-600 hover:bg-white">
								Register Account
							</ButtonBase>
						</div>
					</FlexLayout>
			</ScrollAnimator>
			</GridLayout>
		</BodyContainer>
	);
};
