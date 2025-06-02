import React from 'react';

import { group8 } from '@/assets/images';
import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';

export const Popular = () => {
	return (
		<FlexLayout className="py-[15px] relative w-full mx-auto max-w-[1290px] overflow-hidden">
			<Image fit="h" src={group8.src} className="w-full z-[1] relative object-cover min-h-[272px]" />
			<FlexLayout direction='col' className="z-[2] absolute gap-[30px]  w-full 990:w-1/2 p-[15px]  px-[60px] top-1/2 -translate-y-1/2">
				<h3 className="text-[30px] font-extrabold ">Recruiting?</h3>
				<span className='text-[15px] font-medium text-gray-500'>
					Advertise your jobs to millions of monthly users and search 15.8 million CVs in our
					database.
				</span>
				<ButtonBase className="hover:bg-white hover:text-blue-hover hover:border-blue-hover border border-transparent">
					Start Recruiting Now
				</ButtonBase>
			</FlexLayout>
		</FlexLayout>
	);
};
