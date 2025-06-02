import React from 'react';

import { cn } from '@/lib/utils';

type InfoContactCardProps = {
	icon: React.ReactNode;
	title: string;
	content: React.ReactNode;
	titleClassName?: string;
	contentClassName?: string;
	iconClassName?: string;
	className?: string;
};

const InfoContactCard: React.FC<InfoContactCardProps> = ({
	icon,
	title,
	content,
	titleClassName,
	contentClassName,
	iconClassName,
	className,
}) => {
	return (
		<div className={cn("flex flex-col items-center text-center space-y-2", className)}>
			<div className={cn("text-4xl text-blue-600", iconClassName)}>{icon}</div>
			<h3 className={cn("text-lg font-semibold", titleClassName)}>{title}</h3>
			<div className={cn("text-sm text-gray-500", contentClassName)}>{content}</div>
		</div>
	);
};

export default InfoContactCard;
