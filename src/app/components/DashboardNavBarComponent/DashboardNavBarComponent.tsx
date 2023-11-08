'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '../atoms/Icons';

const DashboardNavBarComponent = () => {
	const router = useRouter();

	return (
		<div className='w-full h-full bg-white p-4 rounded-2xl flex items-center justify-between'>
			<div
				onClick={() => router.push('/dashboard/profile')}
				className='flex items-center cursor-pointer'
			>
				<div className='flex flex-col'>
					<h4 className='font-medium text-career-black-200 text-xl'>Welcome, Admin</h4>
				</div>
			</div>
		</div>
	);
};

export default DashboardNavBarComponent;
