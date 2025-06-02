import React, { ReactNode } from 'react';

import { Breadcrumb } from './Breadcrumb';
import { FlexLayout } from './FlexLayout';

interface BannerTitleBreadcrumbProps {
	breadcrumbItems: {
		label: string;
		href?: string;
		isCurrent?: boolean;
		disabled?: boolean;
		onClick?: () => void;
		icon?: React.ReactNode;
	}[];
  title: ReactNode | ReactNode[]
}

export const BannerTitleBreadcrumb: React.FC<BannerTitleBreadcrumbProps> = ({breadcrumbItems, title}) => {
	return (
		<FlexLayout
			direction="col"
			align="center"
			justify="center"
			className="w-full bg-[#E5EBF5] h-[90px] 1200:h-[160px]"
		>
			<span className="font-bold text-[22px] 1200:text-[30px]">{title}</span>
			<Breadcrumb
				itemClassName="text-gray-800"
				items={breadcrumbItems}
				separator="&nbsp;/&nbsp; "
			/>
		</FlexLayout>
	);
};
