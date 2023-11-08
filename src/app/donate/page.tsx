'use client';
import MobileNavigation from '../components/NavBar/MobileNavigation';
import DesktopNavigation from '../components/NavBar/DesktopNavigation';
import { Form, Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import yupPassword from 'yup-password';
import { ButtonProperties, errorMessages } from '../shared/helpers';
import FormikCustomInput from '../components/atoms/FormikCustomInput/FormikCustomInput';
import Link from 'next/link';
import CustomButton from '../components/atoms/CustomButton/CustomButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomModal from '../components/atoms/CustomModal/CustomModal';
import { AiOutlineClose } from 'react-icons/ai';
import { RiSecurePaymentFill } from 'react-icons/ri';
import toast from 'react-hot-toast';
yupPassword(yup); // extend yup

export default function Donate() {
	const [loading, setLoading] = useState<boolean>(false);
	const [showInventoryModal, setShowInventoryModal] = useState<boolean>(true);
	const router = useRouter();

	const initialState = {
		amount: '',
	};

	interface Values {
		amount: string;
	}

	const donateHandler = async (values: Values) => {
		toast.success("Thank you for your donation")
		router.push('/find-food-bank');
	};
	

	return (
		<>
			<main className=''>
				<div className='hidden smallLaptop:block'>
					<DesktopNavigation />
				</div>
				<div className='block smallLaptop:hidden'>
					<MobileNavigation />
				</div>
				<div className='container mx-auto p-4 mt-12'>
					<h1 className='text-2xl '>Donate</h1>
					<p className='mb-12 text-gray-400 mt-2'>You will make a difference</p>
				</div>
			</main>
			<CustomModal
				callBack={() => {}}
				toggleVisibility={setShowInventoryModal}
				visibility={showInventoryModal}
			>
				<div className='bg-[#F8F8F8] text-black w-full tablet:w-[475px] rounded-[12px] p-4 relative smallLaptop:h-auto overflow-y-scroll hide-scrollbar'>
					<div className='mb-6'>
						<Link href='/find-food-bank'>
							<AiOutlineClose
								className='absolute w-4 h-4 smallLaptop:w-12 smallLaptop:h-8 top-[22px] right-[20px] cursor-pointer'
								name='close'
								onClick={() => {
									// setShowInventoryModal(false);
									// setCurrentJob('');
								}}
							/>
						</Link>
						<div className='flex items-center space-x-3'>
							<RiSecurePaymentFill className='mr-3 text-18' />
							<h2 className='font-medium text-[22px] text-left text-jobanaut-black-300 pb-1'>
								Secure Donation
							</h2>
						</div>
						<p className='mb-12 text-gray-400 mt-2'>
							You will make a difference
						</p>
					</div>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={donateHandler}
						validationSchema={null}
					>
						{(props: FormikProps<any>) => (
							<Form>
								<div className='relative flex flex-col space-y-6 items-center justify-center'>
									<div className='w-full'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='px-6'
												iconPosition='end'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 mobileBelow:ml-4 border-black'
												name='amount'
												placeholder='Enter amount'
												type='number'
											/>
										</div>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='Donate'
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
		</>
	);
}
