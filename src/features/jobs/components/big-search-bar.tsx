"use client";
import React from 'react';

import {
  MapPinIcon,
  Search,
} from 'lucide-react';

import { ButtonBase } from '@/components/customs/Buttons';
import { ComboBoxBase } from '@/components/customs/ComboBoxAdvance';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import { SelectionsBase } from '@/components/customs/Selections';
import { Input } from '@/components/ui/input';
import { useJobSearchFilters } from '@/hooks/common/useJobSearchFilter';

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

const BigSearchBar = () => {
	const {applyFilters, filters, resetFilters, setFilter} = useJobSearchFilters();
	return (
		<FlexLayout direction="col" justify="start" className="w-full bg-[#C2E4FF]">
			<FlexLayout
				direction="col"
				justify="start"
				className="max-w-[1320px] p-[15px] mx-auto w-full"
			>
				<div className="flex items-center text-[25px] mb-[30px] min-[990px]:text-[50px] font-semibold">
					There Are&nbsp; <span className="text-blue-hover">93,178</span>&nbsp; Postings Here For
					you!
				</div>
				<span className="mb-[30px]">Find Jobs, Employment & Career Opportunities</span>
				<GridLayout className="p-5 bg-white rounded-[8px] grid !grid-cols-[1fr_1fr_1fr_0.5fr] w-full mb-[30px]">
					<FlexLayout direction="row" align="center" className="h-[60px] border-r border-gray-300">
						<Search size={20} />
						<Input
							className="border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
							placeholder="Job title, keywords..."
							value={filters.keyword}
							onChange={(e) => setFilter("keyword", e.target.value)}
						/>
					</FlexLayout>
					<FlexLayout direction="row" align="center" className="h-[60px] border-r border-gray-300">
						<MapPinIcon size={20} />
						<SelectionsBase
							items={locations}
							triggerClassName="w-full border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
							className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
							placeholder="City or postcode"
							value={filters.location}
							onValueChange={(e) => setFilter("location", e)}
						/>
					</FlexLayout>
					<FlexLayout direction="row" align="center" className="h-[60px] border-r border-gray-300">
						<Search size={20} />
						<ComboBoxBase
							options={categoryOptions}
							triggerClassName="w-full border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none bg-white"
							className="border-gray-200 bg-white outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
							placeholder="All Categories"
							selectedValue={filters.category}
							onSelect={(e) => setFilter("category", e.value)}
						/>
					</FlexLayout>
					<ButtonBase
						className="h-[60px] bg-blue-hover hover:bg-white hover:border hover:border-blue-hover hover:text-blue-hover  text-white w-full"
						onClick={applyFilters}
					>
						Find Jobs
					</ButtonBase>
				</GridLayout>
				<FlexLayout direction="row" align="center" className="w-full gap-3">
					<SelectionsBase
						items={locations}
						triggerClassName="w-full bg-white w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						placeholder="Job type"
						value={filters.jobType}
						onValueChange={(e) => setFilter("jobType", e)}
					/>
					<SelectionsBase
						items={locations}
						triggerClassName="w-full bg-white w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						placeholder="Experience level"
						value={filters.experienceLevel}
						onValueChange={(e) => setFilter("experienceLevel", e)}
					/>
					<SelectionsBase
						items={locations}
						triggerClassName="w-full bg-white w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						placeholder="Career level"
						value={filters.careerLevel}
						onValueChange={(e) => setFilter("careerLevel", e)}
					/>
					<SelectionsBase
						items={locations}
						triggerClassName="w-full bg-white w-[160px] !h-[45px] border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						className="border-gray-200 outline-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
						placeholder="Qualification"
						value={filters.qualification}
						onValueChange={(e) => setFilter("qualification", e)}
					/>
				</FlexLayout>
			</FlexLayout>
		</FlexLayout>
	);
};

export default BigSearchBar;
