"use client"
import React from 'react';

import {
  Navigation,
  Pagination,
} from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { bg_test2 } from '@/assets/images';
import {
  CardSquareIconDetail,
} from '@/components/customs/CardSquareIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';

interface CardData {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  job: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    title: "Great Experience",
    description: "The platform made job hunting incredibly easy and efficient. I found my dream position within weeks.",
    image: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    author: "John Smith",
    job: "Software Engineer"
  },
  {
    id: 2,
    title: "Excellent Service",
    description: "The user-friendly interface and powerful search features helped me connect with the right employers.",
    image: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    author: "Sarah Johnson",
    job: "UX Designer"
  },
  {
    id: 3,
    title: "Highly Recommended",
    description: "This platform stands out with its professional network and quality job listings.",
    image: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    author: "Michael Brown",
    job: "Product Manager"
  },
  {
    id: 4,
    title: "Outstanding Platform",
    description: "The best job platform I've used. The matching algorithm is incredibly accurate.",
    image: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    author: "Emily Chen",
    job: "Marketing Director"
  },
  {
    id: 5,
    title: "Life Changing",
    description: "Thanks to this platform, I successfully transitioned to a new career path with better opportunities.",
    image: "https://i.pravatar.cc/150?u=fake@pravatar.com",
    author: "David Wilson",
    job: "Data Scientist"
  }
];

export const Testomonial = () => {
  return (
    <FlexLayout className='w-full relative min-h-[561px]  990:min-h-[721px]'>
      <Image src={bg_test2.src} alt="image" className="w-full h-full object-cover !absolute z-[1]" />
      <FlexLayout direction='col' align='center' justify='center' className='w-full z-[2] relative gap-[30px] !py-[15px] md:!py-[30px] 990:!py-[80px] px-[15px] overflow-hidden max-w-[1320px] mx-auto'>
        <FlexLayout direction='col' align='center'>
          <h2 className="text-[25px] md:text-[30px] font-bold">Testimonials From Our Customers</h2>
          <span className='text-gray-500 font-medium text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </FlexLayout>
        <Swiper
  						modules={[Navigation, Pagination]}
  						spaceBetween={20}
  						slidesPerView={1}
  						centeredSlides={ true}
  						loop
              pagination={{ clickable: true }}
  						className="!w-full"
  					>
  						{cardData.map((card) => (
  							<SwiperSlide key={card.id}>
  								<div className="p-4 w-fit mx-auto">
  									<CardSquareIconDetail
  										className="max-w-[459px] max-h-[379px] h-full w-full p-[50px_40px]  transition-all rounded-[8px] 990:rounded-[18px]  "
  										title={
  											<span className="font-semibold text-[18px] text-blue-hover text-center">{card.title}</span>
  										}
  										description={
  											<FlexLayout direction="col" align='center' className="">
  											  <p className="font-semibold text-[16px] text-gray-500 text-center">
    												{card.description}
    											</p>
                          <span className="font-bold text-center text-[18px] mt-[15px]">
                            {card.author}
                          </span>
                          <span className="font-medium text-[14px] text-gray-500 text-center">
                            {card.job}
                          </span>
                        </FlexLayout >
  										}
  										icon={<div className='p-[10px] bg-white rounded-full border border-gray-100'><Image src={card.image} alt="image" className="w-[90px] min-h-[90px] object-cover  rounded-full aspect-square" /></div>}
  									/>
  								</div>
  							</SwiperSlide>
  						))}
  					</Swiper>
      </FlexLayout>
    </FlexLayout>
  )
}
