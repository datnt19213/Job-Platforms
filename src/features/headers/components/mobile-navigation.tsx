"use client";
import Image from "@/components/customs/Image";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import {useNavigationState} from "@/stores/state/navigation-state";
import React from "react";
import {logo} from "@/assets/images";
import {FlexLayout} from "@/components/customs/FlexLayout";
import {User2, X} from "lucide-react";
import {NavigationList} from "..";
import Link from "next/link";
import {ButtonBase} from "@/components/customs/Buttons";

export const MobileNavigation = () => {
	const {showSheet, setShowSheet} = useNavigationState();
	return (
		<Sheet open={showSheet} onOpenChange={setShowSheet}>
			<SheetContent
				side="left"
				className="gap-0 !max-w-[350px] w-full p-0 !border-none shadow-light"
			>
				<SheetHeader className="p-0 ">
					<SheetTitle className="h-[70px] w-full bg-white flex justify-between items-center gap-2 z-[2] px-[15px]">
						<Image src={logo.src} fit="h" alt="logo" className="w-full h-10 object-contain" />
						<FlexLayout direction="row" className="gap-2">
							<User2
								size={24}
								strokeWidth={1.7}
								className="cursor-pointer hover:text-blue-hover transition-all"
							/>
							<X
								size={24}
								strokeWidth={1.7}
								onClick={() => setShowSheet(false)}
								className="cursor-pointer hover:text-blue-hover transition-all"
							/>
						</FlexLayout>
					</SheetTitle>
				</SheetHeader>
				<FlexLayout
					direction="col"
					className="bg-[#202124] h-[calc(100vh-(270px+70px))] p-[15px] overflow-y-scroll scrollbar-none"
				>
					{NavigationList.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className="text-gray-300 text-[15px] px-[20px] hover:text-white font-medium cursor-pointer h-[50px] transition-all flex items-center"
						>
							{item.name}
						</Link>
					))}
				</FlexLayout>
				<FlexLayout direction="col" className="p-[15px] h-[270px] bg-[#202124]">
					<ButtonBase variant="default" className="w-full">
						Post Job
					</ButtonBase>
					<FlexLayout direction="col">
						<h3 className="mb-[10px] text-[18px] font-semibold text-gray-300 mt-[15px]">Call Us</h3>
						<span className="text-[18px] mb-[15px] font-semibold text-white ">123456798</span>
						<p className="line-clamp-2 text-[14px] font-semibold text-gray-300">
							328 Queensberry Street, North Melbourne VIC 3051, Australia.
						</p>
						<p className="line-clamp-1 text-[14px] font-semibold text-gray-300">support@jobhub.com</p>
					</FlexLayout>
				</FlexLayout>
			</SheetContent>
		</Sheet>
	);
};
