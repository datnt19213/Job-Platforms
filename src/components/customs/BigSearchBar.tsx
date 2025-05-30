"use client";
import React from "react";

import {Briefcase, MapPinIcon, Search} from "lucide-react";

import {ButtonBase} from "@/components/customs/Buttons";
import {ComboBoxBase} from "@/components/customs/ComboBoxAdvance";
import {FlexLayout} from "@/components/customs/FlexLayout";
import {GridLayout} from "@/components/customs/GridLayout";
import {SelectionsBase} from "@/components/customs/Selections";
import {Input} from "@/components/ui/input";
import {useJobSearchFilters} from "@/hooks/common/useJobSearchFilter";
import {useCandidateSearchFilters} from "@/hooks/common/useCandidateSearchFilter";
import {cn} from "@/lib/utils";

const locations = [
	{value: "new-york", label: "New York"},
	{value: "los-angeles", label: "Los Angeles"},
	{value: "chicago", label: "Chicago"},
	{value: "houston", label: "Houston"},
	{value: "miami", label: "Miami"},
	{value: "san-francisco", label: "San Francisco"},
	{value: "seattle", label: "Seattle"},
	{value: "boston", label: "Boston"},
	{value: "washington-dc", label: "Washington, D.C."},
	{value: "austin", label: "Austin"},
	{value: "philadelphia", label: "Philadelphia"},
	{value: "atlanta", label: "Atlanta"},
	{value: "dallas", label: "Dallas"},
	{value: "denver", label: "Denver"},
	{value: "phoenix", label: "Phoenix"},
	{value: "portland", label: "Portland"},
	{value: "san-diego", label: "San Diego"},
	{value: "las-vegas", label: "Las Vegas"},
	{value: "detroit", label: "Detroit"},
	{value: "minneapolis", label: "Minneapolis"},
	{value: "san-jose", label: "San Jose"},
];

const categoryOptions = [
	{value: "engineering", label: "Engineering"},
	{value: "marketing", label: "Marketing"},
	{value: "sales", label: "Sales"},
	{value: "finance", label: "Finance"},
	{value: "human-resources", label: "Human Resources"},
	{value: "customer-service", label: "Customer Service"},
	{value: "it-support", label: "IT Support"},
	{value: "design", label: "Design"},
	{value: "healthcare", label: "Healthcare"},
	{value: "education", label: "Education"},
	{value: "legal", label: "Legal"},
	{value: "administrative", label: "Administrative"},
	{value: "consulting", label: "Consulting"},
	{value: "project-management", label: "Project Management"},
	{value: "data-science", label: "Data Science"},
	{value: "research", label: "Research"},
	{value: "construction", label: "Construction"},
	{value: "hospitality", label: "Hospitality"},
	{value: "transportation", label: "Transportation"},
	{value: "retail", label: "Retail"},
	{value: "real-estate", label: "Real Estate"},
	{value: "non-profit", label: "Non-Profit"},
	{value: "government", label: "Government"},
	{value: "media", label: "Media"},
	{value: "telecommunications", label: "Telecommunications"},
	{value: "energy", label: "Energy"},
	{value: "agriculture", label: "Agriculture"},
	{value: "pharmaceuticals", label: "Pharmaceuticals"},
	{value: "automotive", label: "Automotive"},
	{value: "logistics", label: "Logistics"},
	{value: "insurance", label: "Insurance"},
	{value: "e-commerce", label: "E-Commerce"},
	{value: "gaming", label: "Gaming"},
	{value: "fashion", label: "Fashion"},
	{value: "food-beverage", label: "Food & Beverage"},
	{value: "travel-tourism", label: "Travel & Tourism"},
	{value: "security", label: "Security"},
	{value: "environmental", label: "Environmental"},
	{value: "telehealth", label: "Telehealth"},
	{value: "biotechnology", label: "Biotechnology"},
	{value: "cybersecurity", label: "Cybersecurity"},
	{value: "blockchain", label: "Blockchain"},
	{value: "art-culture", label: "Art & Culture"},
];

interface BigSearchBarProps {
	type: "job" | "candidate";
	onSearch?: (filters: any) => void;
	children?: React.ReactNode | React.ReactNode[];
	classNames?: {
		container: string;
		title: string;
		titleHighlight: string;
		description: string;
		button: string;

	};
	allows?: {
		keyword: boolean;
		location: boolean;
		category: boolean;
		jobType: boolean;
		experienceLevel: boolean;
		careerLevel: boolean;
		qualification: boolean;
		gender: boolean;
		language: boolean;
	};
}

