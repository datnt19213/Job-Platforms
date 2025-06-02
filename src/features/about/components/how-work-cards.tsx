"use client";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { useRef } from 'react';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  FreeMode,
  Navigation,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import {
  CardSquareIconDetail,
} from '@/components/customs/CardSquareIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import { Button } from '@/components/ui/button';

import { useIsMobile } from '../../../hooks/common/use-mobile';

type CardProps = {
	id: number;
	title: React.ReactNode;
	icon: React.ReactNode;
	description: React.ReactNode;
};

const cardData: CardProps[] = [
	{
		id: 1,
		title: "Free resumes assessment",
		description: "Employers on average spend 31 seconds scanning resumes to identify potential matches.",
		icon: (
			<Image
				src={"https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/f1.png"}
				alt="h131"
				className="w-[90px] h-[90px] object-cover overflow-visible rounded-full aspect-square"
			/>
		),
	},
	{
		id: 2,
		title: "Job fit scoring",
		description: "Our new fit meter shows you which jobs are most relevant to your skills and interests.",
		icon: (
			<Image
				src={"https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/f2.png"}
				alt="h131"
				className="w-[90px] h-[90px] object-cover overflow-visible rounded-full aspect-square"
			/>
		),
	},
	{
		id: 3,
		title: "Help Every Step of the Way",
		description: "Our career advice section is full of information to help you identify the right fit.",
		icon: (
			<Image
				src={"https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/f3.png"}
				alt="h131"
				className="w-[90px] h-[90px] object-cover overflow-visible rounded-full aspect-square"
			/>
		),
	},
];
export const HowWorkCards = () => {
	const prevRef = useRef<HTMLButtonElement>(null);
	const nextRef = useRef<HTMLButtonElement>(null);
	const isMobile = useIsMobile(768);
	return (
		<FlexLayout direction="col" className="gap-5  flex-wrap mt-[75px] bg-[#F5F7FC] pt-[75px]">
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
				<FlexLayout direction="col" align="center" className="w-full py-[15px]">
					<span className="font-bold text-[25px] 990:text-[30px]">
						How It Works?
					</span>
					<span className="text-[14px] text-center  font-medium text-gray-700">
						Job for anyone, anywhere
					</span>
				</FlexLayout>
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className="w-full">
				<FlexLayout direction="row" className="relative w-full">
					<Button
						size="icon"
						variant="ghost"
						ref={prevRef}
						className="absolute group bg-blue-not-hover cursor-pointer z-[2] left-0 top-1/2 -translate-y-1/2 hover:bg-blue-hover transition-all"
					>
						<ChevronLeft className="text-blue-hover group-hover:text-white" size={24} />
					</Button>
					<Button
						size="icon"
						variant="ghost"
						ref={nextRef}
						className="absolute cursor-pointer z-[2] right-0 top-1/2 -translate-y-1/2 group bg-blue-not-hover  hover:bg-blue-hover transition-all"
					>
						<ChevronRight className=" text-blue-hover group-hover:text-white" size={24} />
					</Button>
					<Swiper
						modules={[Navigation, FreeMode]}
						spaceBetween={20}
						slidesPerView={1}
						centeredSlides={isMobile ? true : false}
						freeMode
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
								<div className="p-4 w-fit mx-auto">
									<CardSquareIconDetail
										className="max-w-[440px] max-h-[379px] h-full w-full p-[50px_40px] hover:shadow-light transition-all rounded-[8px] 990:rounded-[18px] bg-[#F5F7FC] hover:bg-white "
										title={
											<span className="font-semibold text-black text-center">{card.title}</span>
										}
										description={
											<span className="font-medium text-gray-700 text-center">
												{card.description}
											</span>
										}
										icon={card.icon}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</FlexLayout>
			</ScrollAnimator>
			<GridLayout className="gap-5 grid-cols-3 text-blue-hover flex-wrap mt-[50px] py-[15px] 1200:py-[30px]"></GridLayout>
		</FlexLayout>
	);
};
