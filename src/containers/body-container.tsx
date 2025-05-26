import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
}

const BodyContainer: React.FC<Props> = ({children, className, ...props}) => {
	return <div className={className} {...props}>{children}</div>;
};

export default BodyContainer;
