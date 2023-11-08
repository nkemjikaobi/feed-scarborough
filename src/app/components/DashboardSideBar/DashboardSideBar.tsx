'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Icon from '../atoms/Icons';
import {
	MdOutlineInventory,
	MdEmojiEvents,
	MdOutlineVolunteerActivism,
} from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';

const DashboardSideBar = () => {
	const pathname = usePathname();
	const router = useRouter();

	const navBarData = [
		{
			id: 1,
			icon: <AiOutlineHome />,
			name: 'Home',
			route: '/dashboard',
		},
		{
			id: 2,
			icon: <MdOutlineInventory />,
			name: 'Food Inventory',
			route: '/dashboard/food-inventory',
		},
		{
			id: 3,
			icon: <MdEmojiEvents />,
			name: 'Events',
			route: '/dashboard/events',
		},
		{
			id: 4,
			icon: <MdOutlineVolunteerActivism />,
			name: 'Volunteers',
			route: '/dashboard/volunteers',
		},
	];

	return (
		<div className='w-full h-full bg-black text-gray-400 p-4 bigLaptop:p-8 relative'>
			<Link className='cursor-pointer' href='/'>
				<Image src='/foodbank-local.svg' alt='' height={100} width={100} />
			</Link>
			<div className='pt-[5.5rem]'>
				{navBarData.map(data => (
					<Link
						className={`flex items-center mb-6 py-3 rounded-lg  ${
							pathname === data.route
								? 'bg-blue-500 text-white px-4'
								: 'text-gray-400 hover:text-feed-blue'
						}`}
						href={data.route}
						key={data.id}
					>
						<span className=''>{data.icon}</span>
						<p className=' font-medium ml-4'>{data.name}</p>
					</Link>
				))}
			</div>
			<div className='absolute bottom-28'>
				<div
					className='flex items-center cursor-pointer hover:text-feed-blue'
					onClick={() => {
						toast.success('Bye... See you later👋');
						setTimeout(() => {
							router.push('/');
						}, 1000);
					}}
				>
					<Icon name='logout' />
					<p className='text-14 ml-4 text-career-gray-200'>Sign out</p>
				</div>
			</div>
		</div>
	);
};

export default DashboardSideBar;
