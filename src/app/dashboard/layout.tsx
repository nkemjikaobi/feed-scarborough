import React from 'react';
import { Inter, Roboto } from 'next/font/google';
import DashboardSideBar from '../components/DashboardSideBar/DashboardSideBar';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
	children,
}) => {
	return (
		<div className={`flex bg-career-gray-400 ${roboto.className}`}>
			<div className='w-[14rem] bigLaptop:w-[19.813rem] min-h-screen max-h-[64rem] h-auto'>
				<DashboardSideBar />
			</div>
			<div className='flex-1 overflow-y-auto h-[64rem]'>
				<div className='p-6'>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
