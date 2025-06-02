import React from 'react';

import { Search } from 'lucide-react';
import Link from 'next/link';

import CardIconDetail from '@/components/customs/CardIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const categories = [
	{title: "Education", link: "/"},
	{title: "Information", link: "/"},
	{title: "Interview", link: "/"},
	{title: "Job Seeking", link: "/"},
	{title: "Learn", link: "/"},
	{title: "Skill", link: "/"},
	{title: "Travel", link: "/"},
];

const recentPosts = [
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
		date: "Jan 20, 2023",
		link: "/",
		image:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
	},
	{
		title: "Understanding Modern Web Development Practices",
		date: "Feb 15, 2023",
		link: "/",
		image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
	},
	{
		title: "Top Programming Languages to Learn in 2023",
		date: "Mar 10, 2023",
		link: "/",
		image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3",
	},
];

const tags = [{title:'App', link: "/"},
{title:'Design', link: "/"},
{title:'Digital', link: "/"},
{title:'Jobs', link: "/"},
{title:'Learn', link: "/"},
{title:'Skill', link: "/"},
{title:'Travel', link: "/"}]
export const RightSide = () => {
	return (
		<FlexLayout direction="col" className="w-full col-span-1 max-w-[440px] px-[15px]">
			<FlexLayout
				direction="col"
				className="990:bg-[#F5F7FC] rounded-[8px] 990:px-[30px] pb-[30px] pt-[26px] w-full gap-[30px]"
			>
				<SearchInput />
				<Categories categories={categories} />
				<RecentPosts recentPosts={recentPosts} />
        <Tags tags={tags} />
			</FlexLayout>
		</FlexLayout>
	);
};

const SearchInput = () => {
	return (
		<FlexLayout direction="col" className="w-full gap-[18px]">
			<h3 className="text-[18px] font-semibold text-black">Search</h3>
			<FlexLayout direction="row" className="w-full relative">
				<Button
					size={"icon"}
					className="absolute bg-transparent group !w-9 shadow-none !h-11 z-[2] !p-0 !text-gray-500 hover:bg-transparent top-1/2 -translate-y-1/2 left-[10px]"
				>
					<Search size={20} className='group-hover:text-blue-hover transition-all' />
				</Button>
				<Input
					placeholder="keywords"
					className="relative w-full h-[50px] 990:h-[60px] border border-gray-200 bg-white z-[1] focus-visible:ring-0 focus-visible:ring-offset-0 990:border 990:border-transparent transition-all shadow-none focus:border-blue-hover rounded-[8px] pl-[58px] pr-[25px] py-[10px]"
					autoComplete="on"
				/>
			</FlexLayout>
		</FlexLayout>
	);
};

interface CategoriesProps {
	categories: {title: string; link: string}[];
}

const Categories: React.FC<CategoriesProps> = ({categories}) => {
	return (
		<FlexLayout direction="col" className="w-full gap-[18px]">
			<h3 className="text-[18px] font-semibold text-black">Categories</h3>
			<ul className="!list-disc pl-[15px]">
				{categories.map((category, index) => (
					<li key={index} className="text-gray-800 h-[36px]">
						<Link
							href={category.link}
							className="text-[15px] font-medium text-gray-500 hover:text-blue-hover transition-all"
						>
							{category.title}
						</Link>
					</li>
				))}
			</ul>
		</FlexLayout>
	);
};

interface RecentPostsProps {
	recentPosts: {title: string; date: string; link: string; image: string}[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({recentPosts}) => {
	return (
		<FlexLayout direction="col" className="w-full gap-[18px]">
			<h3 className="text-[18px] font-semibold text-black">Recent Posts</h3>
			<FlexLayout direction="col" className="gap-[15px]">
				{recentPosts.map((post, index) => (
					<CardIconDetail
          className='items-center'
          iconClassName='rounded-[8px] min-w-[70px] w-[70px] min-h-[70px] h-[50px] overflow-hidden'
						icon={
							<Image
								src={post.image}
								alt="image"
								className="min-w-[70px] w-[70px] min-h-[70px] h-[50px] !rounded-[8px] object-cover "
							/>
						}
						title={
							<Link
								href={post.link}
								className="text-[15px] font-medium hover:text-blue-hover transition-all line-clamp-1"
							>
								{post.title}
							</Link>
						}
						description={<span className="text-[14px] font-medium text-gray-500">{post.date}</span>}
						key={index}
					/>
				))}
			</FlexLayout>
		</FlexLayout>
	);
};


interface TagsProps {
  tags: {title: string; link: string}[];
}

const Tags: React.FC<TagsProps> = ({tags}) => {
	return (
    <FlexLayout direction="col" className="w-full gap-[18px]">
      <h3 className="text-[18px] font-semibold text-black">Tags</h3>
      <FlexLayout direction="row" className="gap-[6px] flex-wrap">
        {tags.map((tag, index) => (
          <Link
          key={index}
            href={tag.link}
            className="w-fit h-[30px] flex items-center justify-center text-sm px-5 rounded-md font-medium bg-white text-gray-500 hover:text-white hover:bg-black transition-all"
          >
            {tag.title}
          </Link>
        ))}
      </FlexLayout>
    </FlexLayout>
  );
}