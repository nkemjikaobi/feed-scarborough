'use client';

import EnhancedTable from '@/app/components/atoms/CustomTable';
import { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export default function Events() {
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	const eventColumns = [
		{
			id: 11,
			field: 'id',
			fieldStyles: {
				textTransform: 'capitalize',
				color: '#101828',
				fontWeight: '500',
			},
			label: 'S/N',
			width: 100,
			minWidth: 100,
			sortable: true,
		},
		{
			id: 1,
			field: 'name',
			fieldStyles: {
				textTransform: 'capitalize',
				color: '#101828',
				fontWeight: '500',
			},
			label: 'Name',
			width: 100,
			minWidth: 100,
			sortable: true,
		},
		{
			id: 2,
			fieldStyles: {
				color: '#475467',
			},
			field: 'description',
			label: 'Description',
			width: 300,
			minWidth: 200,
			sortable: true,
		},
		{
			id: 3,
			fieldStyles: {
				color: '#475467',
			},
			field: 'start_time',
			label: 'Start Time',
			width: 130,
			minWidth: 100,
			sortable: true,
		},
		{
			id: 4,
			fieldStyles: {
				color: '#475467',
			},
			field: 'end_time',
			label: 'End time',
			width: 30,
			minWidth: 100,
			align: 'center',
			sortable: true,
		},
		{
			id: 6,
			field: 'actions',
			label: 'Actions',
			width: 30,
			minWidth: 100,
			align: 'center',
			sortable: true,
		},
	];

	const eventData = [
		{
			id: 1,
			name: 'Cooking',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 2,
			name: 'Testing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 3,
			name: 'Restocking',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 4,
			name: 'Daily Standup',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 5,
			name: 'Upskilling',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 6,
			name: 'Team Bonding',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 7,
			name: 'Washing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 8,
			name: 'Boiling',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 9,
			name: 'Gisting',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
		{
			id: 10,
			name: 'Brain Storming',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
				</div>
			),
		},
	];
	return (
		<main className=''>
			<h2 className='text-2xl font-bold mb-8'>Events</h2>
			<EnhancedTable
				minWidth={1000}
				loading={loading}
				headers={eventColumns}
				rows={eventData}
				options={{
					toolbar: true,
					rowsPerPage: [5, 10, 25, 50],
					defaultOrder: 'asc',
				}}
				allHeadersStyles={{
					color: '#475467',
					fontWeight: 500,
				}}
				search={true}
				searchDebounce={true}
				allFieldsStyles={{ fontSize: '13px', letterSpacing: '0.4px' }}
				searchPlaceholder={'Filter events by any thing'}
				searchWrapper='!m-[1rem]'
			/>
		</main>
	);
}
