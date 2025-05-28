"use client";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';

import {
  ChevronLeft,
  ChevronRight,
  Plus,
} from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';

import { FlexLayout } from '@/components/customs/FlexLayout';
import { GridLayout } from '@/components/customs/GridLayout';
import Image from '@/components/customs/Image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export const CandidatePorfolio = () => {
	const [show, setShow] = React.useState(false);
	const [status, setStatus] = React.useState<number>(0);
	return (
		<FlexLayout direction="col" justify="start" align="start" className="gap-[30px] w-full">
			<span className="font-semibold text-[18px] 1200:text-[30px]">Portfolio</span>
			<GridLayout className="!grid-cols-4">
				<FlexLayout direction="col" justify="center" align="center" className="relative group">
					<Image
						src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt="image"
						className=" rounded-[8px] object-cover relative"
					/>
					<Button
						onClick={() => setShow(true)}
						className="absolute bottom-0 right-0 bg-white text-black opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-fit w-fit aspect-square hover:bg-white cursor-pointer transition-all scale-0 group-hover:scale-100 duration-500 rounded-[50%] p-[10px]"
					>
						<Plus />
					</Button>
				</FlexLayout>
				<FlexLayout direction="col" justify="center" align="center" className="relative group">
					<Image
						src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt="image"
						className=" rounded-[8px] object-cover relative"
					/>
					<Button
						onClick={() => setShow(true)}
						className="absolute bottom-0 right-0 bg-white text-black opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-fit w-fit aspect-square hover:bg-white cursor-pointer transition-all scale-0 group-hover:scale-100 duration-500 rounded-[50%] p-[10px]"
					>
						<Plus />
					</Button>
				</FlexLayout>
				<FlexLayout direction="col" justify="center" align="center" className="relative group">
					<Image
						src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt="image"
						className=" rounded-[8px] object-cover relative"
					/>
					<Button
						onClick={() => setShow(true)}
						className="absolute bottom-0 right-0 bg-white text-black opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-fit w-fit aspect-square hover:bg-white cursor-pointer transition-all scale-0 group-hover:scale-100 duration-500 rounded-[50%] p-[10px]"
					>
						<Plus />
					</Button>
				</FlexLayout>
				<FlexLayout direction="col" justify="center" align="center" className="relative group">
					<Image
						src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt="image"
						className=" rounded-[8px] object-cover relative"
					/>
					<Button
						onClick={() => setShow(true)}
						className="absolute bottom-0 right-0 bg-white text-black opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 h-fit w-fit aspect-square hover:bg-white cursor-pointer transition-all scale-0 group-hover:scale-100 duration-500 rounded-[50%] p-[10px]"
					>
						<Plus />
					</Button>
				</FlexLayout>
			</GridLayout>
			<Sheet open={show} onOpenChange={setShow}>
				<SheetContent  className="min-w-full bg-transparent shadow-none border-0">
					<SheetHeader>
						<SheetTitle className='text-white'>{status}/3</SheetTitle>
					</SheetHeader>
					<FlexLayout direction="col" className="max-h-[1000px] h-full p-[30px] 1200:p-[100px]">
						<Carousel
							className=" h-full flex items-center"
							showThumbs={false}
							onChange={(index) => setStatus(index)}
							autoPlay
							infiniteLoop
							showIndicators={false}
							showStatus={false}
							renderArrowPrev={(onClickHandler, hasPrev, label) =>
								hasPrev && (
									<Button
										type="button"
										onClick={onClickHandler}
										title={label}
										className="absolute  cursor-pointer h-fit w-fit aspect-square left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
									>
										<ChevronLeft size={24} />
									</Button>
								)
							}
							renderArrowNext={(onClickHandler, hasNext, label) =>
								hasNext && (
									<Button
										type="button"
										onClick={onClickHandler}
										title={label}
										className="absolute cursor-pointer h-fit w-fit aspect-square  right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
									>
										<ChevronRight size={24} />
									</Button>
								)
							}
						>
							<div>
								<img
									src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="image"
									className="rounded-[8px] object-contain h-full w-auto max-h-[700px]"
								/>
							</div>
							<div>
								<img
									src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="image"
									className="rounded-[8px] object-contain h-full w-auto max-h-[700px]"
								/>
							</div>
							<div>
								<img
									src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="image"
									className="rounded-[8px] object-contain h-full w-auto max-h-[700px]"
								/>
							</div>
							<div>
								<img
									src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt="image"
									className="rounded-[8px] object-contain h-full w-auto max-h-[700px]"
								/>
							</div>
						</Carousel>
					</FlexLayout>
				</SheetContent>
			</Sheet>
		</FlexLayout>
	);
};
