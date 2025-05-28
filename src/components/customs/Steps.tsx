"use client";
import { ReactNode } from 'react';

import clsx from 'clsx';
import dynamic from 'next/dynamic';

import { CheckedLottie } from '@/assets/lotties';

const Lottie = dynamic(() => import("lottie-react"), {
	ssr: false,
});

const DefaultCheckSVG = () => (
	<svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.0964 0.390037L3.93638 7.30004L2.03638 5.27004C1.68638 4.94004 1.13638 4.92004 0.736381 5.20004C0.346381 5.49004 0.236381 6.00004 0.476381 6.41004L2.72638 10.07C2.94638 10.41 3.32638 10.62 3.75638 10.62C4.16638 10.62 4.55638 10.41 4.77638 10.07C5.13638 9.60004 12.0064 1.41004 12.0064 1.41004C12.9064 0.490037 11.8164 -0.319963 11.0964 0.380037V0.390037Z"
			fill="white"
		/>
	</svg>
);

const DefaultCheckLottie = () => <Lottie animationData={CheckedLottie} loop={false} autoPlay />;

export interface StepType {
	title?: ReactNode;
	content?: ReactNode;
	completed: boolean;
	active?: boolean;
	id?: string | number;
}

export interface StepColors {
	activeClass?: string;
	inactiveClass?: string;
	completedBackgroundClass?: string;
	lineActiveClass?: string;
	lineInactiveClass?: string;
	textTitleClass?: string;
	textContentClass?: string;
	circleActiveClass?: string;
	circleInactiveClass?: string;
}

type Orientation = "vertical" | "horizontal";
type ContentPosition = "left" | "right" | "top" | "bottom";

type StepData = {
  step: StepType;
}

type StepProps = {
	stepIndex?: string | number;
	isLast?: boolean;
	orientation?: Orientation;
	circleContentOrientation?: Orientation;
	contentPosition?: ContentPosition;
	checkIconAnimation?: boolean;
	circleSize?: number;
	iconSize?: number;
	spacing?: number;
	alignment?: "start" | "center" | "end";
	renderCheckIcon?: () => React.ReactNode;
	circleIndexClass?: string;
	renderContent?: (step: StepType) => React.ReactNode;
	onClick?: (step: StepType) => void;
	onHover?: (step: StepType) => void;
	colors?: StepColors;
	className?: string;
	lineStyle?: React.CSSProperties;
	lineClassName?: string;
  lineType?: "solid" | "dashed" | "dotted";
	children?: React.ReactNode;
};

