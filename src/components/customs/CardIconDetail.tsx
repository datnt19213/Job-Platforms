import React from 'react';

import { cn } from '@/lib/utils';

import { FlexLayout } from './FlexLayout';

interface Props {
	icon: React.ReactNode;
	title: React.ReactNode;
	description: React.ReactNode;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const CardIconDetail: React.FC<Props> = ({icon, title, description, iconClassName, titleClassName, descriptionClassName}) => {
	return (
		<FlexLayout direction="row" justify="start" align="start" className='gap-[25px]'>
			<FlexLayout direction="col" justify="center" align="center" className={cn('rounded-full min-w-[50px] h-[50px] bg-blue-not-hover overflow-hidden', iconClassName)}>{icon}</FlexLayout>
			<FlexLayout direction="col" justify="start" align="start">
				<span className={cn("font-medium text-base", titleClassName)}>{title}</span>
				<span className={cn("font-normal text-sm text-[15px]", descriptionClassName)}>{description}</span>
			</FlexLayout>
		</FlexLayout>
	);
};

export default CardIconDetail;
