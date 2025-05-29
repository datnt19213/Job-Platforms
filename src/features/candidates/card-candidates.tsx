"use client";
import React from 'react';

import { Crown } from 'lucide-react';
import Link from 'next/link';

import { LoadMoreButton } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import { InfoCard } from '@/components/customs/InfoCard';
import {
  isFullLoaded,
  isLoadMore,
} from '@/components/customs/Load';

const skills = [
	{label: "JavaScript", value: "javascript"},
	{label: "React", value: "react"},
	{label: "Next.js", value: "nextjs"},
	{label: "Node.js", value: "nodejs"},
];

export const CardCandidates = () => {
	const [isLoading, setIsLoading] = React.useState(false);
	const itemsPerPage = 3;
	const [data, setData] = React.useState(Array.from({length: 3}));
	const [currentPage, setCurrentPage] = React.useState(1);

	// data selection
	function handleLoadMore(): void {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setCurrentPage(currentPage + 1);
			setData([...data, ...Array.from({length: itemsPerPage})]);
		}, 2000);
	}
	return (
		<GridLayout
			breakpoints={[
				{minWidth: 0, columns: 1},
				{minWidth: 768, columns: 2},
				{minWidth: 990, columns: 3},
			]}
			className="gap-[30px]"
		>
			{data?.map(
				(_, index) =>
					index < currentPage * itemsPerPage && (
						<InfoCard
							key={index}
							title={
								<FlexLayout align="center" className="gap-2 text-[18px] font-bold">
									<Link className="text-black hover:text-blue-hover transition-all hover:no-underline" href={`/candidate/${index}`}>Candidate ${index + 1}</Link>
									<div className="p-1.5 rounded-full bg-green-600">
										<Crown size={14} className="text-white" />
									</div>
								</FlexLayout>
							}
							description={
								"Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nisi, euismod aliquam nisl nisl sit amet nunc."
							}
							subtitle={
								<Link href={`/candidate/${index}`} className="text-blue-hover font-medium">
									Developer
								</Link>
							}
							icon={<Image src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128&q=80" alt="avatar" />}
							location={"New York"}
							cost={{
								value: "2000",
								unit: "year",
							}}
							skills={skills}
							type={"candidate"}
							iconClassName="min-w-[90px] h-[90px]"
							titleClassName="text-[18px] font-semibold"
							subtitleClassName="text-[15px] text-gray-600"
							descriptionClassName="text-[18px] line-clamp-2"
						/>
					)
			)}
			<FlexLayout
				className="col-span-1 md:col-span-2 990:!col-span-3 w-full h-fit"
				justify="center"
				align="center"
			>
				{data.length < 10 ? (
					<LoadMoreButton isLoading={isLoading} onClick={handleLoadMore} className="mt-4 mx-auto">
						{() => isLoadMore()}
					</LoadMoreButton>
				) : (
					<LoadMoreButton isLoading={isLoading} className="mt-4 mx-auto cursor-text">
						{() => isFullLoaded()}
					</LoadMoreButton>
				)}
			</FlexLayout>
		</GridLayout>
	);
};
