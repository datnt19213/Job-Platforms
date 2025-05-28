"use client";
import React from 'react';

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

import {
  ButtonBase,
  ButtonLikeBadge,
} from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { MapFrame } from '@/components/customs/Map';
import useCurrentLocation from '@/utils/location';

export const RightDetail = () => {
	return (
		<FlexLayout direction="col" justify="start" align="start" className="pl-5 gap-[30px]">
			<FlexLayout
				direction="col"
				justify="start"
				align="start"
				className="p-[15px] gap-[15px] 1200:p-[30] rounded-[8px] 1200:rounded-[18px] w-full bg-[#F5F7FC]"
			>
				<h2 className="text-[18px] font-semibold text-black ">Information</h2>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Offered Salary</span>
					<span className="text-[15px] font-medium text-[#77838F]">$180 / week</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Experience Time</span>
					<span className="text-[15px] font-medium text-[#77838F]">5 years</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Gender</span>
					<span className="text-[15px] font-medium text-[#77838F]">Female</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Age</span>
					<span className="text-[15px] font-medium text-[#77838F]">35-40</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Qualification</span>
					<span className="text-[15px] font-medium text-[#77838F]">Bachelor Degree</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Languages</span>
					<span className="text-[15px] font-medium text-[#77838F]">English</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Email</span>
					<span className="text-[15px] font-medium text-[#77838F]">robert@apus.com</span>
				</FlexLayout>
				<FlexLayout direction="row" justify="between" align="start" className="w-full">
					<span className="text-base font-semibold text-black">Phone Number</span>
					<Link
						href="tel:012345678"
						className="text-[15px] font-medium hover:text-blue-hover transition-all"
					>
						(+84) 012 345 678
					</Link>
				</FlexLayout>
				<ButtonBase className="border border-blue-hover text-blue-hover bg-transparent hover:bg-blue-hover hover:text-white rounded-[8px] 1200:rounded-[18px] w-full">
					Private Message
				</ButtonBase>
				<FlexLayout direction="row" justify="center" align="start" className="w-full gap-[15px]">
					<Link href="/facebook" className="text-black hover:text-blue-hover transition-all">
						<Facebook size={20} className="transition-all" />
					</Link>
					<Link href="/facebook" className="text-black hover:text-blue-hover transition-all">
						<Twitter size={20} className="transition-all" />
					</Link>
					<Link href="/facebook" className="text-black hover:text-blue-hover transition-all">
						<Linkedin size={20} className="transition-all" />
					</Link>
					<Link href="/facebook" className="text-black hover:text-blue-hover transition-all">
						<Instagram size={20} className="transition-all" />
					</Link>
				</FlexLayout>
			</FlexLayout>

			<Location />
			<ProfessionalSkills
				skills={[
					{label: "Communication", value: "80%"},
					{label: "Teamwork", value: "90%"},
					{label: "Problem Solving", value: "70%"},
					{label: "Time Management", value: "85%"},
					{label: "Leadership", value: "95%"},
				]}
			/>
		</FlexLayout>
	);
};

const Location = () => {
	const {latitude, longitude, error} = useCurrentLocation();
	const init = {
		longitude,
		latitude,
		zoom: 14,
		center: {
			lng: longitude,
			lat: latitude,
		},
	};
	return (
		<FlexLayout direction="col" className="rounded-[8px] w-full">
			<h2 className="text-[18px] font-semibold text-black mb-[18px]">Location</h2>

			<MapFrame
				{...init}
				style={{
					width: "100%",
					aspectRatio: "16/9",
					borderRadius: "8px",
				}}
			/>
		</FlexLayout>
	);
};

interface ProfessionalSkillsProps {
	skills: {label: string; value: string}[];
}
const ProfessionalSkills: React.FC<ProfessionalSkillsProps> = ({skills}) => {
	return (
		<FlexLayout direction="col" className="rounded-[8px] w-full">
			<h2 className="text-[18px] font-semibold text-black mb-[18px]">Professional Skills</h2>
			<FlexLayout direction="row" justify="start" align="start" className="gap-[10px] flex-wrap">
				{skills?.map((skill, index) => (
					<Link key={index} href={`/${skill?.value}`}>
						<ButtonLikeBadge className="border-gray-200 hover:bg-gray-200 hover:text-black">
							{skill?.label}
						</ButtonLikeBadge>
					</Link>
				))}
			</FlexLayout>
		</FlexLayout>
	);
};
