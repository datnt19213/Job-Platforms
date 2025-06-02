"use client";
import React from 'react';

import {
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';

import { GridLayout } from '@/components/customs/GridLayout';
import { PaginationNav } from '@/components/customs/PaginationNav';
import { Button } from '@/components/ui/button';
import { usePagination } from '@/hooks/common/usePagination';
import { cn } from '@/lib/utils';

import { ItemsBlogCard } from './items-blog-card';

const blogData = [
	{
		image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
		date: "April 20, 2023",
		category: "Education",
		comments: "1 Comment",
		title: "Attract Sales And Profits",
		description: "A job ravenously while Far much that one rank beheld after outside without.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
		date: "April 21, 2023",
		category: "Business",
		comments: "3 Comments",
		title: "5 Tips For Business Growth",
		description:
			"Understanding market dynamics and leveraging opportunities for sustainable growth.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
		date: "April 22, 2023",
		category: "Marketing",
		comments: "2 Comments",
		title: "Digital Marketing Strategies",
		description: "Effective digital marketing approaches for modern businesses.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
		date: "April 23, 2023",
		category: "Technology",
		comments: "5 Comments",
		title: "Future of AI in Business",
		description: "Exploring the impact of artificial intelligence on modern business operations.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
		date: "April 24, 2023",
		category: "Career",
		comments: "4 Comments",
		title: "Career Development Guide",
		description: "Essential steps for professional growth and career advancement.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1565884280295-98eb83e41c65",
		date: "April 25, 2023",
		category: "Leadership",
		comments: "2 Comments",
		title: "Effective Team Management",
		description: "Key principles for leading and managing high-performing teams.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1542744094-3a31f272c490",
		date: "April 26, 2023",
		category: "Finance",
		comments: "6 Comments",
		title: "Investment Strategies",
		description: "Smart investment approaches for long-term financial growth.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
		date: "April 27, 2023",
		category: "Workplace",
		comments: "3 Comments",
		title: "Remote Work Best Practices",
		description: "Maximizing productivity and collaboration in remote work environments.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a",
		date: "April 28, 2023",
		category: "Innovation",
		comments: "4 Comments",
		title: "Driving Innovation",
		description: "Creating a culture of innovation and creative problem-solving.",
		link: "/",
	},
	{
		image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
		date: "April 29, 2023",
		category: "Management",
		comments: "5 Comments",
		title: "Project Management Skills",
		description: "Essential skills for successful project management and delivery.",
		link: "/",
	},
];

export const ItemsGrid = () => {
	const {currentPage, totalPages, goToPage} = usePagination({
		totalItems: blogData.length,
		pageSize: 6,
	});
	return (
			<GridLayout className="w-full !col-span-1 md:!col-span-2 !grid-cols-1 md:!grid-cols-2 gap-y-[30px]">
				{blogData.slice((currentPage - 1) * 6, currentPage * 6).map((item, index) => (
					<ItemsBlogCard data={item} key={index} />
				))}
				<PaginationNav
					className="col-span-1 md:col-span-2 flex justify-center py-[20px] gap-2"
					totalPages={totalPages}
					currentPage={currentPage}
					nextButton={({currentPage, disabled, onClick}) =>
						!disabled && (
							<Button
								disabled={disabled}
								className="bg-white text-gray-500 hover:bg-blue-hover hover:text-white transition-all rounded-full h-11 min-w-11 w-11 cursor-pointer shadow-none"
								onClick={() => onClick?.()}
							>
								<ArrowRight size={24} />
							</Button>
						)
					}
					prevButton={({currentPage, disabled, onClick}) =>
						!disabled && (
							<Button
								disabled={disabled}
								className="bg-white text-gray-500 hover:bg-blue-hover hover:text-white transition-all rounded-full h-11 min-w-11 w-11 cursor-pointer shadow-none"
								onClick={() => onClick?.()}
							>
								<ArrowLeft size={24} />
							</Button>
						)
					}
					numberButton={({page, currentPage, active, onClick}) => (
						<Button
							className={cn(
								"bg-white text-gray-500 hover:bg-blue-hover  hover:text-white transition-all rounded-full h-11 min-w-11 w-11 cursor-pointer shadow-none",
								active && "bg-blue-hover text-white"
							)}
							onClick={() => onClick?.()}
						>
							{page}
						</Button>
					)}
					onPageChange={(page) => {
						goToPage(page);
					}}
				/>
			</GridLayout>
	);
};
