"use client";
import React from 'react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { SelectionsBase } from '@/components/customs/Selections';
import BodyContainer from '@/containers/body-container';

import BigSearchBar from '../../components/customs/BigSearchBar';
import { CardCandidates } from './card-candidates';

const sorts = [
	{label: "Sort by (Default)", value: "default"},
	{label: "Newest", value: "newest"},
	{label: "Oldest", value: "oldest"},
	{label: "Random", value: "random"},
];

const renders = [
	{label: "All", value: "all"},
	{label: "18 Per Page", value: "18"},
	{label: "36 Per Page", value: "36"},
];

const CandidatesFind = () => {
	return (
		<BodyContainer className="flex flex-col gap-[70px]">
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20}>
				<BigSearchBar type="candidate" />
			</ScrollAnimator>
			<FlexLayout
				direction="col"
				className="!max-w-[1290px] px-[15px] mx-auto w-full gap-[30px] pb-[80px]"
			>
				<ScrollAnimator isZoom={false} fade slide="up" distancing={20}>
					<FlexLayout className="flex-col md:flex-row w-full" justify="between" align="start">
						<span className="font-semibold text-base text-nowrap">
							Showing 1 – 27 of 57 results
						</span>
						<FlexLayout
							className="flex-col md:flex-row w-full gap-[10px] 990:gap-5 mt-[15px] 990:mt-0"
							justify="end"
							align="start"
						>
							<SelectionsBase
								placeholder="Sort by (Default)"
								items={sorts}
								triggerClassName="font-medium w-full md:w-[175px] text-[15px]"
							/>
							<SelectionsBase
								placeholder="All"
								items={renders}
								triggerClassName="font-medium w-full md:w-[175px] text-[15px]"
							/>
						</FlexLayout>
					</FlexLayout>
				</ScrollAnimator>
				<CardCandidates />
			</FlexLayout>
		</BodyContainer>
	);
};

export default CandidatesFind;
