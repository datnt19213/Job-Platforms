import React from 'react';

import { FlexLayout } from '@/components/customs/FlexLayout';
import { Separator } from '@/components/ui/separator';

import { CandidateAwards } from './candidate-awards';
import { CandidateEdu } from './candidate-edu';
import { CandidateInfo } from './candidate-info';
import { CandidatePorfolio } from './candidate-porfolio';
import { CandidateVideo } from './candidate-video';
import { CandidateWorkExp } from './candidate-work-exp';
import { RelatedCandidate } from './related-candidate';
import { Review } from './review';

const info = {
  name: 'Nguyễn Văn A',
  avatar: 'https://i.pravatar.cc/150?img=1',
  job: 'Frontend Developer',
  address: 'Hà Nội',
  salary: 100,
  skills: [
    {label: 'React', value: 'react'},
    {label: 'NodeJS', value: 'react'},
    {label: 'MongoDB', value: 'react'},
    {label: 'NextJS', value: 'react'},
    {label: 'TypeScript', value: 'react'},
  ],
  featured: true,
}
export const LeftDetail = () => {
  return (
    <FlexLayout direction="col" justify="start" align="start" className="gap-[30px] w-full px-[15px]">
      <CandidateInfo {...{ ...info, jobTitle: info.job, location: info.address }} />
      <Separator className='w-full opacity-30' />
      <CandidateEdu />
      <Separator className='w-full opacity-30' />
      <CandidateWorkExp />
      <Separator className='w-full opacity-30' />
      <CandidatePorfolio />
      <Separator className='w-full opacity-30' />
      <CandidateAwards />
      <Separator className='w-full opacity-30' />
      <CandidateVideo />
      <Separator className='w-full opacity-30' />
      <RelatedCandidate {...{ ...info, jobTitle: info.job, location: info.address }} />
      <Separator className='w-full opacity-30' />
      <Review />
      <Separator className='w-full opacity-30' />
    </FlexLayout>
  )
}
