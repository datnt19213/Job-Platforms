import React from 'react';

import { ButtonBase } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const Form = () => {
	return (
		<FlexLayout className="p-[15px] 990:py-[60px]">
			<FlexLayout
				direction="col"
				className="w-full max-w-[850px] border border-gray-200 rounded-[8px] p-[40px] gap-[20px] bg-white mx-auto"
			>
				<h3 className="text-[18px] font-semibold text-black">Leave a message</h3>
				<FlexLayout direction="col" className="w-full gap-[20px]">
					<GridLayout className="!grid-cols-1 990:!grid-cols-2 gap-5">
						<FlexLayout direction="col" className="w-full gap-[5px]">
							<span className="text-[15px] font-medium text-gray-500">Your name</span>
							<Input
								placeholder="Name"
								className="focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px]"
							/>
						</FlexLayout>
						<FlexLayout direction="col" className="w-full gap-[5px]">
							<span className="text-[15px] font-medium text-gray-500">Your email</span>
							<Input
								placeholder="Email"
								className="focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px]"
							/>
						</FlexLayout>
					</GridLayout>
					<FlexLayout direction="col" className="w-full gap-[5px]">
						<span className="text-[15px] font-medium text-gray-500">Subject</span>
						<Input
							placeholder="Subject"
							className="focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px]"
						/>
					</FlexLayout>
					<FlexLayout direction="col" className="w-full gap-[5px]">
						<span className="text-[15px] font-medium text-gray-500">Your comment</span>
						<Textarea
							placeholder="Comment"
							className="min-h-[200px] focus-visible:ring-0 focus-visible:ring-offset-0 w-full bg-[#F0F5F7] shadow-none transition-all h-[60px] focus:bg-white border border-transparent focus:border-blue-hover rounded-[8px]"
						/>
					</FlexLayout>
					<ButtonBase className="w-1/2  font-semibold text-[15px] ">Send Message</ButtonBase>
				</FlexLayout>
			</FlexLayout>
		</FlexLayout>
	);
};
