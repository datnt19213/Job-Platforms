"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { FileUp } from 'lucide-react';
import Link from 'next/link';

import {
  h135,
  slider13,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import BigSearchBar from '@/components/customs/BigSearchBar';
import { FlexLayout } from '@/components/customs/FlexLayout';
import Image from '@/components/customs/Image';
import Modal from '@/components/customs/Modal';
import {
  CandidatesList,
  JobsList,
} from '@/configs/common';

export const Hero = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [visibleCount, setVisibleCount] = useState(JobsList.length);
	const [isMobile, setIsMobile] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const [containerHeight, setContainerHeight] = useState<number>(0);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (ref.current) {
			const updateHeight = () => {
				setContainerHeight(ref.current?.offsetHeight || 0);
			};

			updateHeight();
			const resizeObserver = new ResizeObserver(updateHeight);
			resizeObserver.observe(ref.current);

			return () => {
				if (ref.current) resizeObserver.disconnect();
			};
		}
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 1200);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const observer = new ResizeObserver(() => {
			// Reset
			setVisibleCount(JobsList.length);

			// Wait for layout to update
			requestAnimationFrame(() => {
				let totalWidth = 0;
				const children = Array.from(container.querySelectorAll("#job-link-ihvem"));

				for (let i = 0; i < children.length; i++) {
					const el = children[i] as HTMLElement;
					totalWidth += el.offsetWidth;

					if (totalWidth > container.offsetWidth) {
						setVisibleCount(i);
						break;
					}
				}
			});
		});

		observer.observe(container);

		return () => observer.disconnect();
	}, [JobsList]);
	return (
		<FlexLayout direction="col" className="overflow-hidden w-full max-w-[1320px] mx-auto">
			<FlexLayout direction="col" className="w-full">
				{!isMobile && (
					<Image
						src={slider13.src}
						alt="hero"
						imageClass="min-h-[896px]"
						className="z-[1] h-[896px] object-cover w-full !absolute top-0 left-0 flex justify-start items-start"
					/>
				)}
				{isMobile && (
					<Image
						style={{height: `${containerHeight}px`}}
						src={h135.src}
						alt="hero"
						className="z-[1] object-cover w-full !absolute top-0 left-0 flex justify-start items-start"
					/>
				)}
			</FlexLayout>
				<FlexLayout ref={ref} className="relative z-[2] max-w-[768px] my-auto">
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20}>
					<BigSearchBar
						type={"job"}
						classNames={{
							container: "bg-transparent 990:py-[210px] mt-[30px] 990:mt-0",
							title: "text-white",
							description: "text-white",
							button: "bg-[#151A51]",
							titleHighlight: "text-white",
						}}
						allows={{
							keyword: true,
							location: true,
							category: false,
							jobType: true,
							experienceLevel: true,
							careerLevel: true,
							qualification: true,
							gender: true,
							language: true,
						}}
					>
						<FlexLayout
							ref={containerRef}
							direction="row"
							align="center"
							className="text-nowrap text-white font-medium"
						>
							Popular Searches :&nbsp;
							{JobsList.slice(0, visibleCount - 1).map((item, index) => (
								<Link
									id="job-link-ihvem"
									href={`/`}
									target={"_blank"}
									key={index}
									className="text-[15px] font-medium text-white cursor-pointer hover:no-underline"
								>
									{index + 1 === visibleCount - 1 || index === 0 ? "" : ","}&nbsp;{item.title}
									{index + 1 === visibleCount - 1 && ", ..."}
								</Link>
							))}
						</FlexLayout>
						<FlexLayout
							className="py-[15px] 990:py-[30px] flex-col items-center md:flex-row md:justify-between md:items-center gap-[30px] 990:gap-[50px] overflow-x-hidden"
						>
							<FlexLayout direction="row" align="center" className="text-[15px] gap-2 h-[50px] w-full md:w-fit justify-center">
								<span className="font-semibold text-white">10K+ Candidates</span>
								<FlexLayout direction="row" align="center" className='w-fit'>
									{CandidatesList.slice(0, 3).map((item, index) => {
										return (
											<Link href={`/`} key={index}>
												<Image
													containerStyle={{marginLeft: index === 0 ? 0 : `-20px`}}
													src={"https://github.com/shadcn.png"}
													alt="user"
													className="!size-[50px] rounded-full aspect-square border-2 border-white object-cover"
												/>
											</Link>
										);
									})}
									{CandidatesList.length > 3 && (
										<div className="font-medium text-gray-800 h-[50px] w-[50px] rounded-full border-2 border-white bg-white -ml-[20px] z-[1] flex justify-center items-center">
											+{CandidatesList.length - 3}
										</div>
									)}
								</FlexLayout>
							</FlexLayout>
							<div
								className="bg-transparent group relative text-white cursor-pointer inline-block hover:bg-transparent shadow-none group"
								onClick={() => setIsOpen(true)}
							>
								<FlexLayout direction="row" align="center" className="gap-2">
									<FileUp size={24} />
									<span className="text-white font-semibold text-nowrap">Upload Your CV</span>
								</FlexLayout>
								<span className="mt-1 block h-0.5 origin-left scale-x-0 transform bg-white transition-transform duration-300 ease-in-out group-hover:origin-left group-hover:scale-x-100 group-[&:not(:hover)]:origin-right"></span>
							</div>
							<Modal
								title="Upload Your CV"
								titleClassName="text-[15px] font-gray-700"
								contentClassName="py-5 990:py-10 flex justify-center scrollbar-none hover:scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
								isOpen={isOpen}
								onClose={() => setIsOpen(false)}
							>
									Must be login before
							</Modal>
						</FlexLayout>
					</BigSearchBar>
					</ScrollAnimator>
					<div className="w-[calc(100%-768px)]"></div>
				</FlexLayout>
			
		</FlexLayout>
	);
};
