import React from 'react';

import Link from 'next/link';

import { logo } from '@/assets/images';
import Image from '@/components/customs/Image';
import { NavigationListType } from '@/features/headers';

interface LeftHeaderProps {
  isMobile: boolean;
  pathName: string;
  navigations: NavigationListType[]
}

const   LeftHeader: React.FC<LeftHeaderProps> = ({ isMobile, pathName, navigations }) => {
  const menuRender = () => {
    if(!isMobile) return (
      <div className='flex items-center gap-x-5 xl:gap-x-11'>
        {navigations.map((item, index) => (
          <Link key={index} href={item.href} className={`text-base ${pathName === item.href ? 'text-primary' : 'text-black'}`}>{item.name}</Link>
        ))}
      </div>
    )
  }


  return (
    <div className='h-10 xl:h-[50px] w-1/2 flex items-center my-auto gap-x-5 xl:gap-x-11'>
      <Image src={logo.src} alt='logo' className='h-full' />
      {menuRender()}
    </div>
  )
}

export default LeftHeader