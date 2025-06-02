import React from 'react';

import { bg_shape } from '@/assets/images';
import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';

export const JobFind = () => {
	return (
		<FlexLayout
			direction="col"
			align="center"
			justify="center"
			className="w-full h-[238px] 990:h-[490px] relative"
		>
			<Image src={bg_shape.src} alt="bg_shape" className="w-full h-full object-cover relative" />
			<FlexLayout
				direction="col"
				align="center"
				className="w-fit absolute top-1/2 -translate-y-1/2 p-[15px]"
			>
				<h2 className="text-[#fff] text-[28px] font-bold">Find Your Dream Job</h2>
				<p className="text-[#fff] text-[16px] font-semibold">Find your dream job with us</p>
				<FlexLayout className="mt-[20px] gap-[15px] flex-col md:flex-row items-center">
					<ButtonBase className="bg-white text-blue-hover hover:text-white hover:border-white hover:bg-transparent border border-transparent">
						Search Jobs
					</ButtonBase>
					<ButtonBase className="bg-amber-500 text-white hover:text-amber-500 hover:border-amber-500 hover:bg-transparent border border-transparent">
						Apply Job Now
					</ButtonBase>
				</FlexLayout>
			</FlexLayout>
		</FlexLayout>
	);
};
