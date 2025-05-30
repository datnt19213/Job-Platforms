import React from 'react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import BodyContainer from '@/containers/body-container';

import BigSearchBar from '../../components/customs/BigSearchBar';
import LeftResults from './components/left-results';
import RightMiniDetail from './components/right-mini-detail';

const JobsFind = () => {
	return (
		<BodyContainer className="flex flex-col gap-[70px]">
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20}>
				<BigSearchBar type="job"  />
			</ScrollAnimator>
			<FlexLayout className="!max-w-[1290px] mx-auto w-full pb-[80px]">
				<GridLayout className="grid !grid-cols-[1fr] min-[990px]:!grid-cols-[404px_auto] xl:!grid-cols-[440px_auto] gap-0 w-full transition-all">
					<ScrollAnimator isZoom={false} fade slide="left" distancing={20}>
						<LeftResults />
					</ScrollAnimator>

					<RightMiniDetail />
				</GridLayout>
			</FlexLayout>
		</BodyContainer>
	);
};

export default JobsFind;
