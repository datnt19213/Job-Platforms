import React from "react";

import {FlexLayout} from "@/components/customs/FlexLayout";
import {ButtonLikeBadge, ButtonBase} from "@/components/customs/Buttons";
import CardIconDetail from "@/components/customs/CardIconDetail";
import {GridLayout} from "@/components/customs/GridLayout";
import JobInfoBlock from "@/components/customs/JobInfoBlock";
import {
	Crown,
	Zap,
	Bookmark,
	MoveUpRight,
	Calendar,
	MapPin,
	DollarSign,
	Hourglass,
	CircleGauge,
	User2,
	PenTool,
	Coins,
} from "lucide-react";
import SharePost from "@/components/customs/SharePost";
import { JobVideo } from "./job-video";
import { Separator } from "@/components/ui/separator";

interface MainContentProps {
	slug: string;
}
export const MainContent: React.FC<MainContentProps> = ({slug}) => {
	return (
		<FlexLayout direction="col" className="w-full px-[15px]">
			<FlexLayout
				direction="col"
				justify="start"
				className="border border-gray-200 rounded-[18px] p-[15px] min-[990px]:p-[30]"
			>
				<FlexLayout direction="row" justify="between" align="start" className="">
					<CardIconDetail
						icon="icon-1"
						title="Top 5 asdasdas"
						description="Top 5 jobs that match your profile"
						iconClassName="min-w-[70px] h-[70px] bg-blue-not-hover"
						titleClassName="font-semibold text-[22px]"
						descriptionClassName="text-[15px]"
					/>
					<FlexLayout
						direction="row"
						justify="between"
						align="start"
						className="gap-[15px] min-w-[129px]"
					>
						<div className="aspect-square !p-0 min-w-10 h-10 rounded-full border border-transparent shadow-none bg-transparent cursor-pointer hover:bg-white hover:border-gray-200 transition-all flex items-center justify-center">
							<Crown size={20} strokeWidth={1.5} />
						</div>
						<div className="aspect-square !p-0 min-w-10 h-10 rounded-full border border-transparent shadow-none bg-transparent cursor-pointer hover:bg-white hover:border-gray-200 transition-all flex items-center justify-center">
							<Zap size={20} strokeWidth={1.5} />
						</div>
						<div className="aspect-square !p-0 min-w-10 h-10 rounded-full border border-transparent shadow-none bg-transparent cursor-pointer hover:bg-white hover:border-gray-200 transition-all flex items-center justify-center">
							<Bookmark size={20} strokeWidth={1.5} />
						</div>
					</FlexLayout>
				</FlexLayout>
					<FlexLayout direction="row" justify="start" className="gap-1.5 mt-[30px]">
						<ButtonLikeBadge>Full Time</ButtonLikeBadge>
						<ButtonLikeBadge>New York</ButtonLikeBadge>
					</FlexLayout>
			</FlexLayout>
			<FlexLayout
				direction="col"
				justify="start"
				className="gap-[15px] mt-[30px]"
			>
				<FlexLayout direction="col" justify="start" className="gap-[20px]">
					<span className="font-semibold text-[18px] min-[990px]:text-[30px]">Job Overview</span>
					<GridLayout className="grid min-[990px]:!grid-cols-[1fr_1fr_1fr] min-[1280px]:!grid-cols-[1fr_1fr_1fr_1fr] border-b rounded-[8px] border-gray-200 pb-[15px] mb-[15px]">
						<CardIconDetail
							icon={<Calendar size={22} className="text-blue-hover" />}
							title="Date Posted"
							description="June 20, 2021"
						/>
						<CardIconDetail
							icon={<MapPin size={22} className="text-blue-hover" />}
							title="Location"
							description="New York"
						/>
						<CardIconDetail
							icon={<DollarSign size={22} className="text-blue-hover" />}
							title="Offered Salary"
							description="$150 - $180 / week"
						/>
						<CardIconDetail
							icon={<Hourglass size={22} className="text-blue-hover" />}
							title="Expiration Date"
							description="July 31, 2030"
						/>
						<CardIconDetail
							icon={<CircleGauge size={22} className="text-blue-hover" />}
							title="Experience"
							description="4 years"
						/>
						<CardIconDetail
							icon={<User2 size={22} className="text-blue-hover" />}
							title="Gender"
							description="Both"
						/>
						<CardIconDetail
							icon={<PenTool size={22} className="text-blue-hover" />}
							title="Qualifications"
							description="Bachelor’s Degree"
						/>
						<CardIconDetail
							icon={<Coins size={22} className="text-blue-hover" />}
							title="Career Level"
							description="Officer"
						/>
					</GridLayout>
				</FlexLayout>
				<JobInfoBlock
					title={"Job Description"}
					description={
						"As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas."
					}
				/>
			</FlexLayout>
			<Separator className="my-[15px] 990:my-[30px] bg-gray-200" />
      <SharePost />
			<Separator className="my-[15px] 990:my-[30px] bg-gray-200" />
			<JobVideo />
		</FlexLayout>
	);
};
