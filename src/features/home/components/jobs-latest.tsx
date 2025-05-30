"use client";
import React from 'react';

import {
  Bookmark,
  Briefcase,
  Clock,
  DollarSign,
} from 'lucide-react';
import Link from 'next/link';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { ButtonBase } from '@/components/customs/Buttons';
import CardIconDetail from '@/components/customs/CardIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  JobInfoItem,
  JobsList,
} from '@/configs/common';
import BodyContainer from '@/containers/body-container';
import { cn } from '@/lib/utils';

type TabListProps = {
	label: string;
	value: string;
	data: JobInfoItem[];
};

const tabList: TabListProps[] = [
	{
		label: "Full Time",
		value: "full-time",
		data: JobsList.filter((job) => job.employmentType === "Full-time"),
	},
	{
		label: "Contract",
		value: "contract",
		data: JobsList.filter((job) => job.employmentType === "Contract"),
	},
];
type TabPosition = "left" | "center" | "right";

export const JobsLatest = () => {
	const [tab, setTab] = React.useState(tabList[0].value);
	function getTabPosition(index: number, total: number): TabPosition {
		if (total === 1) return "center";
		if (total === 2) return index === 0 ? "left" : "right";
		const oneThird = Math.floor(total / 3);
		const twoThirds = Math.floor((2 * total) / 3);

		if (index < oneThird) return "left";
		if (index >= twoThirds) return "right";
		return "center";
	}
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px] mt-[75px]">
			<ScrollAnimator isZoom={false} fade slide="down" className="w-full !overflow-visible" distancing={20}>
				<FlexLayout direction="col" align="center" className="w-full">
					<span className="font-extrabold text-[24px]  text-blue-dark">Latest Jobs</span>
					<span className="text-[14px] text-center  font-medium text-gray-700">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
					</span>
					<Tabs className="w-full" value={tab} onValueChange={(value) => setTab(value)}>
						<TabsList className="mx-auto w-fit bg-transparent flex items-center gap-2 mt-[30px] mb-[30px]">
							{tabList.map((tab) => (
								<TabsTrigger
									key={tab.value}
									className="rounded-full shadow-none border-none hover:bg-blue-dark hover:text-white transition-all duration-500  data-[state=active]:bg-blue-dark data-[state=active]:text-white px-[20px] font-semibold h-10"
									value={tab.value}
								>
									{tab.label}
								</TabsTrigger>
							))}
						</TabsList>
						{tabList.map((tab, index) => {
							let tabPosition: "left" | "right" | "center" = "center";
							if (index === 0) tabPosition = "left";
							if (index === tabList.length - 1) tabPosition = "right";

							return (
								<TabContentItem
									key={index}
									tabHole={getTabPosition(index, tabList.length)}
									tab={tab}
									tabValue={tab.value}
								/>
							);
						})}
					</Tabs>
				</FlexLayout>
			</ScrollAnimator>
		</BodyContainer>
	);
};

