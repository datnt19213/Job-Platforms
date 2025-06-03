import React from 'react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import {
  BannerTitleBreadcrumb,
} from '@/components/customs/BannerTitleBreadcrumb';
import { FlexLayout } from '@/components/customs/FlexLayout';

import { Brands } from './components/brands';
import { GalleryImage } from './components/gallery-image';
import { HowWorkCards } from './components/how-work-cards';
import { JobFind } from './components/job-find';
import { NumberStatus } from './components/number-status';
import { Testomonial } from './components/Testimonial';

export const Abouts = () => {
	return (
		<FlexLayout direction="col" className="w-full ">
			<BannerTitleBreadcrumb
				title="About"
				breadcrumbItems={[
					{label: "Home", href: "/"},
					{label: "About", isCurrent: true},
				]}
			/>
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className='mt-[50px]'>
				<FlexLayout className="max-w-[1300px] mx-auto w-full ">
					<GalleryImage />
				</FlexLayout>
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
				<FlexLayout className="py-[50px] mx-auto w-full">
					<NumberStatus />
				</FlexLayout>
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className="w-full">
				<FlexLayout direction="col" align="start" className="w-full p-[15px] max-w-[880px] mx-auto">
					<h3 className="text-[25px] md:text-[30px] font-bold text-center mt-[50px]">
						About Jobio
					</h3>
					<p className="text-[15px] font-medium text-gray-500 mt-[20px]">
						Far much that one rank beheld bluebird after outside ignobly allegedly more when oh
						arrogantly vehement irresistibly fussy penguin insect additionally wow absolutely crud
						meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and
						much as goodness some froze the sullen much connected bat wonderfully on instantaneously
						eel valiantly petted this along across highhandedly much. Repeatedly dreamed alas
						opossum but dramatically despite expeditiously that jeepers loosely yikes that as or eel
						underneath kept and slept compactly far purred sure abidingly up above fitting to
						strident wiped set waywardly far the and pangolin horse approving paid chuckled
						cassowary oh above a much opposite far much hypnotically more therefore wasp less that
						hey apart well like while superbly orca and far hence one.Far much that one rank beheld
						bluebird after outside ignobly allegedly more when oh arrogantly vehement irresistibly
						fussy. while superbly orca and far hence one.Far much that one rank beheld bluebird
						after outside ignobly allegedly more when oh arrogantly vehement irresistibly fussy.
					</p>
				</FlexLayout>
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className="w-full">
				<JobFind />
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
				<Testomonial />
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className="w-full">
				<HowWorkCards />
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
				<Brands />
			</ScrollAnimator>
		</FlexLayout>
	);
};
