"use client";
import React, { useState } from 'react';

import {
  Menu,
  X,
} from 'lucide-react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import {
  BannerTitleBreadcrumb,
} from '@/components/customs/BannerTitleBreadcrumb';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import BodyContainer from '@/containers/body-container';

import { ItemsGrid } from './components/items-grid';
import { RightSide } from './components/right-side';

const breakpoints = [
	{
		minWidth: 0,
		columns: 1,
	},
	{
		minWidth: 768,
		columns: 2,
	},
	{
		minWidth: 990,
		columns: 3,
	},
];
export const Blogs = () => {
	const breadcrumbItems = [
		{label: "Home", href: "/"},
		{label: "Blog", isCurrent: true},
	];
	const [showSidebar, setShowSidebar] = useState(false);

	const handleShowSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<FlexLayout direction="col" align="center" justify="center" className="w-full gap-[30px]">
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className="w-full">
				<BannerTitleBreadcrumb title="Blog" breadcrumbItems={breadcrumbItems} />
			</ScrollAnimator>
			<BodyContainer className="w-full !max-w-[970px] 1320:!max-w-[1290px] mx-auto pb-[90px]">
				<FlexLayout
					direction="row"
					className="w-full px-[15px] 990:hidden"
					onClick={handleShowSidebar}
				>
					<div className="990:hidden shadow-none text-sm font-semibold !p-0 text-blue-hover bg-transparent hover:bg-transparent flex items-center gap-1 my-4 cursor-pointer">
						<Menu className="min-w-[18px] h-[18px]" />
						<span className="mt-1">Show Sidebar</span>
					</div>
				</FlexLayout>
				<ScrollAnimator isZoom={false} fade slide="up" delay={0.1} distancing={20} className="w-full">
					<GridLayout breakpoints={breakpoints} gap={0} className="w-full">
						<ItemsGrid />
						<RightSide />
					</GridLayout>
				</ScrollAnimator>
			</BodyContainer>
			<Sheet open={showSidebar} onOpenChange={setShowSidebar}>
				<SheetContent side="right" className="bg-white focus-visible:outline-none gap-0">
					<SheetHeader className="border-b border-gray-200">
						<SheetTitle className="w-full z-[2]">
							<div
								onClick={() => setShowSidebar(false)}
								className="gap-1 text-sm bg-white text-destructive cursor-pointer flex items-center justify-center"
							>
								<X size={18} strokeWidth={1} />
								Close
							</div>
						</SheetTitle>
					</SheetHeader>
					<RightSide />
				</SheetContent>
			</Sheet>
		</FlexLayout>
	);
};
