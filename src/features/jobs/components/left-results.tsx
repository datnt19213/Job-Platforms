"use client";
import React from 'react';

import { LoadMoreButton } from '@/components/customs/Buttons';
import { FlexLayout } from '@/components/customs/FlexLayout';
import JobCard from '@/components/customs/JobCard';
import { SelectionsBase } from '@/components/customs/Selections';

const items = [
  { value: 'all', label: 'All' },
  { value: '12', label: '12 per page' },
];




const LeftResults = () => {
	const [isLoading, setIsLoading] = React.useState(false);
  const itemsPerPage = 3;
  const [data, setData] = React.useState(Array.from({ length: 3 }));
  const [currentPage, setCurrentPage] = React.useState(1);

  // data selection
  const [selected, setSelected] = React.useState('all');
	function handleLoadMore(): void {
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
      setCurrentPage(currentPage + 1);
      setData([...data, ...Array.from({ length: itemsPerPage })]);
		}, 2000);
	}

	return (
		<FlexLayout direction="col" justify="start" className='px-[15px] min-w-full gap-[30px]'>
			<FlexLayout align='center' justify='between' className='w-full max-[990px]:mb-[20px]'>
        <span className="text-base">Showing 1 – {selected} of 18 results</span>
        <SelectionsBase items={items} value={selected} onValueChange={setSelected} />
      </FlexLayout>
			<FlexLayout direction="col" justify="start" align="start" className="gap-[30px] w-full">
			  {data?.map((_, index) => index < currentPage * itemsPerPage && (
  				<JobCard key={index}  data={{
            title: `Frontend Developer ${index + 1}`,
            link: `/jobs/frontend-developer-${index + 1}`,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Job description for frontend developer ${index + 1}.`,
            icon: <></>,
            deadlineDate: "2023-12-31",
            isClosedDeadline: false,
          }} />
  
  			))}
        {
          data.length < 10 ? (
            <LoadMoreButton
              isLoading={isLoading}
              onClick={handleLoadMore}
              className="mt-4 mx-auto"
            >
              {() => isLoadMore()}
            </LoadMoreButton>
          ) : (
            <LoadMoreButton
              isLoading={isLoading}
              onClick={handleLoadMore}
              className="mt-4 mx-auto"
            >
              {() => isFullLoaded()}
            </LoadMoreButton>
          )
        }
			</FlexLayout>
		</FlexLayout>
	);
};

export default LeftResults;


const isLoadMore = () => {
  return (
    <span className='text-blue-hover pb-1 relative before:content[] before:absolute before:bottom-0 before:w-[65%] before:h-[2px] before:bg-blue-hover hover:before:w-full before:transition-all before:duration-500'>
      Load more
    </span>
  );
}

const isFullLoaded = () => {
  return (
    <span className='text-destructive'>
      All jobs loaded.
    </span>
  );
}