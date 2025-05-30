import React from 'react';

import {
  h134,
  jobholder,
  upload,
  work,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import BodyContainer from '@/containers/body-container';

export const ProfessionalCv = () => {
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px]">
			<GridLayout className="!grid-cols-1 md:!grid-cols-2 gap-5 md:!gap-0 ">
				<FlexLayout
					direction="row"
					className="w-full justify-start md:justify-end relative p-0 md:p-[15px]"
				>
					<ScrollAnimator
						isZoom={false}
						fade
						slide="left"
						delay={0.5}
						distancing={20}
						className="w-full"
					>
						<Image
							src={h134.src}
							alt="professional-cv"
							className="max-w-full md:max-w-[570px] flex justify-end w-full object-contain relative z-[1]"
						/>
					</ScrollAnimator>
					<Image
						src={upload.src}
						alt="professional-cv"
						className="object-contain hidden 990:flex !absolute bottom-0 translate-y-3/5 left-1/2 -translate-x-1/2 z-[2]"
					/>
					<Image
						src={work.src}
						alt="professional-cv"
						className="object-contain hidden  990:flex !absolute top-1/2  left-0 -translate-x-1/6 z-[2]"
					/>
					<Image
						src={jobholder.src}
						alt="professional-cv"
						className="object-contain hidden translate-x-0 990:flex 990:translate-x-0 !absolute top-1/12 right-0 1200:translate-x-1/3 z-[2]"
					/>
				</FlexLayout>
				<ScrollAnimator
					isZoom={false}
					fade
					slide="right"
					delay={0.5}
					distancing={20}
					className="w-full my-auto 1200:pl-[180px]"
				>
					<FlexLayout className="flex-col gap-[30px] h-fit my-auto p-0 md:pl-[15px] 990:pl-[180px] ">
						<span className="font-extrabold text-blue-dark text-[25px] 990:text-[40px] ">
							Professional CV is your ticket to the dream job
						</span>
						<span className="text-[14px]  font-medium text-gray-700">
							To start searching for jobs, you can attend job fairs online or in person, use job
							boards and career websites or reach out directly to recruiters in a targeted company
							to broaden your network.
						</span>
						<ButtonBase
							variant="default"
							className="bg-blue-dark text-white hover:bg-white hover:text-blue-dark border border-blue-dark"
						>
							Post Resume
						</ButtonBase>
					</FlexLayout>
				</ScrollAnimator>
			</GridLayout>
		</BodyContainer>
	);
};
