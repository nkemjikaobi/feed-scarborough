import React from 'react';
import DashboardSideBar from '../components/DashboardSideBar/DashboardSideBar';
import DashboardNavBar from '../components/DashboardNavBar/DashboardNavBar';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
	children,
}) => {
	return (
		<div className={`flex bg-career-gray-400`}>
			<div className='w-[14rem] bigLaptop:w-[19.813rem] min-h-screen max-h-[64rem] h-auto'>
				<DashboardSideBar />
			</div>
			<div className='flex-1 overflow-y-auto h-[64rem]'>
				<div className='w-full p-6'>
					<DashboardNavBar />
				</div>
				<div className='p-6'>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
