import React from 'react';

import { cn } from '@/lib/utils';

import { FlexLayout } from './FlexLayout';

interface JobInfoBlockProps {
	title: React.ReactNode;
	description: React.ReactNode;
	className?: string;
	titleClassName?: string;
	descriptionClassName?: string;
}
const JobInfoBlock: React.FC<JobInfoBlockProps> = ({
	title,
	description,
	className,
	titleClassName,
	descriptionClassName,
}) => {
	return (
		<FlexLayout direction="col" justify="start" className={cn("gap-[15px]", className)}>
			<span
				className={cn("font-semibold text-[18px] min-[990px]:text-[30px]", titleClassName)}
			>
				{title}
			</span>
			<span className={cn("text-base text-[15px] font-semibold", descriptionClassName)}>
				{description}
			</span>
			<p className='flex flex-col gap-[10px] text-[15px] text-gray-600'>
				<h3 className="font-semibold text-[18px]">Key Responsibilities</h3>
				<ul className="list-circle flex flex-col gap-[10px]">
					<li>
						Be involved in every step of the product design cycle from discovery to developer
						handoff and user acceptance testing.
					</li>
					<li>Work with BAs, product managers and tech teams to lead the Product Design</li>
					<li>
						Maintain quality of the design process and ensure that when designs are translated into
						code they accurately reflect the design specifications.
					</li>
					<li>Accurately estimate design tickets during planning sessions.</li>
					<li>
						Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI
						deliverables including sketch files, style guides, high fidelity prototypes, micro
						interaction specifications and pattern libraries.
					</li>
					<li>
						Ensure design choices are data led by identifying assumptions to test each sprint, and
						work with the analysts in your team to plan moderated usability test sessions.
					</li>
					<li>
						Design pixel perfect responsive UI’s and understand that adopting common interface
						patterns is better for UX than reinventing the wheel
					</li>
					<li>Present your work to the wider business at Show &amp; Tell sessions.</li>
				</ul>
				<h3 className="font-semibold text-[18px]">Skill &amp; Experience</h3>
				<ul className="list-circle flex flex-col gap-[10px]">
					<li>You have at least 3 years’ experience working as a Product Designer.</li>
					<li>You have experience using Sketch and InVision or Framer X</li>
					<li>
						You have some previous experience working in an agile environment – Think two-week
						sprints.
					</li>
					<li>You are familiar using Jira and Confluence in your workflow</li>
				</ul>
			</p>
		</FlexLayout>
	);
};

export default JobInfoBlock;
