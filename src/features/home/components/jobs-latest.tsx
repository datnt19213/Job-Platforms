"use client";
import React from 'react';

import {
  Bookmark,
  Briefcase,
  Clock,
  DollarSign,
} from 'lucide-react';

import { ScrollAnimator } from '@/components/customs/AnimatedComponent';
import { ButtonBase } from '@/components/customs/Buttons';
import CardIconDetail from '@/components/customs/CardIconDetail';
import { FlexLayout } from '@/components/customs/FlexLayout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { JobsList } from '@/configs/common';
import BodyContainer from '@/containers/body-container';

export const JobsLatest = () => {
  const [tab, setTab] = React.useState('intern');
  return (
    <BodyContainer className="w-full max-w-[1320px] mx-auto p-[15px] mt-[75px]">
      <FlexLayout direction='col' align='center' className='w-full'>
        <span className='font-bold text-[24px]  text-blue-dark'>Latest Jobs</span>
        <span className='text-[14px] text-blue-dark mb-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
        <Tabs className="w-full" value={tab} onValueChange={(value) => setTab(value)} >
          <TabsList className='mx-auto w-fit bg-transparent flex items-center gap-2 mt-[30px] mb-[30px]'>
            <TabsTrigger className='rounded-full shadow-none border-blue-dark data-[state=active]:bg-blue-dark data-[state=active]:text-white px-[20px] font-medium h-10' value="intern">Intership</TabsTrigger>
            <TabsTrigger className='rounded-full shadow-none border-blue-dark data-[state=active]:bg-blue-dark data-[state=active]:text-white px-[20px] font-medium h-10' value="temp">Temporary</TabsTrigger>
          </TabsList>
          <TabsContent value="intern" className='flex flex-col gap-[15px]'>
            {
              JobsList.map((job, index) => (
                <ListContent isFeatured={index%2 === 0} isFilled={index%3 === 0} isClosed={index%4 === 0} key={index} {...job} />
              ))
            }
          </TabsContent>
          <TabsContent value="temp" className='flex flex-col gap-[15px]'>
            {
              JobsList.map((job, index) => (
                <ListContent isFeatured={index%3 === 0} isFilled={index%2 === 0} isClosed={index%5 === 0} key={index} {...job} />
              ))
            }
          </TabsContent>
        </Tabs>
      </FlexLayout>
    </BodyContainer> 
  )
}

type JobInfo = {
  id: number;
  title: string;
  company: string;
  location: string;
  employmentType: string;
  salary: string;
  experience: string;
  education: string;
  skills: string[];
  category: string;
  tags: string[];
  postedDate: string;
} & {
  isFeatured: boolean;
  isFilled: boolean;
  isClosed: boolean;
}
const ListContent: React.FC<JobInfo> = ({id, title, company, location, employmentType, salary, experience, education, skills, category, tags, postedDate, isFeatured, isFilled, isClosed}) => {
  return (
    <ScrollAnimator isZoom={false} fade slide="up" delay={0.1 * id} distancing={20}>
      <FlexLayout
  				justify="start"
  				align="center"
  				className="p-[15px] 1200:p-[30px] flex-col 990:flex-row gap-[15px] border border-gray-300 rounded-[8px] 1200:rounded-[18px] bg-[#F5F7FB] hover:bg-white w-full group transition-all"
  			>
  				<CardIconDetail
  					icon="icon-1"
  					iconClassName="min-w-[50px] h-[50px] !rounded-[8px]"
  					className="w-full"
  					title={
  						<div className="font-semibold text-[18px] flex items-center gap-2">
  							{title} {isFeatured && <span className="text-lime-600 text-xs">Featured</span>} {isFilled && <span className="text-red-700 text-xs">Filled</span>}
  						</div>
  					}
  					description={
  						<FlexLayout direction="col" justify="start" align="start" className="gap-[10px]">
  							<FlexLayout direction="row" justify="start" align="start" className="gap-[20px]">
  								<FlexLayout direction="row" justify="start" align="center" className="gap-[5px]">
  									<Briefcase size={18} />
  									<span className="text-sm font-medium">{category}</span>
  								</FlexLayout>
  								<FlexLayout direction="row" justify="start" align="center" className="gap-[5px]">
  									<Clock size={18} />
  									<span className="text-sm font-medium">{postedDate}</span>
  								</FlexLayout>
  								<FlexLayout direction="row" justify="start" align="center" className="gap-[5px]">
  									<DollarSign size={18} />
  									<span className="text-sm font-medium">${salary} / week</span>
  								</FlexLayout>
                  <FlexLayout direction="row" justify="start" align="center" className="gap-[5px]">
                    {
                      tags?.map((tag, index) => (
                        <Badge key={index} className="rounded-full bg-blue-100 text-blue-dark text-sm font-medium">
                          {tag}
                        </Badge>
                      ))
                    }
                  </FlexLayout>
  							</FlexLayout>
  						</FlexLayout>
  					}
  				/>
  				<FlexLayout className="gap-[10px] w-full flex-nowrap 990:w-fit 990:flex-col 990:items-end 1200:flex-row 1200:items-center">
  					<Button variant="ghost" size="icon" className="rounded-full cursor-pointer">
  						<Bookmark size={20} />
  					</Button>
  					{isClosed ? <span className='text-gray-500 text-[15px] font-medium'>Application deadline closed.</span> : <ButtonBase variant="secondary" className='text-blue-dark border border-blue-dark hover:bg-blue-dark '>Appy Now</ButtonBase>}
  				</FlexLayout>
  			</FlexLayout>
    </ScrollAnimator>
  )
}
