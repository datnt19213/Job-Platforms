import React from 'react';

import { cn } from '@/lib/utils';

import { FlexLayout } from './FlexLayout';

interface CardSquareIconDetailProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CardSquareIconDetail: React.FC<CardSquareIconDetailProps> = ({ icon, title, description, className, onClick }) => {
  return (
    <FlexLayout direction="col" align='center' className={cn('gap-y-[10px]', className)} onClick={onClick}>
      {icon}
      {title}
      {description}
    </FlexLayout>
  )
}
