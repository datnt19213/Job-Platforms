import React from 'react';

import {
  DollarSign,
  MapPin,
  MoveUpRight,
} from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
  ButtonBase,
  ButtonLikeBadge,
} from './Buttons';
import CardIconDetail from './CardIconDetail';
import { FlexLayout } from './FlexLayout';

interface Skills {
	label: string;
	value: string;
}

interface InfoCardProps {
	title: React.ReactNode;
	subtitle?: React.ReactNode;
	description: React.ReactNode;
	icon: React.ReactNode;
	location: string;
	cost: {
		value: string;
		unit: "hour" | "day" | "month" | "year";
	};
	skills: Skills[];
	iconClassName?: string;
	titleClassName?: string;
	subtitleClassName?: string;
	descriptionClassName?: string;

	type: "candidate";
}
export const InfoCard: React.FC<InfoCardProps> = ({
	title,
	subtitle,
	description,
	icon,
	location,
	cost,
	skills = [],
	iconClassName,
	titleClassName,
	subtitleClassName,
	descriptionClassName,
	type = "candidate",
}) => {
	if (type === "candidate")
		return (
			<FlexLayout direction="col" className="bg-white min-w-[293px] border rounded-[8px] 1200:rounded-[18px] border-gray-200 group p-[15px] 1200:p-[30px]  w-full gap-5 hover:shadow-light transition-all duration-500">
				<FlexLayout direction="col" className="gap-5">
				  <CardIconDetail
  					icon={icon}
  					title={title}
  					description={subtitle}
  					iconClassName={iconClassName}
  					titleClassName={titleClassName}
  					descriptionClassName={subtitleClassName}
						className="items-center"
  				/>
  				<FlexLayout direction="row" className="gap-5">
  					<FlexLayout align="center" className="text-lg font-medium gap-2">
  						<MapPin size={20} /> {location}
  					</FlexLayout>
  					<FlexLayout align="center" className="text-lg font-medium gap-2">
  						<DollarSign size={20} />{cost.value} / {cost.unit}
  					</FlexLayout>
  				</FlexLayout>
  				<span className={cn("font-medium text-base line-clamp-2", descriptionClassName)}>{description}</span>
  				<FlexLayout direction="row" className="mt-[18px] min-h-[70px] flex-wrap gap-2 !text-base">
  					{skills.map((skill, index) => index < 3 && (
  						<ButtonLikeBadge
  							key={index}

  							className="text-sm font-medium h-8 hover:text-black border-[#ECEDF2] hover:bg-[#ECEDF2] transition-all "
  						>
  							<Link href={skill.value}>{skill.label}</Link>
  						</ButtonLikeBadge>
  					))}
            {skills.length > 3 && (
              <ButtonLikeBadge
                className="text-sm font-medium h-8 bg-blue-hover text-white hover:bg-blue-hover hover:text-white transition-all duration-700"
              >
                +{skills.length - 3}
              </ButtonLikeBadge>
            )}
            
  				</FlexLayout>
				</FlexLayout>
				<ButtonBase variant="default" className="group-hover:bg-blue-hover transition-all duration-500 delay-200 w-full text-base border border-blue-hover bg-white text-blue-hover group-hover:text-white rounded-[8px] 1200:rounded-[18px]">
					View Profile <MoveUpRight size={16} />
				</ButtonBase>
			</FlexLayout>
		);
};
