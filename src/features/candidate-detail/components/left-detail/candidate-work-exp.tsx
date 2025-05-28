import React from 'react';

import { FlexLayout } from '@/components/customs/FlexLayout';
import { Step } from '@/components/customs/Steps';

export const CandidateWorkExp = () => {
  return (
    <FlexLayout direction="col">
			<span className="font-semibold text-[18px] 1200:text-[30px] mb-[15px] ">Work & Experience</span>
			<Step
				className="h-[165px]"
				lineClassName="absolute top-[30px] left-[45%] w-[2px] h-full !border-blue-hover/30"
				circleSize={36}
				lineType="dashed"
				orientation="vertical"
        colors={{
          textTitleClass: "font-semibold text-[15px]",
        }}
				circleIndexClass="text-sm !leading-none border-none !bg-[#D1E1F6] text-blue-hover"
				step={{
					title: (
						<div className="flex items-center gap-[10px]">
							Bachelor of Science in Computer Science{" "}
							<span className="text-blue-hover">2012-2016</span>
						</div>
					),
					content: <span className="text-blue-hover font-medium">University of California</span>,
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
				lineClassName="absolute top-[30px] left-[45%] w-[2px] h-full !border-blue-hover/30"
				circleSize={36}
				lineType="dashed"
				orientation="vertical"
        colors={{
          textTitleClass: "font-semibold text-[15px]",
        }}
				circleIndexClass="text-sm !leading-none border-none !bg-[#D1E1F6] text-blue-hover"
				step={{
					title: (
						<div className="flex items-center gap-[10px]">
							Bachelor of Science in Computer Science{" "}
							<span className="text-blue-hover">2012-2016</span>
						</div>
					),
					content: <span className="text-blue-hover font-medium">University of California</span>,
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
  )
}
