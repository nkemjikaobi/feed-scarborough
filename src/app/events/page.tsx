'use client';
import MobileNavigation from '../components/NavBar/MobileNavigation';
import DesktopNavigation from '../components/NavBar/DesktopNavigation';
import Link from 'next/link';
import CustomButton from '../components/atoms/CustomButton/CustomButton';
import { ButtonProperties } from '../shared/helpers';
import Image from 'next/image';

export default function Events() {
	const data = [
		{
			id: 1,
			name: 'Cooking',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 2,
			name: 'Testing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 3,
			name: 'Restocking',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 4,
			name: 'Daily Standup',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 5,
			name: 'Upskilling',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 6,
			name: 'Team Bonding',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 7,
			name: 'Washing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 8,
			name: 'Boiling',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 9,
			name: 'Gisting',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
		{
			id: 10,
			name: 'Brain Storming',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			location: '140, West Borough Drive, Toronto',
			link: 'https://zoom.us/278gcdhsgcy7wqet8tcde',
		},
	];

	return (
		<main className=''>
			<div className='hidden smallLaptop:block'>
				<DesktopNavigation />
			</div>
			<div className='block smallLaptop:hidden'>
				<MobileNavigation />
			</div>
			<div className='container mx-auto p-4 mt-12'>
				<h1 className='text-2xl '>Events</h1>
				<p className='mb-12 text-gray-400 mt-2'>Upcoming events</p>

				<div className='grid grid-cols-1 smallLaptp:grid-cols-2 bigLaptop:grid-cols-3 gap-4 mt-4'>
					{data?.map((location: any) => (
						<div key={location.id} className='bg-white shadow rounded-lg p-4'>
							<div className='flex justify-between items-center cursor-pointer my-3'>
								<div>
									<div className='flex flex-col space-y-6'>
										<p className='text-xl font-bold'>{location.name} </p>
										<span className=''>{location.description}</span>
										<span>
											{location.start_time} - {location.end_time}
										</span>
										<Link href={location.link}>
											<CustomButton
												customClass='text-[18px] font-bold bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
												handleClick={() => {}}
												size={ButtonProperties.SIZES.small}
												title='JOIN'
												variant={ButtonProperties.VARIANT.secondary.name}
											/>
										</Link>
									</div>
									<p className='text-gray-500'>{location.address}</p>
								</div>
								<div className='hidden smallLaptop:block'>
									<Link className='cursor-pointer' href='/'>
										<Image
											src='/foodbank-local.svg'
											alt=''
											height={100}
											width={100}
										/>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
