'use client';

import CustomButton from '@/app/components/atoms/CustomButton/CustomButton';
import CustomModal from '@/app/components/atoms/CustomModal/CustomModal';
import EnhancedTable from '@/app/components/atoms/CustomTable';
import FormikCustomInput from '@/app/components/atoms/FormikCustomInput/FormikCustomInput';
import { ButtonProperties, errorMessages } from '@/app/shared/helpers';
import { Form, Formik, FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete, AiFillEdit, AiOutlineClose } from 'react-icons/ai';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Events() {
	const [loading, setLoading] = useState<boolean>(true);
	const [showEventsModal, setShowEventsModal] = useState<boolean>(false);
	const [showUpdateEventsModal, setShowUpdateEventsModal] =
		useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
	const [startTime, setStartTime] = useState<Date | undefined>();
	const [endTime, setEndTime] = useState<Date | undefined>();

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
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Testing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Restocking',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Daily Standup',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Upskilling',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Team Bonding',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Washing',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Boiling',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Gisting',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
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
			name: 'Brain Storming',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, totam.',
			start_time: 'Monday 24th, 2023 - 12:30pm EST',
			end_time: 'Monday 24th, 2023 - 2:30pm EST',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiFillEdit
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowUpdateEventsModal(true);
						}}
					/>
					<AiFillDelete
						className='cursor-pointer text-20 text-red-500'
						onClick={(e: any) => {
							e.stopPropagation();
							setShowDeleteModal(true);
						}}
					/>
				</div>
			),
		},
	];

	const initialState = {
		name: '',
		description: '',
		start_time: '',
		end_time: '',
	};

	interface Values {
		name: string;
		description: string;
		start_time: string;
		end_time: string;
	}

	const EventsSchema = yup.object().shape({
		name: yup.string().required(errorMessages.required('Name')),
		description: yup.string().required(errorMessages.required('Description')),
		start_time: yup.string(),
		end_time: yup.string(),
	});

	const handleSubmit = async (values: Values) => {
		setShowEventsModal(false);
		toast.success('Event Added');
	};

	return (
		<>
			<main className=''>
				<div className='flex justify-between'>
					<h2 className='text-2xl font-bold mb-8'>Events</h2>
					<CustomButton
						customClass='font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
						handleClick={() => setShowEventsModal(true)}
						size={ButtonProperties.SIZES.small}
						title='ADD EVENT'
						variant={ButtonProperties.VARIANT.secondary.name}
					/>
				</div>
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
			<CustomModal
				callBack={() => {}}
				toggleVisibility={setShowEventsModal}
				visibility={showEventsModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<AiOutlineClose
							className='absolute w-8 h-8 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
							name='close'
							onClick={() => {
								setShowEventsModal(false);
								// setCurrentJob('');
							}}
						/>
						<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
							Add Event
						</h2>
					</div>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={handleSubmit}
						validationSchema={EventsSchema}
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
												placeholder='Enter the name of the event'
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
												name='description'
												placeholder='Enter description'
												type='text'
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
												name='start_time'
												onChange={(date: Date) => setStartTime(date)}
												placeholderText={'Select start date of event'}
												selected={startTime}
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
												name='end_time'
												onChange={(date: Date) => setEndTime(date)}
												placeholderText={'Select end date of event'}
												selected={endTime}
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='Add Event'
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
				toggleVisibility={setShowUpdateEventsModal}
				visibility={showUpdateEventsModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<AiOutlineClose
							className='absolute w-8 h-8 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
							name='close'
							onClick={() => {
								setShowUpdateEventsModal(false);
								// setCurrentJob('');
							}}
						/>
						<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
							Update Event
						</h2>
					</div>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={handleSubmit}
						validationSchema={EventsSchema}
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
												placeholder='Enter the event name'
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
												name='description'
												placeholder='Enter description'
												type='text'
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
												name='start_time'
												onChange={(date: Date) => setStartTime(date)}
												placeholderText={'Select start date of event'}
												selected={startTime}
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
												name='end_time'
												onChange={(date: Date) => setEndTime(date)}
												placeholderText={'Select end date of event'}
												selected={endTime}
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='Update Event'
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
							Delete Event
						</h2>
					</div>
					<h4>Are you sure you want to delete this event</h4>
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
								toast.success('Event deleted');
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
