'use client';

import CustomButton from '@/app/components/atoms/CustomButton/CustomButton';
import CustomModal from '@/app/components/atoms/CustomModal/CustomModal';
import EnhancedTable from '@/app/components/atoms/CustomTable';
import FormikCustomInput from '@/app/components/atoms/FormikCustomInput/FormikCustomInput';
import FormikCustomSelect from '@/app/components/atoms/FormikCustomSelect/FormikCustomSelect';
import {
	ButtonProperties,
	changeDateFormat,
	errorMessages,
} from '@/app/shared/helpers';
import { Form, Formik, FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { v4 as uuidv4 } from 'uuid';
import { QRCodeCanvas } from 'qrcode.react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function FoodInventory() {
	const [loading, setLoading] = useState<boolean>(true);
	const [showInventoryModal, setShowInventoryModal] = useState<boolean>(false);
	const [showUpdateInventoryModal, setShowUpdateInventoryModal] =
		useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
	const [departureDate, setDepartureDate] = useState<Date | undefined>();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();
	const itemName = searchParams.get('item');

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	useEffect(() => {
		if (itemName) {
			autoAddFoodToInventory();
		}

		//eslint-disable-next-line
	}, [itemName]);

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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
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
						className='cursor-pointer text-20 text-feed-blue'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateInventoryModal(true);
						}}
					/>
					<AiFillDelete
						className='text-20 text-red-500 cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
						}}
					/>
				</div>
			),
		},
	];

	const [data, setData] = useState<any>(inventoryData);

	const initialState = {
		name: itemName || '',
		quantity: '',
		unit: '',
		category: '',
		expiry: '',
	};

	const filterPassedTime = (time: any) => {
		const currentDate = new Date();
		const selectedDate = new Date(time);

		return currentDate.getTime() < selectedDate.getTime();
	};

	interface Values {
		name: string;
		quantity: string;
		unit: string;
		category: string;
		expiry: string;
	}

	const FoodInventorySchema = yup.object().shape({
		name: yup.string().required(errorMessages.required('Name')),
		quantity: yup.string().required(errorMessages.required('Quantity')),
		unit: yup.string().required(errorMessages.required('Unit')),
		category: yup.string().required(errorMessages.required('Category')),
		expiry: yup.string(),
	});

	const autoAddFoodToInventory = () => {
		setData([
			{
				id: data.length + 1,
				name: itemName,
				expiry: changeDateFormat(new Date(), 'MMMM Do YYYY, h:mm:ss a'),
				quantity: 1,
				category: 'veggies',
				unit: 'aisle-25',
				actions: (
					<div className='flex items-center space-x-4'>
						<AiFillEdit
							className='cursor-pointer text-20 text-feed-blue'
							onClick={(e: any) => {
								e.stopPropagation();
								setShowUpdateInventoryModal(true);
							}}
						/>
						<AiFillDelete
							className='text-20 text-red-500 cursor-pointer'
							onClick={(e: any) => {
								e.stopPropagation();
								setShowDeleteModal(true);
							}}
						/>
					</div>
				),
			},
			...data,
		]);
		router.push('/dashboard/food-inventory');
		toast.success(`${itemName} has been added to the inventory`);
	};

	const handleSubmit = async (values: Values) => {
		setShowInventoryModal(false);
		console.log(values);
		setData([
			{
				...values,
				id: data.length + 1,
				expiry: changeDateFormat(departureDate, 'MMMM Do YYYY, h:mm:ss a'),
				actions: (
					<div className='flex items-center space-x-4'>
						<AiFillEdit
							className='cursor-pointer text-20 text-feed-blue'
							onClick={(e: any) => {
								e.stopPropagation();
								setShowUpdateInventoryModal(true);
							}}
						/>
						<AiFillDelete
							className='text-20 text-red-500 cursor-pointer'
							onClick={(e: any) => {
								e.stopPropagation();
								setShowDeleteModal(true);
							}}
						/>
					</div>
				),
			},
			...data,
		]);
		toast.success('Inventory Added');
	};

	return (
		<>
			<main className=''>
				<div className='flex justify-between'>
					<h2 className='text-2xl font-bold mb-8'>Food Inventory</h2>
					<CustomButton
						customClass='font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
						handleClick={() => setShowInventoryModal(true)}
						size={ButtonProperties.SIZES.small}
						title='ADD INVENTORY'
						variant={ButtonProperties.VARIANT.secondary.name}
					/>
				</div>
				<EnhancedTable
					minWidth={1000}
					loading={loading}
					headers={inventoryColums}
					rows={data}
					options={{
						toolbar: true,
						rowsPerPage: [5, 10, 25, 50],
						defaultOrder: 'desc',
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
				<div className='mt-16'>
					<h2 className='text-xl mb-6 font-bold underline'>
						Scan Items below for faster addition to records
					</h2>
					<div className='grid grid-cols-2 smallLaptop:grid-cols-4 bigLaptop:grid-cols-6'>
						<div>
							<h4 className='mb-2 font-medium'>Rice</h4>
							<QRCodeCanvas value='/dashboard/food-inventory?item=rice' />
						</div>
						<div>
							<h4 className='mb-2 font-medium'>Noodles</h4>
							<QRCodeCanvas value='/dashboard/food-inventory?item=noodles' />
						</div>
						<div>
							<h4 className='mb-2 font-medium'>Onions</h4>
							<QRCodeCanvas value='/dashboard/food-inventory?item=onions' />
						</div>
						<div>
							<h4 className='mb-2 font-medium'>Yoghurt</h4>
							<QRCodeCanvas value='/dashboard/food-inventory?item=yoghurt' />
						</div>
						<div>
							<h4 className='mb-2 font-medium'>Chicken</h4>
							<QRCodeCanvas value='/dashboard/food-inventory?item=chicken' />
						</div>
					</div>
				</div>
			</main>
			<CustomModal
				callBack={() => {}}
				toggleVisibility={setShowInventoryModal}
				visibility={showInventoryModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<AiOutlineClose
							className='absolute w-8 h-8 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
							name='close'
							onClick={() => {
								setShowInventoryModal(false);
								// setCurrentJob('');
							}}
						/>
						<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
							Add Food to Inventory
						</h2>
					</div>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={handleSubmit}
						validationSchema={FoodInventorySchema}
					>
						{(props: FormikProps<any>) => (
							<Form>
								<div className='relative flex flex-col space-y-6 items-center justify-center'>
									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='tablet:px-6'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 border-black'
												name='name'
												placeholder='Enter the item name'
												type='text'
											/>
										</div>
									</div>

									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='px-6'
												iconPosition='end'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 mobileBelow:ml-4 border-black'
												name='quantity'
												placeholder='Enter quantity'
												type='number'
											/>
										</div>
									</div>
									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomSelect
												className='rounded-md border border-jobanaut-gray-200 '
												name='unit'
												options={[
													{
														text: 'Aisle 23',
														value: 'aisle-23',
													},
													{
														text: 'Aisle 24',
														value: 'aisle-24',
													},
													{
														text: 'Aisle 25',
														value: 'aisle-25',
													},
												]}
												parentContainer='my-1'
												placeholder='Select Unit'
											/>
										</div>
									</div>

									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomSelect
												className='rounded-md border'
												name='category'
												options={[
													{
														text: 'Veggies',
														value: 'veggies',
													},
													{
														text: 'Beef',
														value: 'beef',
													},
													{
														text: 'Yoghurt',
														value: 'yoghurt',
													},
												]}
												parentContainer='my-1'
												placeholder='Select Category'
											/>
										</div>
									</div>
									<div className='w-full'>
										<div className='mb-4'>
											<DatePicker
												customInput={
													<FormikCustomInput
														className='border rounded !h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]'
														icon='calendar2'
														iconPosition='start'
														inputClassName='placeholder:text-xs ml-4 pl-0'
														name='expiry'
														type='text'
													/>
												}
												minDate={new Date()}
												name='expiry'
												onChange={(date: Date) => setDepartureDate(date)}
												placeholderText={'Select expiry Date of item'}
												selected={departureDate}
												showTimeSelect
												filterTime={filterPassedTime}
												dateFormat='MMMM d, yyyy h:mm aa'
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='Add Item'
										type='submit'
										variant={ButtonProperties.VARIANT.secondary.name}
									/>
								</div>
							</Form>
						)}
					</Formik>
					{/* </div> */}
				</div>
			</CustomModal>
			<CustomModal
				callBack={() => {}}
				toggleVisibility={setShowUpdateInventoryModal}
				visibility={showUpdateInventoryModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<AiOutlineClose
							className='absolute w-8 h-8 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
							name='close'
							onClick={() => {
								setShowUpdateInventoryModal(false);
								// setCurrentJob('');
							}}
						/>
						<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
							Update Food Item
						</h2>
					</div>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={handleSubmit}
						validationSchema={FoodInventorySchema}
					>
						{(props: FormikProps<any>) => (
							<Form>
								<div className='relative flex flex-col space-y-6 items-center justify-center'>
									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='tablet:px-6'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 border-black'
												name='name'
												placeholder='Enter Your Email Address'
												type='email'
											/>
										</div>
									</div>

									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='px-6'
												iconPosition='end'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 mobileBelow:ml-4 border-black'
												name='quantity'
												placeholder='Enter quantity'
												type='number'
											/>
										</div>
									</div>
									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomSelect
												className='rounded-md border border-jobanaut-gray-200 '
												name='unit'
												options={[
													{
														text: 'Aisle 23',
														value: 'aisle-23',
													},
													{
														text: 'Aisle 24',
														value: 'aisle-24',
													},
													{
														text: 'Aisle 25',
														value: 'aisle-25',
													},
												]}
												parentContainer='my-1'
												placeholder='Select Unit'
											/>
										</div>
									</div>

									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomSelect
												className='rounded-md border'
												name='category'
												options={[
													{
														text: 'Veggies',
														value: 'veggies',
													},
													{
														text: 'Beef',
														value: 'beef',
													},
													{
														text: 'Yoghurt',
														value: 'yoghurt',
													},
												]}
												parentContainer='my-1'
												placeholder='Select Category'
											/>
										</div>
									</div>
									<div className='w-full'>
										<div className='mb-4'>
											<DatePicker
												customInput={
													<FormikCustomInput
														className='border rounded !h-[2.813rem] mr-4 mb-4 w-full border-[#A6B7C0]'
														icon='calendar2'
														iconPosition='start'
														inputClassName='placeholder:text-xs ml-4 pl-0'
														name='expiry'
														type='text'
													/>
												}
												dateFormat='yyyy-MM-dd'
												minDate={new Date()}
												name='expiry'
												onChange={(date: Date) => setDepartureDate(date)}
												placeholderText={'Select expiry Date of item'}
												selected={departureDate}
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='Update Item'
										type='submit'
										variant={ButtonProperties.VARIANT.secondary.name}
									/>
								</div>
							</Form>
						)}
					</Formik>
					{/* </div> */}
				</div>
			</CustomModal>
			<CustomModal
				callBack={() => {}}
				toggleVisibility={setShowDeleteModal}
				visibility={showDeleteModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<AiOutlineClose
							className='absolute w-8 h-8 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
							name='close'
							onClick={() => {
								setShowDeleteModal(false);
								// setCurrentJob('');
							}}
						/>
						<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
							Delete Food to Inventory
						</h2>
					</div>
					<h4>Are you sure you want to delete this inventory</h4>
					<div className='flex space-x-4 justify-center items-center mt-[40px]'>
						<CustomButton
							customClass=' font-medium  !bg-white !text-[#1686C1] !border-[#1686C1]'
							handleClick={() => setShowDeleteModal(false)}
							size={ButtonProperties.SIZES.small}
							title='Cancel'
							type='submit'
							variant={ButtonProperties.VARIANT.secondary.name}
						/>
						<CustomButton
							customClass=' font-medium !bg-red-500 !text-white !border-red-500'
							handleClick={() => {
								setShowDeleteModal(false);
								toast.success('Inventory deleted');
							}}
							size={ButtonProperties.SIZES.small}
							title='Delete'
							type='submit'
							variant={ButtonProperties.VARIANT.secondary.name}
						/>
					</div>
					{/* </div> */}
				</div>
			</CustomModal>
		</>
	);
}
