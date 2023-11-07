'use client';
import useClickOutside from '@/app/hooks/useClickOutside';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const MobileNavigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const node = useClickOutside(() => {
		setIsOpen(false);
	});

	const router = useRouter();

	return (
		<>
			<div
				className={`flex justify-between items-center bg-[#f3f3f3] h-[90px] py-6 px-4 smallLaptop:px-12 ${
					isOpen ? 'shadow-landing-menu' : ''
				}`}
			>
				<div className='flex items-center'>
					<Link className='cursor-pointer' href='/'>
						<Image src='/foodbank-local.svg' alt='' height={100} width={100} />
					</Link>
					<h2 className='ml-4 smallLaptop:text-2xl'>Feed Toronto</h2>
				</div>

				<div
					className='flex p-2 rounded-xl smallLaptop:hidden'
					key={String(isOpen)}
					onClick={() => setIsOpen(true)}
				>
					{isOpen ? (
						<div className='mt-1 mr-4'>
							<AiOutlineClose className='cursor-pointer' />
						</div>
					) : (
						<div className='mt-1 mr-4'>
							<GiHamburgerMenu className='cursor-pointer' />
						</div>
					)}
				</div>
			</div>
			<div
				className={`px-4 pt-4 mt-1 bg-white ${isOpen ? 'openNav' : 'closeNav'}`}
				ref={node}
			>
				{DesktopNavV2.map(data => (
					<Link href={data.route} key={data.id}>
						<div className={`pr-2 mb-6 cursor-pointer `}>{data.name}</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default MobileNavigation;

export const DesktopNavV2 = [
	{
		id: 1,
		name: 'Find a food bank',
		route: '/find-food-bank',
	},
	{
		id: 2,
		name: 'Food Availability',
		route: '/find-food-bank',
	},
	{
		id: 3,
		name: 'Events & Calendars',
		route: '#',
	},
	{
		id: 4,
		name: 'Volunteer today',
		route: '#',
	},
	{
		id: 5,
		name: 'Donate',
		route: '#',
	},
];
