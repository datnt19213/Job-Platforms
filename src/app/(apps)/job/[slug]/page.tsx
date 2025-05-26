import React from 'react';

export const gnerateMetadata = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  return {
    title: slug,
  }
}

const JobDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <div className='font-jost'>JobDetail: {params.slug}</div>
  )
}

export default JobDetail