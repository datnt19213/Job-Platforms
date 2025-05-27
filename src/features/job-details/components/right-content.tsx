"use client";
import React from 'react';

import { Facebook, Instagram, Linkedin, MoveUpRight, Twitter } from 'lucide-react';
import Link from 'next/link';

import { ButtonBase, ButtonLikeBadge } from '@/components/customs/Buttons';
import CardIconDetail from '@/components/customs/CardIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { Button } from '@/components/ui/button';

interface RightContentProps {
	slug: string;
}
export const RightContent: React.FC<RightContentProps> = ({slug}) => {
  const [showPhone, setShowPhone] = React.useState(false);
	return (
		<FlexLayout
			direction="col"
			justify="start"
			align="center"
			className="hidden 990:flex w-full px-[15px] gap-[30px]"
		>
			<FlexLayout direction="col" className="bg-[#F5F7FC] rounded-[8px] p-[30px] w-full gap-[15px]">
				<FlexLayout direction="col" justify="center" align="center" className="w-full">
					<span className="font-semibold text-[20px]">Application ends:</span>
					<span>May 12, 2026</span>
				</FlexLayout>
				<ButtonBase variant="default" className="w-full text-[15px]">
					Apply now <MoveUpRight size={16} />
				</ButtonBase>
			</FlexLayout>
			<FlexLayout
				direction="col"
				className="bg-[#F5F7FC] rounded-[8px] p-[30px] w-full gap-[15px] "
			>
				<CardIconDetail
					icon={<img src="/images/share-icon.png" alt="share-icon" />}
					iconClassName="rounded-[8px] aspect-square min-w-[80px] h-[80px]"
					titleClassName="mb-[15px]"
					title={
						<Link
							href={`https://apusthemes.com/wp-demo/superio/employer/invision/`}
							target="_blank"
							className="font-semibold text-[18px] no-underline hover:no-underline hover:text-blue-hover "
						>
							Invision
						</Link>
					}
					description={
						<Link
							href={`https://apusthemes.com/wp-demo/superio/employer/invision/`}
							target="_blank"
							className="text-sm font-medium text-blue-hover hover:underline"
						>
							View Company Profile
						</Link>
					}
				/>
				<FlexLayout direction="col" className="gap-[10px]">
					<FlexLayout direction="row" justify="between" align="start">
            <span className='text-base font-semibold text-black'>Categories:</span>
            <Link href={`/Design`} className="text-[15px] text-gray-600 font-semibold hover:text-blue-hover hover:no-underline">Design</Link>
					</FlexLayout>
					<FlexLayout direction="row" justify="between" align="start">
            <span className='text-base font-semibold text-black'>Founded Date:</span>
            <span className='text-gray-600 font-semibold text-[15px]'>1995</span>
					</FlexLayout>
					<FlexLayout direction="row" justify="between" align="start">
            <span className='text-base font-semibold text-black'>Location:</span>
            <Link href={`/miami`} className="text-[15px] font-semibold text-gray-600 hover:text-blue-hover hover:no-underline">Miami</Link>
					</FlexLayout>
					<FlexLayout direction="row" justify="between" align="center">
            <span className='text-base font-semibold text-black'>Phone Number:</span>
            <FlexLayout direction='col'>
              {showPhone ? <Link href={`tel:123456789`} className="text-[15px] font-semibold text-gray-600 hover:text-blue-hover hover:no-underline">0123456789</Link> : <span className="text-[15px] text-gray-600 font-medium">0123 ****</span>}
              {!showPhone && <Button className="py-[3px] px-[10px] h-[25px] cursor-pointer w-[45px] bg-blue-hover text-white font-medium" onClick={() => setShowPhone(!showPhone)}>Show</Button>}
            </FlexLayout>
					</FlexLayout>
					<FlexLayout direction="row" justify="between" align="start">
            <span className='text-base font-semibold text-black'>Email:</span>
            <span className="text-[15px] font-semibold text-gray-600">2k6o1@example.com</span>
					</FlexLayout>
					<FlexLayout direction="row" justify="between" align="start">
            <span className='text-base font-semibold text-black'>Socials:</span>
            <FlexLayout className='gap-4'>
              <Link href={`https://www.facebook.com/`} target="_blank" className=" text-gray-600 transition-all hover:text-[#BC91E8]">
                <Facebook size={20} />
              </Link>
              <Link href={`https://www.twitter.com/`} target="_blank" className=" text-gray-600 transition-all hover:text-[#BC91E8]">
                <Twitter size={20} />
              </Link>
              <Link href={`https://www.linkedin.com/`} target="_blank" className=" text-gray-600 transition-all hover:text-[#BC91E8]">
              <Linkedin size={20} />
              </Link>
              <Link href={`https://www.instagram.com/`} target="_blank" className=" text-gray-600 transition-all hover:text-[#BC91E8]">
              <Instagram size={20} />
              </Link>

            </FlexLayout>
					</FlexLayout>
            <ButtonBase variant='link' className='transition-all duration-700 h-[50px] w-full rounded-[8px] text-[15px] font-semibold text-blue-hover hover:text-white bg-blue-not-hover hover:bg-blue-hover hover:no-underline'  >
              elvato.com
            </ButtonBase>
				</FlexLayout>
			</FlexLayout>
      <FlexLayout direction="col" className=" w-full gap-[18px]">
        <span className='font-semibold text-[18px] text-black'>Job Skills</span>
        <FlexLayout direction="row" className="flex-wrap gap-[6px]">
          <ButtonLikeBadge variant="default" isActive={false} className="hover:bg-[#ECEDF2] hover:border-[#ECEDF2] hover:text-black transition-all duration-500 text-[15px] font-normal h-[42px] px-[20px] py-[7px]">
            App
          </ButtonLikeBadge>
          <ButtonLikeBadge variant="default" isActive={false} className="hover:bg-[#ECEDF2] hover:border-[#ECEDF2] hover:text-black transition-all duration-500 text-[15px] font-normal h-[42px] px-[20px] py-[7px]">
            WordPress
          </ButtonLikeBadge>
          <ButtonLikeBadge variant="default" isActive={false} className="hover:bg-[#ECEDF2] hover:border-[#ECEDF2] hover:text-black transition-all duration-500 text-[15px] font-normal h-[42px] px-[20px] py-[7px]">
            Superio
          </ButtonLikeBadge>
          <ButtonLikeBadge variant="default" isActive={false} className="hover:bg-[#ECEDF2] hover:border-[#ECEDF2] hover:text-black transition-all duration-500 text-[15px] font-normal h-[42px] px-[20px] py-[7px]">
            WordPress
          </ButtonLikeBadge>
        </FlexLayout>
      </FlexLayout>
		</FlexLayout>
	);
};
