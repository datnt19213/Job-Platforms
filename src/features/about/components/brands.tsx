"use client"
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useRef } from 'react';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Navigation } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import {
  b1,
  b3,
  b4,
  b5,
  b6,
  b7,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';
import { Button } from '@/components/ui/button';
import BodyContainer from '@/containers/body-container';

const brands = [
	{
		name: "Amazon",
		image: b7.src,
	},
	{
		name: "Airbnb",
		image: b6.src,
	},
	{
		name: "Spotify",
		image:b5.src,
	},
	{
		name: "Slack",
		image: b4.src,
	},
	{
		name: "Paypal",
		image: b3.src,
	},
	{
		name: "Figma",
		image: b1.src,
	},
];

export const Brands = () => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px] py-[50px]">
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className='w-full'>
				<FlexLayout direction="row" className="relative w-full">
					<Button
						size="icon"
						variant="ghost"
						ref={prevRef}
						className="absolute z-[2] left-0 top-1/2 -translate-y-1/2 group bg-blue-not-hover cursor-pointer hover:bg-blue-hover transition-all"
					>
						<ChevronLeft className=" text-blue-hover group-hover:text-white " size={24} />
					</Button>
					<Button
						size="icon"
						variant="ghost"
						ref={nextRef}
						className="absolute z-[2] right-0 top-1/2 -translate-y-1/2 group bg-blue-not-hover cursor-pointer   hover:bg-blue-hover transition-all"
					>
						<ChevronRight className="   text-blue-hover group-hover:text-white" size={24} />
					</Button>
					<Swiper
						modules={[Navigation]}
						spaceBetween={20}
						slidesPerView={1}
						loop
						breakpoints={{
							400: {slidesPerView: 2},
							768: {slidesPerView: 4},
							1024: {slidesPerView: 6},
						}}
						onInit={(swiper) => {
							// @ts-ignore
							swiper.params.navigation.prevEl = prevRef.current;
							// @ts-ignore
							swiper.params.navigation.nextEl = nextRef.current;
							swiper.navigation.init();
							swiper.navigation.update();
						}}
						className="!w-full"
					>
						{brands.map((brand) => (
							<SwiperSlide key={brand.name}>
								<div className="flex items-center justify-center h-[34px] p-[15px]">
	                <Image src={brand.image} alt={brand.name} className='transform duration-300' />
	              </div>
							</SwiperSlide>
						))}
					</Swiper>
				</FlexLayout>
			</ScrollAnimator>
		</BodyContainer>
	);
};
