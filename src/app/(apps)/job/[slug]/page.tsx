import React from 'react';

import JobDetails from '@/features/job-details';

const JobDetail = async ({ params }: any) => {
  const { slug } = params;
  return <JobDetails slug={slug} />;
};

export default JobDetail;