const BigSearchBar: React.FC<BigSearchBarProps> = ({
	type = "job",
	onSearch,
	classNames={
		container: "",
		title: "",
		description: "",
		button: "",
		titleHighlight: "",
	},
	allows = {
		keyword: true,
		location: true,
		category: true,
		jobType: true,
		experienceLevel: true,
		careerLevel: true,
		qualification: true,
		gender: true,
		language: true,
	},
	children,
}) => {
	const {applyFilters, filters, resetFilters, setFilter} = useJobSearchFilters();
	const {
		applyFilters: applyCandidateFilters,
		filters: candidateFilters,
		resetFilters: resetCandidateFilters,
		setFilter: setCandidateFilter,
	} = useCandidateSearchFilters();

	const handleSearch = () => {
		if (type === "job") {
			applyFilters();
			onSearch && onSearch(filters);
		} else {
			applyCandidateFilters();
			onSearch && onSearch(candidateFilters);
		}
	};

	if (type === "job")
		return (
			<FlexLayout direction="col" justify="start" className={cn("w-full bg-[#C2E4FF] py-[50px]", classNames.container)}>
				<FlexLayout
					direction="col"
					justify="start"
					className="max-w-[1320px] p-[15px] mx-auto w-full"
				>
					<span className={cn("text-[25px] mb-[30px] min-[990px]:text-[50px] font-semibold", classNames.title)}>
						There Are&nbsp;<span className={cn("text-blue-hover", classNames.titleHighlight)}>93,178</span>&nbsp;Postings Here For
						you!
					</span>
					<span className={cn("mb-[30px]", classNames.description)}>Find Jobs, Employment & Career Opportunities</span>
					<GridLayout
						className={cn(
							"p-5 bg-white rounded-[8px] grid !grid-cols-[1fr] w-full mb-[30px] gap-0 990:gap-4",
							["keyword", "location", "category"].filter(
								(key) => allows[key as keyof typeof allows]
							).length === 1 && "990:!grid-cols-[1fr_0.5fr]",
							["keyword", "location", "category"].filter(
								(key) => allows[key as keyof typeof allows]
							).length === 2 && "990:!grid-cols-[1fr_1fr_0.5fr]",
							["keyword", "location", "category"].filter(
								(key) => allows[key as keyof typeof allows]
							).length === 3 && "990:!grid-cols-[1fr_1fr_1fr_0.5fr]"
						)}
					>
						{allows.keyword && (
							<FlexLayout
								direction="row"
								align="center"
								className="h-[60px] pt-0 990:pt-0 border-t-0 990:border-r 990:border-t-0 border-gray-300"
							>
								<Search size={20} />
								<Input
									className="font-medium text-[15px] h-[45px] placeholder:text-[15px] placeholder:font-medium border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="Job title, keywords..."
									value={filters.keyword}
									onChange={(e) => setFilter("keyword", e.target.value)}
								/>
							</FlexLayout>
						)}
						{allows.location && (
							<FlexLayout
								direction="row"
								align="center"
								className="h-[72px] 990:h-[60px] border-t 990:border-r 990:border-t-0 border-gray-300"
							>
								<MapPinIcon size={20} />
								<SelectionsBase
									items={locations}
									triggerClassName="font-medium text-[15px] w-full border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="City or postcode"
									value={filters.location}
									onValueChange={(e) => setFilter("location", e)}
								/>
							</FlexLayout>
						)}
						{allows.category && (
							<FlexLayout
								direction="row"
								align="center"
								className="h-[72px] 990:h-[60px] border-t 990:border-r 990:border-t-0 border-gray-300"
							>
								<Briefcase size={20} className="min-w-5" />
								<ComboBoxBase
									options={categoryOptions}
									triggerClassName="font-medium text-[15px] text-gray-600 w-[calc(100%-20px)] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none bg-white"
									className="border-gray-200 bg-white outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="All Categories"
									selectedValue={filters.category}
									onSelect={(e) => setFilter("category", e.value)}
								/>
							</FlexLayout>
						)}
						<ButtonBase
							className={cn("h-[60px] bg-blue-hover hover:bg-white hover:border hover:border-blue-hover hover:text-blue-hover  text-white w-full", classNames.button)}
							onClick={() => handleSearch()}
						>
							Find Jobs
						</ButtonBase>
					</GridLayout>
					{allows.jobType ||
						allows.experienceLevel ||
						allows.careerLevel ||
						allows.qualification ||
						allows.gender ||
						(allows.language && (
							<FlexLayout align="center" className="w-full gap-6 990:gap-3 flex-col 990:flex-row">
								{allows.jobType && (
									<SelectionsBase
										items={locations}
										triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										placeholder="Job type"
										value={filters.jobType}
										onValueChange={(e) => setFilter("jobType", e)}
									/>
								)}
								{allows.experienceLevel && (
									<SelectionsBase
										items={locations}
										triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										placeholder="Experience level"
										value={filters.experienceLevel}
										onValueChange={(e) => setFilter("experienceLevel", e)}
									/>
								)}
								{allows.careerLevel && (
									<SelectionsBase
										items={locations}
										triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										placeholder="Career level"
										value={filters.careerLevel}
										onValueChange={(e) => setFilter("careerLevel", e)}
									/>
								)}
								{allows.qualification && (
									<SelectionsBase
										items={locations}
										triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
										placeholder="Qualification"
										value={filters.qualification}
										onValueChange={(e) => setFilter("qualification", e)}
									/>
								)}
							</FlexLayout>
						))}
					{children}
				</FlexLayout>
			</FlexLayout>
		);
	if (type === "candidate")
		return (
			<FlexLayout direction="col" justify="start" className={cn("w-full bg-[#C2E4FF] py-[50px]", classNames.container)} >
				<FlexLayout
					direction="col"
					justify="start"
					className="max-w-[1320px] p-[15px] mx-auto w-full"
				>
					<span className={cn("text-[25px] mb-[30px] min-[990px]:text-[50px] font-semibold", classNames.title)}>
						Hire people for your business
					</span>
					<span className={cn("mb-[30px]", classNames.description)}>
						Discover your next career move, freelance gig, or internship
					</span>
					<GridLayout
						className={cn(
							"p-5 bg-white rounded-[8px] grid !grid-cols-[1fr] w-full mb-[30px] gap-0 990:gap-4",
							["keyword", "location", "category"].filter(
								(key) => allows[key as keyof typeof allows]
							).length === 1 && "990:!grid-cols-[1fr_0.5fr]",
							["keyword", "location", "category"].filter(
								(key) => allows[key as keyof typeof allows]
							).length === 2 && "990:!grid-cols-[1fr_1fr_0.5fr]",
							["keyword", "location", "category"].filter(
								(key) => allows[key as keyof typeof allows]
							).length === 3 && "990:!grid-cols-[1fr_1fr_1fr_0.5fr]"
						)}
					>
						{allows.keyword && (
							<FlexLayout
								direction="row"
								align="center"
								className="h-[60px] pt-0 990:pt-0 border-t-0 990:border-r 990:border-t-0 border-gray-300"
							>
								<Search size={20} />
								<Input
									className="font-medium text-[15px] h-[45px] placeholder:text-[15px] placeholder:font-medium border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="Candidate title, keywords..."
									value={candidateFilters.keyword}
									onChange={(e) => setCandidateFilter("keyword", e.target.value)}
								/>
							</FlexLayout>
						)}
						{allows.location && (
							<FlexLayout
								direction="row"
								align="center"
								className="h-[72px] 990:h-[60px] border-t 990:border-r 990:border-t-0 border-gray-300"
							>
								<MapPinIcon size={20} />
								<SelectionsBase
									items={locations}
									triggerClassName="font-medium text-[15px] w-full border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="City or postcode"
									value={candidateFilters.location}
									onValueChange={(e) => setCandidateFilter("location", e)}
								/>
							</FlexLayout>
						)}
						{allows.category && (
							<FlexLayout
								direction="row"
								align="center"
								className="h-[72px] 990:h-[60px] border-t 990:border-r 990:border-t-0 border-gray-300"
							>
								<Briefcase size={20} className="min-w-5" />
								<ComboBoxBase
									options={categoryOptions}
									triggerClassName="font-medium text-[15px] text-gray-600 w-[calc(100%-20px)] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none bg-white"
									className="border-gray-200 bg-white outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="All Categories"
									selectedValue={candidateFilters.category}
									onSelect={(e) => setCandidateFilter("category", e.value)}
								/>
							</FlexLayout>
						)}
						<ButtonBase
							className={cn("h-[60px] bg-blue-hover hover:bg-white hover:border hover:border-blue-hover hover:text-blue-hover  text-white w-full", classNames.button)}
							onClick={() => handleSearch()}
						>
							Find Jobs
						</ButtonBase>
					</GridLayout>
					{allows.gender || allows.qualification || allows.language || allows.experienceLevel || (
						<FlexLayout align="center" className="w-full gap-6 990:gap-3 flex-col 990:flex-row">
							{allows.gender && (
								<SelectionsBase
									items={locations}
									triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="Gender"
									value={candidateFilters.gender}
									onValueChange={(e) => setCandidateFilter("gender", e)}
								/>
							)}
							{allows.qualification && (
								<SelectionsBase
									items={locations}
									triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="Qualification"
									value={candidateFilters.qualification}
									onValueChange={(e) => setCandidateFilter("qualification", e)}
								/>
							)}
							{allows.experienceLevel && (
								<SelectionsBase
									items={locations}
									triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="Experience level"
									value={candidateFilters.experienceLevel}
									onValueChange={(e) => setCandidateFilter("experienceLevel", e)}
								/>
							)}
							{allows.language && (
								<SelectionsBase
									items={locations}
									triggerClassName="text-[15px] font-medium !text-black w-full bg-white 990:w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
									placeholder="Languages"
									value={candidateFilters.language}
									onValueChange={(e) => setCandidateFilter("language", e)}
								/>
							)}
						</FlexLayout>
					)}
					{children}
				</FlexLayout>
			</FlexLayout>
		);
};

export default BigSearchBar;
