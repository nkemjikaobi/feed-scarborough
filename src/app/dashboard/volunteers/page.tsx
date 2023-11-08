'use client';

import EnhancedTable from '@/app/components/atoms/CustomTable';
import { AiFillDelete, AiOutlineMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';

export default function Volunteers() {
	const volunteerColums = [
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
			field: 'email',
			label: 'Email',
			width: 300,
			minWidth: 200,
			sortable: true,
		},
		{
			id: 3,
			fieldStyles: {
				color: '#475467',
			},
			field: 'availability',
			label: 'Availability',
			width: 130,
			minWidth: 100,
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

	const volunteerData = [
		{
			id: 1,
			name: 'Nkemjika Obi',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Marcus Rashford',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Bruno Fernandes',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Andre Onana',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Xabi Alonso',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Marc Cucurella',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Alvaro Morata',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Lionel Messi',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Cristiano Ronaldo',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			name: 'Odumumodu Black',
			email: 'nkemjikaobi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
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
			<h2 className='text-2xl font-bold mb-8'>Volunteers</h2>
			<EnhancedTable
				minWidth={1000}
				loading={false}
				headers={volunteerColums}
				rows={volunteerData}
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
				searchPlaceholder={'Filter inventory by any thing'}
				searchWrapper='!m-[1rem]'
			/>
		</main>
	);
}
