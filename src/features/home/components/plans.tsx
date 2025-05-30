import React from 'react';

import { Check } from 'lucide-react';

import {
  business,
  free,
  pro,
} from '@/assets/images';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { ButtonBase } from '@/components/customs/Buttons';
import Image from '@/components/customs/Image';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import BodyContainer from '@/containers/body-container';

const plans: Array<{
	name: string;
	price: string;
	icon: string;
	features: string[];
	buttonVariant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
	highlighted: boolean;
}> = [
	{
		name: "Basic",
		price: "$199.00",
		icon: free.src,
		features: [
			"30 job posting",
			"3 featured job",
			"Job displayed for 15 days",
			"Premium Support 24/7",
		],
		buttonVariant: "secondary",
		highlighted: false,
	},
	{
		name: "Standard",
		price: "$499.00",
		icon: pro.src,
		features: [
			"40 job posting",
			"5 featured job",
			"Job displayed for 30 days",
			"Premium Support 24/7",
		],
		buttonVariant: "default",
		highlighted: true,
	},
	{
		name: "Extended",
		price: "$799.00",
		icon: business.src,
		features: [
			"50 job posting",
			"10 featured job",
			"Job displayed for 60 days",
			"Premium Support 24/7",
		],
		buttonVariant: "secondary",
		highlighted: false,
	},
];
export const Plans = () => {
	return (
		<BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px] mt-[75px]">
			<ScrollAnimator isZoom={false} fade slide="up" className='w-full'>
			  <div className="w-full py-16">
  				<div className="container mx-auto">
  					{/* Header */}
  					<div className="text-center mb-12">
  						<h2 className="text-[24px] md:text-[30px] font-extrabold text-blue-dark mb-4">
  							Choose a plan that's right for you.
  						</h2>
  						<p className="text-gray-500 font-medium max-w-2xl mx-auto">
  							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
  							incididunt ut labore et dolore magna
  						</p>
  					</div>
  
  					{/* Pricing Cards */}
  					<div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] 990:gap-8 mx-auto">
  						{plans.map((plan, index) => {
  							return (
  								<ScrollAnimator
  									key={index}
  									delay={index * 0.1}
  									isZoom={false}
  									fade
  									slide="down"
  									distancing={20}
  									className="w-fit"
  								>
  									<PlanCard {...plan} />
  								</ScrollAnimator>
  							);
  						})}
  					</div>
  				</div>
  			</div>
			</ScrollAnimator>
		</BodyContainer>
	);
};

interface PlanCardProps {
	name: string;
	price: string;
	icon: string;
	features: string[];
	buttonVariant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
	highlighted: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
	name,
	price,
	icon,
	features,
	buttonVariant,
	highlighted,
}) => {
	return (
		<Card
			className={`relative gap-0 bg-white shadow-none border transition-all duration-200 hover:shadow-light group hover:bg-[#F5F7FB] ${
				highlighted ? "border-blue-dark bg-[#F5F7FB] shadow-md" : "border-gray-200"
			}`}
		>
			<CardHeader className="text-center pb-4 px-[15px]">
				<div className="mb-6">
					<h3
						className={`text-[22px] font-bold ${highlighted ? "text-blue-dark" : "text-gray-900"}`}
					>
						{name}
					</h3>
					<div
						className={`text-[40px] font-extrabold mb-[30px] ${
							highlighted ? "text-[#3642AD]" : "text-gray-900"
						}`}
					>
						{price}
					</div>
					<div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
						<Image src={icon} alt="icon" className="min-w-[90px] h-[90px]" />
					</div>
				</div>
			</CardHeader>

			<CardContent className="pt-0 px-[15px]">
				<ul className="space-y-4 mb-8">
					{features.map((feature, featureIndex) => (
						<li key={featureIndex} className="flex items-center">
							<Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
							<span className="text-gray-600">{feature}</span>
						</li>
					))}
				</ul>

				<ButtonBase
					className={`w-full ${
						highlighted
							? "bg-blue-dark hover:bg-blue-dark"
							: "bg-gray-200 hover:bg-blue-dark text-blue-dark hover:text-white"
					} font-semibold py-3 rounded-md group-hover:bg-blue-dark group-hover:text-white transition-all`}
					variant={highlighted ? "default" : "secondary"}
				>
					Add to cart
				</ButtonBase>
			</CardContent>
		</Card>
	);
};
