import React, { ReactNode } from 'react';

import Footer from '@/components/common/footer';
import Header from '@/components/common/headers';
import ScrollTopButton from '@/components/common/scroll-top';

interface Props {
	children: ReactNode;
}
const WrapperProvider: React.FC<Props> = ({children}) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<ScrollTopButton />
		</>
	);
};

export default WrapperProvider;
