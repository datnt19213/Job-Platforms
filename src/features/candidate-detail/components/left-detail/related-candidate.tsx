import React from 'react';

import {
  Bookmark,
  DollarSign,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

import {
  ButtonBase,
  ButtonLikeBadge,
} from '@/components/customs/Buttons';
import CardIconDetail from '@/components/customs/CardIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { Button } from '@/components/ui/button';

interface RelatedCandidateProps {
	avatar: string;
	name: string;
	featured: boolean;
	jobTitle: string;
	location: string;
	salary: number;
	skills: {label: string; value: string}[];
}
export const RelatedCandidate: React.FC<RelatedCandidateProps> = ({
	avatar,
	featured,
	name,
	jobTitle,
	location,
	salary,
	skills,
}) => {
	return (
		<FlexLayout direction="col" className='w-full'>
			<span className="font-semibold text-[18px] 1200:text-[30px] mb-[15px] ">
				Related Candidates
			</span>
			<FlexLayout
				justify="start"
				align="center"
				className="p-[15px] 1200:p-[30px] flex-col 990:flex-row gap-[15px] border border-gray-200 rounded-[8px] 1200:rounded-[18px] bg-white w-full"
			>
				<CardIconDetail
					icon="icon-1"
					iconClassName="min-w-[70px] h-[70px]"
          className='w-full'
					title={
						<div className="font-semibold text-[22px] flex items-center gap-2">
							{name} {featured && <span className="text-lime-600 text-xs">Featured</span>}
						</div>
					}
					description={
						<FlexLayout direction="col" justify="start" align="start" className="gap-[10px]">
							<FlexLayout direction="row" justify="start" align="start" className="gap-[20px]">
								<span className="text-sm font-medium">{jobTitle}</span>
								<FlexLayout direction="row" justify="start" align="center" className="gap-[5px]">
									<MapPin size={18} />
									<span className="text-sm font-medium">{location}</span>
								</FlexLayout>
								<FlexLayout direction="row" justify="start" align="center" className="gap-[5px]">
									<DollarSign size={18} />
									<span className="text-sm font-medium">${salary} / week</span>
								</FlexLayout>
							</FlexLayout>
							<FlexLayout
								direction="row"
								justify="start"
								align="start"
								className="gap-[10px] flex-wrap hidden 990:flex"
							>
								{skills?.map((skill, index) => (
									<Link key={index} href={`/${skill?.value}`}>
										<ButtonLikeBadge className="border-gray-200 hover:bg-black hover:text-white">
											{skill?.label}
										</ButtonLikeBadge>
									</Link>
								))}
							</FlexLayout>
						</FlexLayout>
					}
				/>
        <FlexLayout className="gap-[10px] w-full 990:w-fit 990:flex-col 990:items-end 1200:flex-row 1200:items-center">
          <Button variant="ghost" size="icon" className='rounded-full cursor-pointer'><Bookmark size={20} /></Button>
          <ButtonBase variant="secondary">View Profile</ButtonBase>
        </FlexLayout>
			</FlexLayout>
		</FlexLayout>
	);
};
