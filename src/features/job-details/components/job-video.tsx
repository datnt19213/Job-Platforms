"use client";

import React from 'react';

import ReactPlayer from 'react-player';

import { FlexLayout } from '@/components/customs/FlexLayout';

export const JobVideo = () => {
	return (
		<FlexLayout direction="col" className="w-full">
			<span className="font-semibold text-[18px] 1200:text-[30px] mb-[15px] ">Video</span>
			<ReactPlayer
				url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
				width="100%"
				height="auto"
				style={{
					borderRadius: "8px",
					aspectRatio: "16/9",
				}}
				controls
			/>
		</FlexLayout>
	);
};
