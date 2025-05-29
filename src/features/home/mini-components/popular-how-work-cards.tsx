"use client";
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
  h131,
  h132,
  h133,
} from '@/assets/images';
import {
  CardSquareIconDetail,
} from '@/components/customs/CardSquareIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import { Button } from '@/components/ui/button';

type CardProps = {
	id: number;
	title: React.ReactNode;
	icon: React.ReactNode;
	description: React.ReactNode;
};

const cardData: CardProps[] = [
	{
		id: 1,
		title: "Register an account to start",
		description: "Achieve virtually any design and layout from within the one template.",
		icon: (
			<Image
				src={h131.src}
				alt="h131"
				className="w-[110px] h-[110px] object-cover rounded-full aspect-square"
			/>
		),
	},
	{
		id: 2,
		title: "Explore over thousands of resumes",
		description: "Achieve virtually any design and layout from within the one template.",
		icon: (
			<Image
				src={h132.src}
				alt="h131"
				className="w-[110px] h-[110px] object-cover rounded-full aspect-square"
			/>
		),
	},
	{
		id: 3,
		title: "Find the most suitable candidate",
		description: "Achieve virtually any design and layout from within the one template.",
		icon: (
			<Image
				src={h133.src}
				alt="h131"
				className="w-[110px] h-[110px] object-cover rounded-full aspect-square"
			/>
		),
	},
];
export const PopularHowWorkCards = () => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	return (
		<FlexLayout direction="col" className="gap-5 text-blue-dark flex-wrap mt-[75px]">
			<FlexLayout direction="col" align="center" className="w-full py-[15px]">
				<span className="font-bold text-[30px]">How It Works?</span>
				<span className="text-[16px] font-medium text-black">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna
				</span>
			</FlexLayout>
			<FlexLayout direction="row" className='relative w-full'>
			  <Button size="icon" variant="ghost" ref={prevRef} className='absolute cursor-pointer z-[2] left-0 top-1/2 -translate-y-1/2'>
  				<ChevronLeft className="text-blue-dark" size={24} />
  			</Button>
  			<Button size="icon" variant="ghost" ref={nextRef} className='absolute cursor-pointer z-[2] right-0 top-1/2 -translate-y-1/2'>
  				<ChevronRight className="text-blue-dark" size={24} />
  			</Button>
  			<Swiper
  				modules={[Navigation]}
  				spaceBetween={20}
  				slidesPerView={1}
  				loop
  				breakpoints={{
  					640: {slidesPerView: 1},
  					768: {slidesPerView: 2},
  					1024: {slidesPerView: 3},
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
  				{cardData.map((card) => (
  					<SwiperSlide key={card.id}>
  						<div className='p-4'>
  						  <CardSquareIconDetail
    							className="max-w-[440px] max-h-[379px] h-full w-full p-[50px_40px] hover:shadow-light transition-all rounded-[8px] 990:rounded-[18px] bg-white "
    							title={<span className="font-semibold text-black text-center">{card.title}</span>}
    							description={<span className="font-medium text-gray-700 text-center">{card.description}</span>}
    							icon={card.icon}
    						/>
  						</div>
  					</SwiperSlide>
  				))}
  			</Swiper>
			</FlexLayout>
			<GridLayout className="gap-5 grid-cols-3 text-blue-hover flex-wrap mt-[50px] py-[15px] 1200:py-[30px]"></GridLayout>
		</FlexLayout>
	);
};
