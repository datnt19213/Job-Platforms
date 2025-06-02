"use client";
import React from 'react';

import {
  Minus,
  Plus,
} from 'lucide-react';

import { Accordion } from '@/components/customs/Accordion';
import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import {
  BannerTitleBreadcrumb,
} from '@/components/customs/BannerTitleBreadcrumb';
import { FlexLayout } from '@/components/customs/FlexLayout';
import BodyContainer from '@/containers/body-container';
import { cn } from '@/lib/utils';

const faqItems = [
	{
		title: "Payments",
		items: [
			{
				q: "Why won't my payment go through?",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
			{
				q: "How do I get a refund?",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
			{
				q: "How do I redeem a coupon?",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
			{
				q: "Changing account name",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
		],
	},
	{
		title: "Suggestions",
		items: [
			{
				q: "Why won't my payment go through?",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
			{
				q: "How do I get a refund?",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
			{
				q: "How do I redeem a coupon?",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
			{
				q: "Changing account name",
				a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor accusamus incidunt molestias quaerat et omnis ipsam id voluptatem aperiam! Corrupti voluptates officia delectus, porro nobis rem labore cum quam eligendi? Voluptatum explicabo perspiciatis quibusdam, expedita saepe iure ullam possimus perferendis, blanditiis, eos repellat nobis in nisi ad repellendus dignissimos temporibus. Accusamus molestiae ipsa magnam voluptate corporis est veritatis quaerat dolorem.",
			},
		],
	},
];

export const FAQs = () => {
	return (
		<BodyContainer className="w-full gap-[15px]">
			<ScrollAnimator isZoom={false} fade slide="down" distancing={20} className="w-full">
				<BannerTitleBreadcrumb
					title="FAQ"
					breadcrumbItems={[
						{label: "Home", href: "/"},
						{label: "FAQ", isCurrent: true},
					]}
				/>
			</ScrollAnimator>
			<ScrollAnimator isZoom={false} fade slide="up" distancing={20} className="w-full">
				<FlexLayout
					direction="col"
					className="w-full p-[15px] mx-auto max-w-[800px] mt-[50px] pb-[60px]"
				>
					{faqItems.map((item, index) => (
						<FlexLayout key={index} direction="col" className="w-full mb-[20px]">
							<h2
								className={cn(
									"text-[20px] font-bold",
									index !== 0 ? "mt-[30px] mb-[20px]" : "mb-[20px]"
								)}
							>
								{item.title}
							</h2>
							<Accordion
								items={item.items.map((item, index) => ({
									id: index,
									title: item.q,
									content: item.a,
								}))}
								className="flex flex-col gap-[20px] w-full"
								contentClassName="border-t border-gray-200"
								itemClassName="overflow-hidden"
								icon={({selected}) =>
									selected ? (
										<Minus size={18} strokeWidth={1.5} />
									) : (
										<Plus size={18} strokeWidth={1.5} />
									)
								}
								title={({title, selected}) => (
									<h3
										className={cn(
											"text-[16px] font-semibold",
											selected ? "text-blue-hover transition-all" : ""
										)}
									>
										{title}
									</h3>
								)}
								content={({content, selected}) => (
									<p className="text-[15px] font-medium text-gray-500 p-[30px]">{content}</p>
								)}
							/>
						</FlexLayout>
					))}
				</FlexLayout>
			</ScrollAnimator>
		</BodyContainer>
	);
};
