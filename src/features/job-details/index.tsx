import React from 'react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { GridLayout } from '@/components/customs/GridLayout';
import BodyContainer from '@/containers/body-container';

import { MainContent } from './components/main-content';
import { RightContent } from './components/right-content';

interface JobDetailsProps {
	slug: string;
}
const JobDetails: React.FC<JobDetailsProps> = ({slug}) => {
	return (
		<BodyContainer className="w-full !max-w-[970px] 1320:!max-w-[1320px] mx-auto py-[50px]">
			<GridLayout className="!grid-cols-1 990:!grid-cols-[1fr_323px] 1200:!grid-cols-[1fr_440px] w-full gap-0">
				<ScrollAnimator isZoom={false} fade slide="up" distancing={20}>
					<MainContent slug={slug} />
				</ScrollAnimator>
				<ScrollAnimator isZoom={false} fade slide="right" distancing={20} delay={0.3}>
				<RightContent slug={slug} />
				</ScrollAnimator>
			</GridLayout>
		</BodyContainer>
	);
};

export default JobDetails;
