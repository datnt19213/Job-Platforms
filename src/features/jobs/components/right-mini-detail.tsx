"use client";
import React from 'react';

import {
  Bookmark,
  Calendar,
  CircleGauge,
  Coins,
  Crown,
  DollarSign,
  Hourglass,
  MapPin,
  MoveUpRight,
  PenTool,
  User2,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import {
  ButtonBase,
  ButtonLikeBadge,
} from '@/components/customs/Buttons';
import CardIconDetail from '@/components/customs/CardIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import JobInfoBlock from '@/components/customs/JobInfoBlock';

const RightMiniDetail = () => {
	return (
		<FlexLayout direction="row" align='start' className="px-[15px] hidden 990:flex">
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} delay={0.3} className='sticky top-1'>
					<FlexLayout
						direction="col"
						justify="start"
						className="p-[15px] border border-gray-200 bg-white rounded-[8px] xl:rounded-[18px] 990:p-[30px] w-full"
					>
						<FlexLayout
							direction="col"
							justify="start"
							className="bg-[#F5F7FC] rounded-[18px] p-[15px] 990:p-[30]"
						>
							<FlexLayout direction="row" justify="between" align="start" className="">
								<CardIconDetail
									icon="icon-1"
									title={
										<Link href="/job/top-5" className="hover:text-blue-hover transition-all">
											Top 5 asdasdas
										</Link>
									}
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
							<FlexLayout direction="row" justify="between" align="center" className="gap-5">
								<FlexLayout direction="row" justify="start" className="gap-1.5">
									<ButtonLikeBadge>Full Time</ButtonLikeBadge>
									<ButtonLikeBadge>New York</ButtonLikeBadge>
								</FlexLayout>
								<ButtonBase variant="default" className="w-[153px] text-[15px] font-semibold">
									Apply Now <MoveUpRight size={20} strokeWidth={1.5} />
								</ButtonBase>
							</FlexLayout>
						</FlexLayout>
						<FlexLayout
							direction="col"
							justify="start"
							className="gap-[15px] mt-[30px] max-h-[1292px] overflow-y-scroll hover:scrollbar-thin scrollbar-none"
						>
							<FlexLayout direction="col" justify="start" className="gap-[20px]">
								<span className="font-semibold text-[18px] min-[990px]:text-[30px]">
									Job Overview
								</span>
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
					</FlexLayout>
				</ScrollAnimator>
		</FlexLayout>
	);
};

export default RightMiniDetail;