type JobInfo = JobInfoItem & {
	isFeatured: boolean;
	isFilled: boolean;
	isClosed: boolean;
};
const ListContent: React.FC<JobInfo & {className?: string; style?: React.CSSProperties}> = ({
	id,
	title,
	company,
	location,
	employmentType,
	salary,
	experience,
	education,
	skills,
	category,
	tags,
	postedDate,
	isFeatured,
	isFilled,
	isClosed,
	className,
	style,
}) => {
	return (
		<FlexLayout
			key={id}
			align="center"
			style={style}
			className={cn(
				"p-[15px] 1200:p-[30px] flex-col 990:flex-row justify-start 990:justify-between gap-[15px] border border-gray-300 rounded-[8px] 1200:rounded-[18px] bg-[#F5F7FB] hover:bg-white w-full group transition-all",
				className
			)}
		>
			<CardIconDetail
				icon="icon-1"
				iconClassName="min-w-[50px] h-[50px] !rounded-[8px]"
				descriptionClassName="w-full"
				infoClassName="max-w-full w-full overflow-hidden"
				className="w-full overflow-hidden"
				title={
					<div className="font-semibold text-[18px] flex  items-start md:items-center md:gap-2 flex-col md:flex-row">
						{title}
						<div className="flex items-center gap-1">
							{isFeatured && <span className="text-lime-600 text-xs">Featured</span>}{" "}
							{isFilled && <span className="text-red-700 text-xs">Filled</span>}
						</div>
					</div>
				}
				description={
					<FlexLayout
						justify="start"
						align="start"
						className="gap-2 md:gap-[20px] mt-2 md:mt-0 flex-col md:flex-row w-full max-w-full overflow-hidden"
					>
						<FlexLayout
							direction="row"
							justify="start"
							align="start"
							className="gap-[5px] flex-nowrap w-fit overflow-hidden"
						>
							<Briefcase className="min-w-[15px] w-[15px] !h-[15px]" />
							<span className="text-sm font-medium truncate">{category}</span>
						</FlexLayout>
						<FlexLayout
							direction="row"
							justify="start"
							align="start"
							className="gap-[5px] flex-nowrap w-fit overflow-hidden"
						>
							<Clock className="min-w-[15px] w-[15px] !h-[15px]" />
							<span className="text-sm font-medium truncate">{postedDate}</span>
						</FlexLayout>
						<FlexLayout
							direction="row"
							justify="start"
							align="start"
							className="gap-[5px] flex-nowrap w-fit overflow-hidden"
						>
							<DollarSign className="min-w-[15px] w-[15px] !h-[15px]" />
							<span className="text-sm font-medium truncate">{salary + "/ week"}</span>
						</FlexLayout>
						<FlexLayout
							direction="row"
							justify="start"
							align="center"
							className="gap-[5px] flex-nowrap"
						>
							{tags?.map((tag, index) => (
								<BadgeItem key={index} value={tag}>
									{tag}
								</BadgeItem>
							))}
						</FlexLayout>
					</FlexLayout>
				}
			/>
			<FlexLayout className="gap-[10px] w-full items-center flex-nowrap 990:w-fit 990:flex-col 990:items-end 1200:flex-row 1200:items-center">
				<Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
					<Bookmark size={20} />
				</Button>
				{isClosed ? (
					<span className="text-gray-500 text-[15px] font-medium text-left md:text-end w-[200px]">
						Application deadline closed.
					</span>
				) : (
					<ButtonBase
						variant="secondary"
						className="text-blue-dark border border-gray-200 bg-[#131A5112] hover:bg-blue-dark "
					>
						Appy Now
					</ButtonBase>
				)}
			</FlexLayout>
		</FlexLayout>
	);
};

const TabContentItem = ({
	tab,
	tabHole,
}: {
	tab: TabListProps;
	tabHole: "left" | "right" | "center";
	tabValue: string;
}) => {
	return (
		<TabsContent
			key={tab.value}
			value={tab.value}
			className="flex flex-col gap-[15px] transition-all duration-300"
		>
			{tab.data.map((job, index) => (
				<ListContent
					key={job.id}
					style={{
						animationDelay: `${index * 0.1}s`,
					}}
					className={cn(
						"animate-in fade-in zoom-in-95 ease-in-out !duration-700",
						tabHole === "left"
							? "slide-in-from-left-10"
							: tabHole === "right"
							? "slide-in-from-right-10"
							: "slide-in-from-bottom-10"
					)}
					isFeatured={index % 2 === 0}
					isFilled={index % 3 === 0}
					isClosed={index % 4 === 0}
					{...job}
				/>
			))}
		</TabsContent>
	);
};

type BadgeMode =
	| "primary"
	| "secondary"
	| "success"
	| "warning"
	| "danger"
	| "info"
	| "light"
	| "dark";
type BadgeProps = {
	children: React.ReactNode;
	mode?: BadgeMode;
	value?: string;
	className?: string;
};

const BADGE_MODES: BadgeMode[] = [
	"primary",
	"secondary",
	"success",
	"warning",
	"danger",
	"info",
	"light",
	"dark",
];

const modeCache: Record<string, BadgeMode> = {};

const getConsistentRandomMode = (key: string): BadgeMode => {
	if (modeCache[key]) return modeCache[key];
	const availableModes = BADGE_MODES.filter((mode) => !Object.values(modeCache).includes(mode));
	const randomMode =
		availableModes.length > 0
			? availableModes[Math.floor(Math.random() * availableModes.length)]
			: BADGE_MODES[Math.floor(Math.random() * BADGE_MODES.length)];
	modeCache[key] = randomMode;
	return randomMode;
};

const BadgeItem: React.FC<BadgeProps> = ({children, value = "", mode, className}) => {
	const finalMode = mode ?? getConsistentRandomMode(value);
	return (
		<Badge
			className={cn(
				"rounded-full text-xs font-medium text-nowrap",
				finalMode === "primary" && "bg-blue-dark text-white",
				finalMode === "secondary" && "bg-gray-200 text-gray-900",
				finalMode === "success" && "bg-green-100 text-green-800",
				finalMode === "warning" && "bg-yellow-100 text-yellow-800",
				finalMode === "danger" && "bg-red-100 text-red-800",
				finalMode === "info" && "bg-blue-100 text-blue-800",
				finalMode === "light" && "bg-gray-100 text-gray-900",
				finalMode === "dark" && "bg-gray-900 text-white",
				className
			)}
		>
			<Link href="/">{children}</Link>
		</Badge>
	);
};
