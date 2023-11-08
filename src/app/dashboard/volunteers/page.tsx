'use client';

import CustomButton from '@/app/components/atoms/CustomButton/CustomButton';
import CustomModal from '@/app/components/atoms/CustomModal/CustomModal';
import EnhancedTable from '@/app/components/atoms/CustomTable';
import FormikCustomInput from '@/app/components/atoms/FormikCustomInput/FormikCustomInput';
import { ButtonProperties, errorMessages } from '@/app/shared/helpers';
import { Form, Formik, FormikProps } from 'formik';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Volunteers() {
	const [loading, setLoading] = useState<boolean>(true);
	const [showVolunteersModal, setShowVolunteersModal] =
		useState<boolean>(false);
	const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
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
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Marcus Rashford',
			email: 'marcus@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Bruno Fernandes',
			email: 'bruno@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Andre Onana',
			email: 'andre@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Xabi Alonso',
			email: 'xabi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Marc Cucurella',
			email: 'marc@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Alvaro Morata',
			email: 'morata@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Lionel Messi',
			email: 'messi@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Cristiano Ronaldo',
			email: 'ronaldo@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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
			name: 'Odumumodu Black',
			email: 'black@gmail.com',
			availability: 'Mon-Fri (9am-3pm)',
			actions: (
				<div className='flex items-center space-x-4'>
					<AiOutlineMail
						className='text-20 text-feed-bluen cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
						}}
					/>
					<IoMdCall
						className='text-20 text-feed-blue cursor-pointer'
						onClick={(e: any) => {
							e.stopPropagation();
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

	const initialState = {
		name: '',
		email: '',
		availability: '',
	};

	interface Values {
		name: string;
		email: string;
		availability: string;
	}

	const VolunteersSchema = yup.object().shape({
		name: yup.string().required(errorMessages.required('Name')),
		email: yup
			.string()
			.email('Invalid Email')
			.required(errorMessages.required('Email')),
		availability: yup.string(),
	});

	const handleSubmit = async (values: Values) => {
		setShowVolunteersModal(false);
		toast.success('Volunteer Added');
	};

	return (
		<>
			<main className=''>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl font-bold mb-8'>Volunteers</h2>
					<CustomButton
						customClass='font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
						handleClick={() => setShowVolunteersModal(true)}
						size={ButtonProperties.SIZES.small}
						title='ADD VOLUNTEER'
						variant={ButtonProperties.VARIANT.secondary.name}
					/>
				</div>
				<EnhancedTable
					minWidth={1000}
					loading={loading}
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
			<CustomModal
				callBack={() => {}}
				toggleVisibility={setShowVolunteersModal}
				visibility={showVolunteersModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<AiOutlineClose
							className='absolute w-8 h-8 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
							name='close'
							onClick={() => {
								setShowVolunteersModal(false);
								// setCurrentJob('');
							}}
						/>
						<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
							Add Volunteer
						</h2>
					</div>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={handleSubmit}
						validationSchema={VolunteersSchema}
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
												placeholder='Enter the name of the volunteer'
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
												name='email'
												placeholder='Enter email of the volunteer'
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
												name='availability'
												placeholder='Enter days available'
												type='text'
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='Add Volunteer'
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
							Delete Volunteer
						</h2>
					</div>
					<h4>Are you sure you want to delete this volunteer</h4>
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
								toast.success('Volunteer deleted');
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
