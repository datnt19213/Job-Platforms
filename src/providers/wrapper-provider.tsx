import React, { ReactNode } from 'react';

import Footer from '@/components/common/footer';
import Header from '@/components/common/headers';
import ScrollTopButton from '@/components/common/scroll-top';
import { Scroller } from '@/components/customs/Scroller';
import { LoginRegister } from '@/features/common/login-register';

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
			<Scroller />
			<LoginRegister />
		</>
	);
};

export default WrapperProvider;
