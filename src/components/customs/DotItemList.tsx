import React from 'react';

import { cn } from '@/lib/utils';

interface DotItemListProps {
  separator?: React.ReactNode
  items: React.ReactNode[] | React.ReactNode | string | string[] 
  className?: string
}

export const DotItemList: React.FC<DotItemListProps> = ({className, items, separator = <div className="h-[5px]  min-w-[5px] w-[5px] rounded-full bg-[#696969]"></div>}) => {
  return (
    <div className={cn("flex items-center gap-[5px]", className)}>
      {Array.isArray(items) ? items.map((item, index) => (
        <React.Fragment key={index}>
          {item}
          {index < items.length - 1 && separator}
        </React.Fragment>
      )) : items}
    </div>
  )
}