const Step: React.FC<StepProps & StepData> = ({
	step,
	stepIndex = "0",
	isLast = false,
	orientation = "vertical",
	circleContentOrientation = "vertical",
	circleIndexClass = "",
	contentPosition = "right",
	circleSize = 24,
	iconSize = 12,
	spacing = 12,
	alignment = "start",
	checkIconAnimation = false,
	renderCheckIcon = () => <DefaultCheckSVG />,
	renderContent,
	onClick,
	onHover,
	colors = {},
	className = "",
	lineClassName = "",
	lineStyle = {},
  lineType = "solid",
	children
}) => {
	const {title = "Title", content = "Content", completed = false, active = false} = step;

	const {
		activeClass: activeColorClass = "bg-gray-300",
		inactiveClass = "bg-white",
		completedBackgroundClass = "bg-green-500",
		lineActiveClass = "border-green-500",
		lineInactiveClass = "border-gray-300",
		textTitleClass = "text-black",
		textContentClass = "text-gray-500",
		circleActiveClass = "bg-green-200",
		circleInactiveClass = "bg-white",
	} = colors;

	const containerFlex = orientation === "vertical" ? "flex-row" : "flex-col";
	const contentFlex = circleContentOrientation === "vertical" ? "flex-row" : "flex-col";
	const contentOrder =
		(orientation === "vertical" && contentPosition === "left") ||
		(orientation === "horizontal" && contentPosition === "top")
			? "order-first"
			: "order-last";

	return (
		<div
			className={clsx("flex flex-row gap-2 transition-all overflow-hidden", contentFlex, `items-${alignment}`, className)}
			style={{gap: spacing}}
			onClick={() => onClick?.(step)}
			onMouseEnter={() => onHover?.(step)}
		>
			<div className={clsx("flex transition-all h-full relative", containerFlex)}>
				<div className={clsx("rounded-full transition-all ", active ? activeColorClass : inactiveClass)}>
					{completed ? (
						<div
							className={clsx(
								"m-1 flex items-center z-10 relative justify-center rounded-full transition-all",
								completedBackgroundClass
							)}
							style={{width: circleSize, height: circleSize}}
						>
							<div style={{width: iconSize, height: iconSize}}>
								{checkIconAnimation ? <DefaultCheckLottie /> : renderCheckIcon()}
							</div>
						</div>
					) : (
						<div
							className={clsx(
								"rounded-full flex !z-10 relative items-center justify-center text-2xl font-bold border m-1 transition-all duration-300",
								active ? circleActiveClass : circleInactiveClass, circleIndexClass
							)}
							style={{width: circleSize, height: circleSize}}
						>
							{step.id || stepIndex}
						</div>
					)}
				{!isLast && (
					<div
						className={clsx(
							"transition-all duration-300 z-[1]",
							completed ? lineActiveClass : lineInactiveClass, lineClassName
						)}
						style={{
							width: orientation === "vertical" ? 3 : "100%",
							height: orientation === "vertical" ? "100%" : 3,
              borderWidth: orientation === "vertical" ? "0 0 0 2px" : "2px 0 0 0",
              borderStyle: lineType,
							...lineStyle,
						}}
					/>
				)}
				</div>
			</div>

			<div className={clsx(contentOrder)}>
				{renderContent ? (
					renderContent(step)
				) : (
					<div className='flex flex-col'>
						<h3 className={clsx("text-sm font-medium transition-all", textTitleClass)}>{title}</h3>
						<p className={clsx("text-sm transition-all", textContentClass)}>{content}</p>
						{children}
					</div>
				)}
			</div>
		</div>
	);
};

type StepperContainerProps = {
	steps: StepType[];
	orientation?: "vertical" | "horizontal";
	contentPosition?: "left" | "right" | "top" | "bottom";
	circleSize?: number;
	iconSize?: number;
	spacing?: number;
	alignment?: "start" | "center" | "end";
	renderCheckIcon?: () => React.ReactNode;
	renderContent?: (step: StepType, index: number) => React.ReactNode;
	onStepClick?: (step: StepType, index: number) => void;
	onStepHover?: (step: StepType, index: number) => void;
	colors?: StepColors;
	className?: string;
	lineStyle?: React.CSSProperties;
  lineType?: "solid" | "dashed" | "dotted";
} & StepProps;

const StepperContainer: React.FC<StepperContainerProps> = ({
	steps = [{title: "Title", content: "Content", completed: false, active: false, id: "1"}, {title: "Title", content: "Content", completed: false, active: false, id: "1"}],
	orientation = "vertical",
	contentPosition = "right",
	...rest
}) => {
	return (
		<div className={`flex ${orientation === "vertical" ? "flex-col" : "flex-row"}`}>
			{steps.map((step, index) => (
				<Step
					key={step.id ?? index}
					step={step}
					stepIndex={index + 1}
					isLast={index === steps.length - 1}
					orientation={orientation}
					contentPosition={contentPosition}
					{...rest}
					onClick={(s) => rest.onStepClick?.(s, index)}
					onHover={(s) => rest.onStepHover?.(s, index)}
					renderContent={rest.renderContent ? (s) => rest.renderContent?.(s, index) : undefined}
				/>
			))}
		</div>
	);
};

export { Step, StepperContainer };
