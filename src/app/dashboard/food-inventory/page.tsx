'use client';

import EnhancedTable from '@/app/components/atoms/CustomTable';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

export default function FoodInventory() {
	const inventoryColums = [
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
			field: 'quantity',
			label: 'Quantity',
			width: 300,
			minWidth: 200,
			sortable: true,
		},
		{
			id: 3,
			fieldStyles: {
				color: '#475467',
			},
			field: 'unit',
			label: 'Unit',
			width: 130,
			minWidth: 100,
			sortable: true,
		},
		{
			id: 4,
			fieldStyles: {
				color: '#475467',
			},
			field: 'category',
			label: 'Category',
			width: 30,
			minWidth: 100,
			align: 'center',
			sortable: true,
		},
		{
			id: 5,
			fieldStyles: {
				color: '#475467',
			},
			field: 'expiry',
			label: 'Expiry Date',
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

	const inventoryData = [
		{
			id: 1,
			name: 'Beans',
			quantity: 23,
			unit: 'Aisle 40',
			category: 'Carbs',
			expiry: 'In 2 days',
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
			name: 'Carrot',
			quantity: 32,
			unit: 'Aisle 23',
			category: 'Veggies',
			expiry: 'Tomorrow',
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
			name: 'Halal Chicken',
			quantity: '2 lbs',
			unit: 'Aisle 1',
			category: 'Meat',
			expiry: 'Next Week',
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
			name: 'Ice Cream',
			quantity: '12 plates',
			unit: 'Aisle 4',
			category: 'Yoghurt',
			expiry: 'In 5 days',
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
			name: 'Onions',
			quantity: 2,
			unit: 'Aisle 9',
			category: 'Raw Food',
			expiry: 'In 6 days',
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
			name: 'Cookies',
			quantity: 23,
			unit: 'Aisle 40',
			category: 'Carbs',
			expiry: 'In 2 days',
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
			name: 'Noodles',
			quantity: 32,
			unit: 'Aisle 23',
			category: 'Veggies',
			expiry: 'Tomorrow',
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
			name: 'Bell Pepper',
			quantity: '2 lbs',
			unit: 'Aisle 1',
			category: 'Meat',
			expiry: 'Next Week',
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
			name: 'Spaghetti',
			quantity: '12 plates',
			unit: 'Aisle 4',
			category: 'Yoghurt',
			expiry: 'In 5 days',
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
			name: 'Lettuce',
			quantity: 2,
			unit: 'Aisle 9',
			category: 'Raw Food',
			expiry: 'In 6 days',
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
			<h2 className='text-2xl font-bold mb-8'>Food Inventory</h2>
			<EnhancedTable
				minWidth={1000}
				loading={false}
				headers={inventoryColums}
				rows={inventoryData}
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
