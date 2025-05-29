import React from "react";

import {ScrollAnimator} from "@/components/customs/AnimatedComponent";
import {GridLayout} from "@/components/customs/GridLayout";
import BodyContainer from "@/containers/body-container";

import {LeftDetail} from "./components/left-detail";
import {RightDetail} from "./components/right-detail";

interface CandidateDetailsProps {
	id: string;
}

export const CandidateDetails: React.FC<CandidateDetailsProps> = ({id}) => {
	return (
		<BodyContainer className="w-full !max-w-[970px] 1320:!max-w-[1320px] mx-auto pt-[60px] pb-[90px]">
				<GridLayout className="!grid-cols-1 990:!grid-cols-[1fr_323px] 1200:!grid-cols-[1fr_440px] w-full gap-0">
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20}>
					<LeftDetail />
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="right" distancing={20}>
					<RightDetail />
			</ScrollAnimator>
				</GridLayout>
		</BodyContainer>
	);
};
