import React from "react";

import {DollarSign, MapPin, MoveUpRight} from "lucide-react";
import Link from "next/link";

import {ButtonBase, ButtonLikeBadge} from "@/components/customs/Buttons";
import CardIconDetail from "@/components/customs/CardIconDetail";
import {FlexLayout} from "@/components/customs/FlexLayout";

interface CandidateInfoProps {
	avatar: string;
	name: string;
	featured: boolean;
	jobTitle: string;
	location: string;
	salary: number;
	skills: {label: string; value: string}[];
}

export const CandidateInfo: React.FC<CandidateInfoProps> = ({
	avatar,
	featured,
	name,
	jobTitle,
	location,
	salary,
	skills,
}) => {
	return (
		<FlexLayout direction="col" className="w-full">
			<FlexLayout
				direction="col"
				justify="start"
				align="start"
				className="p-[15px] 1200:p-[30px] w-full gap-[15px] border border-gray-200 rounded-[8px] 1200:rounded-[18px] bg-white"
			>
				<CardIconDetail
					icon="icon-1"
					iconClassName="min-w-[70px] h-[70px]"
					title={
						<div className="font-semibold text-[22px] flex items-center gap-2">
							{name} {featured && <span className="text-lime-600 text-xs">Featured</span>}
						</div>
					}
					description={
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
					}
				/>
				<FlexLayout direction="row" justify="start" align="start" className="gap-[10px] flex-wrap">
					{skills?.map((skill, index) => (
						<ButtonLikeBadge
							key={index}
							className="border-gray-200 hover:bg-gray-200 hover:text-black"
						>
							{skill?.label}
						</ButtonLikeBadge>
					))}
				</FlexLayout>

				<FlexLayout direction="row" justify="start" align="start" className="gap-[10px] flex-wrap w-full 990:w-fit">
					<ButtonBase variant="secondary" className="w-full 990:w-fit border border-blue-hover mt-[15px]">
						Short Link <MoveUpRight size={20} />
					</ButtonBase>
					<ButtonBase className="w-full 990:w-fit border border-blue-hover mt-[15px]">
						Invite <MoveUpRight size={20} />
					</ButtonBase>
					<ButtonBase className="w-full 990:w-fit border border-blue-hover mt-[15px]">
						Download CV <MoveUpRight size={20} />
					</ButtonBase>
				</FlexLayout>
			</FlexLayout>
			<FlexLayout
				direction="col"
				justify="start"
				align="start"
				className="mt-[15px] 1200:mt-[30px]"
			>
				<span className="font-semibold text-[18px] 1200:text-[30px]">About Candidate</span>
				<span className="text-[15px] text-gray-500 mt-[10px] font-semibold">
					Hello my name is Nicole Wells and web developer from Portland. In pharetra orci dignissim,
					blandit mi semper, ultricies diam. Suspendisse malesuada suscipit nunc non volutpat. Sed
					porta nulla id orci laoreet tempor non consequat enim. Sed vitae aliquam velit. Aliquam
					ante erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie.
					Morbi ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum
					lorem ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar. Aliquam ante
					erat, blandit at pretium et, accumsan ac est. Integer vehicula rhoncus molestie. Morbi
					ornare ipsum sed sem condimentum, et pulvinar tortor luctus. Suspendisse condimentum lorem
					ut elementum aliquam. Mauris nec erat ut libero vulputate pulvinar.
				</span>
			</FlexLayout>
		</FlexLayout>
	);
};
