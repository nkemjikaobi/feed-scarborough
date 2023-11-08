'use client';
import React, { useEffect, useState } from 'react';
import { Inter, Roboto } from 'next/font/google';
import DashboardSideBar from '../components/DashboardSideBar/DashboardSideBar';
import useClickOutside from '../hooks/useClickOutside';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	const [showSidebar, setShowSidebar] = useState<boolean>(false);

	const node = useClickOutside(() => {
		setShowSidebar(false);
	});

	useEffect(() => {
		return () => {
			setShowSidebar(false);
		};
	}, []);

	return (
		<div className={`flex bg-career-gray-400 ${roboto.className}`}>
			<div className='hidden smallLaptop:block w-[14rem] bigLaptop:w-[19.813rem] min-h-screen max-h-[64rem] h-auto'>
				<DashboardSideBar setShowSidebar={setShowSidebar} />
			</div>
			<div
				className={`w-[14rem] min-h-screen max-h-[64rem] h-auto fixed bottom-0 top-0 left-0 z-50 smallLaptop:hidden duration-500 transform transition-transform ${
					showSidebar ? 'translate-x-0' : '-translate-x-full'
				}`}
				ref={node}
			>
				<DashboardSideBar setShowSidebar={setShowSidebar} />
			</div>
			<div className='flex-1 overflow-y-auto h-[64rem]'>
				<div className='p-4 fixed top-0 right-0 bg-white smallLaptop:hidden'>
					{showSidebar ? (
						<AiOutlineClose
							className='cursor-pointer text-24'
							name='hamburger'
							onClick={() => setShowSidebar(false)}
						/>
					) : (
						<GiHamburgerMenu
							className='cursor-pointer text-24'
							name='hamburger'
							onClick={() => setShowSidebar(true)}
						/>
					)}
				</div>
				<div className='px-6 pt-16 smallLaptop:pt-6'>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
