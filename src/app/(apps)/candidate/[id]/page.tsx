import React from 'react';

import { CandidateDetails } from '@/features/candidate-detail';

const CandidateDetail = async ({params}: any) => {
	const {id} = await params;
	return <CandidateDetails id={id} />;
};

export default CandidateDetail;
