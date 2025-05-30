"use client";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';

import {
  Bookmark,
  ChevronRight,
  MapPin,
} from 'lucide-react';
import {
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import {
  ButtonBase,
  HoverButton,
} from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';
import BodyContainer from '@/containers/body-container';

const listCard = [
	{
		id: 1,
		title: "Sagments",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				New York
			</div>
		),
		icon: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		id: 2,
		title: "Technova",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				San Francisco
			</div>
		),
		icon: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
	},
	{
		id: 3,
		title: "DataFlow",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				London
			</div>
		),
		icon: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
	},
	{
		id: 4,
		title: "CloudPeak",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				Toronto
			</div>
		),
		icon: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	},
	{
		id: 5,
		title: "InnoSys",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				Berlin
			</div>
		),
		icon: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
	},
	{
		id: 6,
		title: "GlobalTech",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				Singapore
			</div>
		),
		icon: "https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
	},
	{
		id: 7,
		title: "CloudPeak",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				Toronto
			</div>
		),
		icon: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
	},
	{
		id: 8,
		title: "InnoSys",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				Berlin
			</div>
		),
		icon: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
	},
	{
		id: 9,
		title: "GlobalTech",
		description: (
			<div className="flex items-center gap-2">
				<MapPin size={20} />
				Singapore
			</div>
		),
		icon: "https://images.unsplash.com/photo-1498409785966-ab341407de6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
	},
];

export const TopCompanies = () => {
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px]">
			<FlexLayout direction="col" className="gap-[15px]">
				<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className='w-full'>
				  <span className="font-extrabold text-[25px] md:text-[30px] text-blue-dark">
  					Top Company Registered
  				</span>
				</ScrollAnimator>
				<ScrollAnimator  isZoom={false} fade slide="down" distancing={20} className='w-full'>
				  <FlexLayout justify="between" className="flex-col md:flex-row gap-[15px]">
  					<span className="font-medium text-[15px] text-gray-500">
  						Some of the companies we’ve helped recruit excellent applicants over the years.
  					</span>
  					<HoverButton
  						className="text-[15px] text-blue-hover w-fit"
  						lineClassName="bg-blue-hover/50 h-[0.5px]"
  					>
  						<FlexLayout
  							direction="row"
  							align="center"
  							className="leading-none font-medium text-[15px]"
  						>
  							Browse All Companies <ChevronRight size={20} strokeWidth={1} />
  						</FlexLayout>
  					</HoverButton>
  				</FlexLayout>
				</ScrollAnimator>
			</FlexLayout>
			<ScrollAnimator isZoom={false} fade slide="up" delay={0.2}>
				<Swiper
					modules={[Navigation, Pagination]}
					spaceBetween={20}
					slidesPerView={1}
					loop
					pagination={{clickable: true}}
					breakpoints={{
						400: {slidesPerView: 2},
						768: {slidesPerView: 3},
						1024: {slidesPerView: 4},
					}}
					className="!w-full"
				>
					{listCard.map((card) => (
						<SwiperSlide key={card.id}>
							<div className="p-4 w-auto mb-6">
								<Card {...card} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</ScrollAnimator>
		</BodyContainer>
	);
};

interface CardProps {
	id: number;
	title: React.ReactNode;
	icon: string;
	description: React.ReactNode;
}
const Card: React.FC<CardProps> = ({title, description, icon, id}) => {
	return (
		
		  <FlexLayout
  			direction="col"
  			justify="center"
  			className="gap-[15px] p-[15px] w-full max-w-[300px] !relative group border border-gray-200 rounded-[8px] hover:bg-[#F5F7FB] transition-all"
  		>
  			<div className="absolute top-3 right-3 p-2 hidden group-hover:block cursor-pointer hover:bg-white transition-all group-hover:bg-[#F5F5F5] border border-transparent group-hover:border-gray-300 rounded-full">
  				<Bookmark size={16} strokeWidth={1.3} />
  			</div>
  			<Image
  				src={icon}
  				alt="icon"
  				className="w-[90px] !h-[90px]  mx-auto object-cover rounded-full aspect-square"
  			/>
  			<span className="font-semibold text-[18px] text-center">{title}</span>
  			<FlexLayout direction="row" justify="center" className="gap-2">
  				{description}
  			</FlexLayout>
  			<ButtonBase className="w-full mt-4 bg-gray-100 shadow-none text-blue-dark group-hover:bg-blue-dark hover:bg-blue-dark  group-hover:text-white transition-all">Open Jobs - {id} </ButtonBase>
  		</FlexLayout>
	);
};
