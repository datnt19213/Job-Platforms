import React from 'react';

import {
  email,
  image_address,
  smartphone,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';
import { MapFrame } from '@/components/customs/Map';

import { Form } from './components/form';
import InfoContactCard from './components/info-contact-card';
import { Popular } from './components/popular';

export const Contacts = () => {
	return (
		<FlexLayout direction="col" className="w-full gap-[15px]">
			<MapFrame style={{width: "100%", height: "600px"}} />
			<FlexLayout
				className="w-full max-w-[1320px] mx-auto py-[16px] bg-white gap-5 -mt-[180px] overflow-hidden rounded-[8px] p-[15px] z-[2]"
				direction="row"
			>
				<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
					<FlexLayout className="w-full flex flex-col 990:flex-row 990:justify-center items-center gap-6 pt-[20] 990:pt-[60px] bg-white rounded-[8px] relative  min-h-[271px] ">
						<InfoContactCard
							className="flex justify-start 990:items-start items-center max-w-[326px] w-full gap-2"
							icon={
								<Image
									src={image_address.src}
									className="min-w-[51px] w-[51px] min-h-[51px] h-[51px] !rounded-[8px] object-cover"
								/>
							}
							title="Address"
							content="Jl. Kebayoran Lama No. 10, Jakarta, Indonesia"
							contentClassName="text-wrap 990:text-left w-[70%] font-medium text-center"
						/>
						<InfoContactCard
							className="flex justify-start 990:items-start items-center max-w-[230px] w-full gap-2"
							icon={
								<Image
									src={smartphone.src}
									className="min-w-[51px] w-[51px] min-h-[51px] h-[51px] !rounded-[8px] object-cover"
								/>
							}
							title="Call Us"
							content={
								<span className="text-blue-hover font-bold text-[18px]">+62 21 1234 5678</span>
							}
						/>
						<InfoContactCard
							className="flex justify-start 990:items-start items-center max-w-[290px] w-full gap-2"
							icon={
								<Image
									src={email.src}
									fit="w"
									className=" min-w-[51px] w-[51px] min-h-[51px] h-[51px] !rounded-[8px] object-cover"
								/>
							}
							title="Email"
							content="abcd@gmail.com"
							contentClassName="text-wrap 990:text-left w-[70%] font-medium text-center"
						/>
					</FlexLayout>
				</ScrollAnimator>
			</FlexLayout>
			<ScrollAnimator isZoom={false} fade slide="left" distancing={20} className="w-full">
				<Form />
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="right" distancing={20} className="w-full">
				<Popular />
			</ScrollAnimator>
		</FlexLayout>
	);
};
