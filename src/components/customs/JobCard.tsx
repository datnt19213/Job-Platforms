import React, { ReactNode } from 'react';

import {
  Bookmark,
  Crown,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import { ButtonLikeBadge } from './Buttons';
import CardIconDetail from './CardIconDetail';
import { FlexLayout } from './FlexLayout';

interface Props {
	data: {
		title: ReactNode;
		description: ReactNode;
		icon: ReactNode;
		deadlineDate: string;
		isClosedDeadline?: boolean;
		link?: string;
	};
	isMobile?: boolean;
}

const JobCard: React.FC<Props> = ({
	data = {
		title: <></>,
		description: <></>,
		icon: <></>,
		deadlineDate: "",
		isClosedDeadline: true,
		link: "",
	},
	isMobile = false,
}) => {
	return (
		<FlexLayout
		id={String(data?.title) || ""}
			direction="col"
			justify="start"
			className="p-[15px] xl:p-[30px] border border-gray-200 hover:border-blue-hover duration-500 hover:shadow-light rounded-[8px] xl:rounded-[18px] min-w-[300px] transition-all w-full min-[990px]:w-full gap-[18px]"
		>
			<CardIconDetail
				icon={<></>}
				title={
					data?.link ? (
						<Link href={data.link} className="cursor-pointer hover:text-blue-hover">
							{data.title}
						</Link>
					) : (
						data.title
					)
				}
				description={data.description}
				titleClassName="text-[18px] font-semibold"
				descriptionClassName="text-[15px]"
			/>
			<FlexLayout direction="row" justify="start" align="center" className="gap-[6px] flex-wrap">
				<ButtonLikeBadge variant="default">Full-time</ButtonLikeBadge>
				<ButtonLikeBadge variant="default">New York</ButtonLikeBadge>
				<ButtonLikeBadge variant="default" isClick={false} isHover={false}>
					$100-$500&nbsp;/&nbsp;week
				</ButtonLikeBadge>
			</FlexLayout>
			<FlexLayout direction="col" justify="start" align="start" className="gap-1.5 w-full">
				<FlexLayout direction="row" justify="between" align="center" className='w-full'>
					<span className="text-base">Deadline date:{data.deadlineDate}</span>
					<FlexLayout direction="row" justify="start" align="center" className="gap-[15px]">
						<Crown size={20} strokeWidth={1.5} className='cursor-pointer' />
						<Zap size={20} strokeWidth={1.5} className='cursor-pointer' />
						<Bookmark size={20} strokeWidth={1.5} className='cursor-pointer' />
					</FlexLayout>
				</FlexLayout>
				{data?.isClosedDeadline && <span className="text-base">Application deadline closed.</span>}
			</FlexLayout>
		</FlexLayout>
	);
};

export default JobCard;
