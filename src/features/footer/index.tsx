"use client";
import React from 'react';

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

import { logo, bg_footer13 } from '@/assets/images';
import Image from '@/components/customs/Image';
import { LinkHoverLine } from '@/components/customs/LinkHoverLine';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { FlexLayout } from '@/components/customs/FlexLayout';

interface FooterLink {
	href: string;
	label: string;
}

const footerLinks = {
	forCandidates: [
		{href: "/browse-jobs", label: "Browse Jobs"},
		{href: "/browse-candidates", label: "Browse Candidates"},
		{href: "/candidate-dashboard", label: "Candidate Dashboard"},
		{href: "/job-alerts", label: "Job Alerts"},
		{href: "/my-bookmarks", label: "My Bookmarks"},
	],
	forEmployers: [
		{href: "/all-employers", label: "All Employers"},
		{href: "/employer-dashboard", label: "Employer Dashboard"},
		{href: "/submit-job", label: "Submit Job"},
		{href: "/job-packages", label: "Job Packages"},
	],
	aboutUs: [
		{href: "/contact", label: "Contact Us"},
		{href: "/about", label: "About Us"},
		{href: "/terms", label: "Terms"},
		{href: "/packages", label: "Packages"},
		{href: "/faq", label: "FAQ"},
	],
	helpfulResources: [
		{href: "/sitemap", label: "Site Map"},
		{href: "/terms-of-use", label: "Terms of Use"},
		{href: "/privacy-center", label: "Privacy Center"},
		{href: "/security-center", label: "Security Center"},
		{href: "/accessibility-center", label: "Accessibility Center"},
	],
};

const socialIcons = [
	{Icon: Facebook, label: "Facebook"},
	{Icon: Twitter, label: "Twitter"},
	{Icon: Instagram, label: "Instagram"},
	{Icon: Linkedin, label: "LinkedIn"},
];

const FooterBar = () => {
	const pathName = usePathname();
	const FooterLinkSection = ({title, links}: {title: string; links: FooterLink[]}) => (
		<div className="p-[15px] font-semibold">
			<h3 className="font-bold text-gray-900 text-[20px] mb-4">{title}</h3>
			<ul className="space-y-3">
				{links.map(({href, label}) => (
					<li key={href}>
						<LinkHoverLine href={href} className="text-gray-500 hover:text-blue-hover transition-all">
							{label}
						</LinkHoverLine>
					</li>
				))}
			</ul>
		</div>
	);

	return (
		<footer className={cn("border-t border-gray-200 relative bg-[#F6F7FB] 1200:bg-transparent", pathName === "/" && "border-t-0 1200:pt-[100px]")}>
			<FlexLayout direction="col" className="max-w-[1320px] mx-auto">
				{pathName === "/" && <Image src={bg_footer13.src} alt="Footer Background" className="w-full h-full object-cover !absolute top-0 left-0 z-[1] hidden 1200:block" />}
				<div className='relative z-[2]'>
					<div className="grid grid-cols-1 md:grid-cols-2 990:!grid-cols-5 gap-8 py-[15px] md:py-[30px] ">
						{/* Company Info */}
						<div className="lg:col-span-1 p-[15px] font-semibold">
							<Image src={logo.src} alt="Superio Logo" className="h-[50px] mb-[30px]" fit="h" />
							<div className="space-y-4">
								<div>
									<h3 className="font-bold text-[20px] mb-4">Call us</h3>
									<Link
										href="tel:123-456-7890"
										className="text-blue-hover hover:text-blue-hover text-[20px] font-bold"
									>
										123 456 7890
									</Link>
								</div>
								<div className="text-base">
									<p className="leading-relaxed">
										328 Queensberry Street, North Melbourne VIC
										<br />
										3051, Australia.
									</p>
								</div>
								<div className="text-base">
									<Link
										href="mailto:support@superio.com"
										className="text-gray-600 hover:text-gray-700"
									>
										support@superio.com
									</Link>
								</div>
							</div>
						</div>
	
						<FooterLinkSection title="For Candidates" links={footerLinks.forCandidates} />
						<FooterLinkSection title="For Employers" links={footerLinks.forEmployers} />
						<FooterLinkSection title="About Us" links={footerLinks.aboutUs} />
						<FooterLinkSection title="Helpful Resources" links={footerLinks.helpfulResources} />
					</div>
				</div>
	
				<div className="relative z-[2] border-t border-gray-200 py-[10px] flex flex-col md:flex-row justify-between items-center md:h-[75px] 990:!h-[95px]">
					<span className="text-gray-500 text-base p-[15px] font-semibold">
						© 2021 Superio. All Right Reserved.
					</span>
	
					<div className="flex space-x-4 pb-[15px] md:pb-0 md:p-[15px] md:pt-0">
						{socialIcons.map(({Icon, label}) => (
							<Link
								key={label}
								href="#"
								className="text-gray-400 hover:text-purple-share transition-colors"
								aria-label={label}
							>
								<Icon size={20} />
							</Link>
						))}
					</div>
				</div>
			</FlexLayout>
		</footer>
	);
};

export default FooterBar;
