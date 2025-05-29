import React from 'react';

import Link from 'next/link';

import {
  logo,
  logo_white,
} from '@/assets/images';
import Image from '@/components/customs/Image';
import { NavigationListType } from '@/features/headers';

interface LeftHeaderProps {
  isMobile: boolean;
  isHome: boolean;
  pathName: string;
  navigations: NavigationListType[]
}

const LeftHeader: React.FC<LeftHeaderProps> = ({ isMobile, isHome, pathName, navigations }) => {
  const menuRender = () => {
    if(!isMobile) return (
      <div className='flex items-center gap-x-5 xl:gap-x-11'>
        {navigations.map((item, index) => (
          <Link key={index} href={item.href} className={`text-base ${isHome ? 'text-white' : 'text-black'} ${pathName === item.href && 'text-primary'}`}>{item.name}</Link>
        ))}
      </div>
    )
  }


  return (
    <div className='h-10 xl:h-[50px] w-1/2 flex items-center my-auto gap-x-5 xl:gap-x-11'>
      {isHome && !isMobile && <Image src={logo_white.src} alt='logo' className='h-full' />}
      {isHome && isMobile && <Image src={logo.src} alt='logo' className='h-full' />}
      {!isHome && <Image src={logo.src} alt='logo' className='h-full' />}
      {menuRender()}
    </div>
  )
}

export default LeftHeader