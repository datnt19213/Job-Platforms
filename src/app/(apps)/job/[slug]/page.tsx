import React from 'react';

import JobDetails from '@/features/job-details';

const JobDetail = async ({ params }: any) => {
  const { slug } = await params;
  return <JobDetails slug={slug} />;
};

export default JobDetail;
