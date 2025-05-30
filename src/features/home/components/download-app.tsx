import React from 'react';

import {
  applestore,
  chplay,
  h135,
  h136,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import BodyContainer from '@/containers/body-container';

export const DownloadApp = () => {
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px] py-[30px]">
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
				<FlexLayout
					direction="row"
					className="w-full rounded-[8px] overflow-hidden 990:rounded-[18px] relative"
				>
					<Image
						src={h135.src}
						alt="download-app"
						fit="h"
						className="w-full h-[500px] z-[1] !relative"
					/>
					<GridLayout className="w-full h-full !grid-cols-1 md:!grid-cols-2 p-[15px] !absolute z-[2]">
						<ScrollAnimator isZoom={false} fade slide="left" distancing={20} className="my-auto">
							<FlexLayout direction="col" justify="center" className="w-full h-full gap-[30px] ">
								<span className="text-[40px] font-extrabold text-white">Download the App</span>
								<span className="text-[15px] font-medium text-white w-1/2">
									New features. New appearance. No risk and credit card required.
								</span>
								<FlexLayout direction="row" className="w-full gap-[10px] flex-wrap">
									<div className="h-[60px] w-[140px] md:w-[190px] flex gap-1 items-center md:gap-5 bg-white rounded-[8px] px-[10px] md:px-[22px] cursor-pointer">
										<Image
											src={applestore.src}
											alt="download-app"
											className="min-w-[30px] h-[30px] object-contain"
										/>
										<div className="flex flex-col">
											<span className="text-[11px] md:text-[12px] font-medium text-blue-dark">
												Download on the
											</span>
											<span className="text-[11px] md:text-[12px] font-bold text-blue-dark">
												App Store
											</span>
										</div>
									</div>
									<div className="h-[60px] w-[140px] md:w-[190px] flex gap-1 items-center md:gap-5 bg-white rounded-[8px] px-[10px] md:px-[22px] cursor-pointer">
										<Image
											src={chplay.src}
											alt="download-app"
											className="min-w-[30px] h-[30px] object-contain"
										/>
										<div className="flex flex-col">
											<span className="text-[11px] md:text-[12px] font-medium text-blue-dark">
												Download on the
											</span>
											<span className="text-[11px] md:text-[12px] font-bold text-blue-dark">
												App Store
											</span>
										</div>
									</div>
								</FlexLayout>
							</FlexLayout>
						</ScrollAnimator>
						<ScrollAnimator isZoom={false} fade slide="right" distancing={20} className="m-auto">
							<Image
								src={h136.src}
								alt="download-app"
								fit="h"
								className="h-[350px] w-auto hidden md:block m-auto object-contain"
							/>
						</ScrollAnimator>
					</GridLayout>
				</FlexLayout>
			</ScrollAnimator>
		</BodyContainer>
	);
};
