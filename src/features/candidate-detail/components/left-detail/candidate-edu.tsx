import React from 'react';

import { FlexLayout } from '@/components/customs/FlexLayout';
import { Step } from '@/components/customs/Steps';

export const CandidateEdu = () => {
	return (
		<FlexLayout direction="col">
			<span className="font-semibold text-[18px] 1200:text-[30px] mb-[15px] ">Education</span>
			<Step
				className="h-[165px]"
				lineClassName="absolute top-[30px] left-[45%] w-[2px] h-full !border-red-100"
				circleSize={36}
				lineType="dashed"
				orientation="vertical"
        colors={{
          textTitleClass: "font-semibold text-[15px]",
        }}
				circleIndexClass="text-sm !leading-none border-none !bg-red-100 text-red-400"
				step={{
					title: (
						<div className="flex items-center gap-[10px]">
							Bachelor of Science in Computer Science{" "}
							<span className="text-red-400">2012-2016</span>
						</div>
					),
					content: <span className="text-red-400 font-medium">University of California</span>,
					completed: false,
					active: false,
					id: "B",
				}}
			>
				<span className="font-semibold text-gray-500 text-[15px] py-[15px]">
					Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et,
					accumsan ac est. Integer vehicula rhoncus molestie.
				</span>
			</Step>
			<Step
      isLast
				className="h-[165px]"
				lineClassName="absolute top-[30px] left-[45%] w-[2px] h-full !border-red-100"
				circleSize={36}
				lineType="dashed"
				orientation="vertical"
        colors={{
          textTitleClass: "font-semibold text-[15px]",
        }}
				circleIndexClass="text-sm !leading-none border-none !bg-red-100 text-red-400"
				step={{
					title: (
						<div className="flex items-center gap-[10px]">
							Bachelor of Science in Computer Science{" "}
							<span className="text-red-400">2012-2016</span>
						</div>
					),
					content: <span className="text-red-400 font-medium">University of California</span>,
					completed: false,
					active: false,
					id: "B",
				}}
			>
				<span className="font-semibold text-gray-500 text-[15px] py-[15px]">
					Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et,
					accumsan ac est. Integer vehicula rhoncus molestie.
				</span>
			</Step>
		</FlexLayout>
	);
};
