'use client';
import Link from 'next/link';
import MobileNavigation from '../components/NavBar/MobileNavigation';
import { ButtonProperties } from '../shared/helpers';
import CustomButton from '../components/atoms/CustomButton/CustomButton';
import { useEffect, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import { FaWheelchair } from 'react-icons/fa';
import { range } from 'lodash';
import DesktopNavigation from '../components/NavBar/DesktopNavigation';

export default function FindFoodBank() {
	const [activeFoodBank, setActiveFoodBank] = useState<number>(-1);
	const [searchText, setSearchText] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [filters, setFilters] = useState({
		nearby: false,
		nearby2: false,
		accessibility: false,
		hampers: false,
		singleItems: false,
	});
	const [filteredData, setFilteredData] = useState<any>();

	const data = [
		{
			id: 1,
			name: 'Feed Scarborough',
			distance: '3km',
			address: '155, Toronto Drive, ON',
			availableDays: [
				'Monday- 9:00am - 3:00pm',
				'Tuesday- 9:00am - 3:00pm',
				'Wednesday- 9:00am - 3:00pm',
				,
				'Thursday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: true,
			packageType: 'hampers',
		},
		{
			id: 2,
			name: 'Daily Bread',
			distance: '4km',
			address: '22, Cedar Drive, ON',
			availableDays: [
				'Monday- 9:00am - 3:00pm',
				'Tuesday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: false,
			packageType: 'single items',
		},
		{
			id: 3,
			name: 'Mabel Pantry',
			distance: '23km',
			address: '43, Mccowan Avenue, ON',
			availableDays: [
				'Wednesday- 9:00am - 3:00pm',
				,
				'Thursday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: true,
			packageType: 'single items',
		},
		{
			id: 4,
			name: 'Bloor West Food Bank',
			distance: '34km',
			address: '11, Progress Trail, ON',
			availableDays: [, 'Friday- 9:00am - 3:00pm'],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: false,
			packageType: 'hampers',
		},
		{
			id: 5,
			name: 'Syme Family Food Bank',
			distance: '76km',
			address: '1, Nutwood Way, ON',
			availableDays: [
				,
				'Thursday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: true,
			packageType: 'single items',
		},
		{
			id: 6,
			name: 'Mount Denis Community Food Bank',
			distance: '3km',
			address: '155, Lawrence Avenue Drive, ON',
			availableDays: [
				'Monday- 9:00am - 3:00pm',
				'Tuesday- 9:00am - 3:00pm',
				'Wednesday- 9:00am - 3:00pm',
				,
				'Thursday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: true,
			packageType: 'hampers',
		},
		{
			id: 7,
			name: 'Scott Mission',
			distance: '4km',
			address: '22, Milner Avenue, ON',
			availableDays: [
				'Monday- 9:00am - 3:00pm',
				'Tuesday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: false,
			packageType: 'single items',
		},
		{
			id: 8,
			name: 'The Lighthouse',
			distance: '23km',
			address: '43, Rosebank Drive, ON',
			availableDays: [
				'Wednesday- 9:00am - 3:00pm',
				,
				'Thursday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: true,
			packageType: 'single items',
		},
		{
			id: 9,
			name: 'Avenue Road Food Bank',
			distance: '34km',
			address: '11, Markham, ON',
			availableDays: [, 'Friday- 9:00am - 3:00pm'],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: false,
			packageType: 'hampers',
		},
		{
			id: 10,
			name: 'Fort York Food Bank',
			distance: '76km',
			address: '1, Shephard Avenue East, ON',
			availableDays: [
				,
				'Thursday- 9:00am - 3:00pm',
				,
				'Friday- 9:00am - 3:00pm',
			],
			foodItems: ['chicken', 'juice', 'onions', 'yoghurt'],
			isAccesible: true,
			packageType: 'single items',
		},
	];

	const node = useClickOutside(() => setActiveFoodBank(-1));

	const handleClick = (id: number) => {
		if (activeFoodBank !== id) {
			setActiveFoodBank(id);
		} else {
			setActiveFoodBank(-1);
		}
	};

	const handleFilterChange = (filter: any) => {
		setFilters((prevFilters: any) => ({
			...prevFilters,
			[filter]: !prevFilters[filter],
		}));
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	useEffect(() => {
		// Perform the search and update filteredData based on searchText, accessibility, hampers, and singleItems
		const lowercaseSearchText = searchText.toLowerCase();
		const filtered = data.filter(location => {
			return (
				(location.name.toLowerCase().includes(lowercaseSearchText) ||
					location.distance.toLowerCase().includes(lowercaseSearchText) ||
					location.address.toLowerCase().includes(lowercaseSearchText) ||
					location.isAccesible.toString().includes(lowercaseSearchText) ||
					location.foodItems.some(item =>
						item.toLowerCase().includes(lowercaseSearchText)
					)) &&
				(!filters.accessibility || location.isAccesible) &&
				(!filters.hampers || location.packageType === 'hampers') &&
				(!filters.singleItems || location.packageType === 'single items')
			);
		});
		setFilteredData(filtered);

		//eslint-disable-next-line
	}, [searchText, filters]);

	return (
		<main className=''>
			<div className='hidden smallLaptop:block'>
				<DesktopNavigation />
			</div>
			<div className='block smallLaptop:hidden'>
				<MobileNavigation />
			</div>
			<div className='container mx-auto p-4 mt-12'>
				<div className='grid grid-cols-12'>
					<div className='relative flex items-center col-span-9'>
						<input
							type='text'
							value={searchText}
							onChange={e => setSearchText(e.target.value)}
							className='w-[90%] smallLaptop:w-full px-4 py-2 border rounded-lg smallLaptop:pl-10 smallLaptop:h-16 focus:outline-none focus:border-[#1686C1]'
							placeholder='Enter your address or postal code'
						/>
					</div>

					<button className='bg-[#1686C1] text-white col-span-3 smallLaptop:ml-4 smallLaptop:px-4 smallLaptop:py-2 smallLaptop:text-18 rounded-lg hover:bg-blue-600 smallLaptop:h-16 smallLaptop:w-48'>
						Search
					</button>
				</div>

				<div className='mt-4 space-y-4'>
					<p className='text-sm text-gray-600 mb-4'>
						Please enter your address in the search bar above to find your
						nearest location.
					</p>
					<Link href='#' className='underline'>
						Use my location
					</Link>
				</div>

				<div className='mt-4'>
					<p className='text-lg font-semibold'>Filter by:</p>
					<div className='mt-2 space-y-2'>
						<label className='flex items-center space-x-2'>
							<input
								type='checkbox'
								className='text-[#1686C1]'
								checked={filters.accessibility}
								onChange={() => handleFilterChange('accessibility')}
							/>
							<span>Wheel chair accessible</span>
						</label>
						<label className='flex items-center space-x-2'>
							<input
								type='checkbox'
								className='text-[#1686C1]'
								checked={filters.hampers}
								onChange={() => handleFilterChange('hampers')}
							/>
							<span>Hampers</span>
						</label>
						<label className='flex items-center space-x-2'>
							<input
								type='checkbox'
								className='text-[#1686C1]'
								checked={filters.singleItems}
								onChange={() => handleFilterChange('singleItems')}
							/>
							<span>Single Items/ Stores</span>
						</label>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
					{loading
						? range(10).map((_, index) => (
								<div
									className='bg-gray-300 animate-pulse shadow rounded-lg p-4'
									ref={node}
									key={index}
								>
									<div className='flex justify-between items-center cursor-pointer my-3'>
										<div>
											<div className='flex items-center'>
												<p className='text-xl font-bold w-48 h-8 bg-gray-200 animate-pulse rounded-sm' />
												<span className='mx-4 w-8 rounded-sm h-4 animate-pulse bg-gray-200' />
											</div>
											<p className='text-gray-200 w-32 mt-2 h-8 bg-gray-200 animate-pulse rounded-sm' />
										</div>
										<div className='flex items-center'>
											<div className='w-24 rounded-sm h-8 animate-pulse bg-gray-200' />
											<div className='w-24 ml-6 rounded-sm h-8 animate-pulse bg-gray-200' />
										</div>
									</div>
								</div>
						  ))
						: filteredData?.map((location: any) => (
								<div
									key={location.id}
									className='bg-white shadow rounded-lg p-4'
									ref={node}
									onClick={() => handleClick(location.id)}
								>
									<div className='flex justify-between items-center cursor-pointer my-3'>
										<div>
											<div className='flex items-center'>
												<p className='text-xl font-bold'>{location.name} - </p>
												<span className='mx-4'>{location.distance}</span>
												{location.isAccesible && <FaWheelchair />}
												<span
													className={`capitalize ml-2 rounded-lg px-4 py-1 ${
														location.packageType === 'hampers'
															? 'bg-blue-200 '
															: 'bg-blue-500 text-white'
													}`}
												>
													{location.packageType}
												</span>
											</div>
											<p className='text-gray-500'>{location.address}</p>
										</div>
										<div className='hidden smallLaptop:block'>
											<div className='flex items-center '>
												<CustomButton
													customClass='text-14 ml-6 font-semibold bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
													handleClick={() => {}}
													size={ButtonProperties.SIZES.small}
													title='View Details'
													variant={ButtonProperties.VARIANT.secondary.name}
												/>
												<CustomButton
													customClass='text-14 ml-6 font-semibold !border-[#1686C1] !bg-white !text-[#1686C1]'
													handleClick={() => {}}
													size={ButtonProperties.SIZES.small}
													title='Take me there'
													variant={ButtonProperties.VARIANT.secondary.name}
												/>
											</div>
										</div>
									</div>
									{activeFoodBank === location.id && (
										<div>
											<div className='flex items-center justify-between'>
												<div>
													<h2 className='font-semibold underline'>
														Days Available
													</h2>
													<ul className='list-disc p-4'>
														{location.availableDays.map(
															(day: any, index: any) => (
																<li key={index}>{day}</li>
															)
														)}
													</ul>
												</div>
												<div className='mr-[10%]'>
													<h2 className='font-semibold underline'>
														Food Items Available
													</h2>
													<ul className='list-disc p-4'>
														{location.foodItems.map((food: any, index: any) => (
															<li className='capitalize' key={index}>
																{food}
															</li>
														))}
													</ul>
												</div>
											</div>
											<h2 className='underline font-semibold mt-3 mb-2'>
												Contact
											</h2>
											<span>647-928-8763</span>
										</div>
									)}
								</div>
						  ))}
				</div>
			</div>
		</main>
	);
}
