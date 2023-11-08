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
yupPassword(yup); // extend yup

export default function Login() {
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();

	const initialState = {
		name: '',
		email: '',
		phone: '',
		availability: '',
	};

	interface Values {
		name: string;
		email: string;
		phone: string;
		availability: string;
	}

	const LoginSchema = yup.object().shape({
		name: yup.string().required(errorMessages.required('Name')),
		email: yup.string().required(errorMessages.required('Email')),
		phone: yup.string().required(errorMessages.required('Phone')),
		availability: yup.string().required(errorMessages.required('Availability')),
	});

	const signInUser = async (values: Values) => {
		setLoading(true);
		router.push('/dashboard');
	};

	return (
		<main className=''>
			<div className='hidden smallLaptop:block'>
				<DesktopNavigation />
			</div>
			<div className='block smallLaptop:hidden'>
				<MobileNavigation />
			</div>
			<div className='container mx-auto p-4 mt-12'>
				<h1 className='text-2xl '>Volunteer Opportunities</h1>
				<p className='mb-12 text-gray-400 mt-2'>
					Volunteer to help distribute food at the following locations:
				</p>
				<ul className='my-6'>
					<li>
						<ul>
							<li>Bathurst Finch Community Food Space</li>
							<li>
								580 Finch Avenue West (located at the Herb Carnegie Arena)
							</li>
							<li>
								Volunteers are needed to help distribute food on Tuesdays,
								Wednesdays and Thursdays
							</li>
						</ul>
					</li>
				</ul>
				<ul className='my-6'>
					<li>
						<ul>
							<li>Lawrence Heights Community Food Space</li>
							<li>
								5 Replin Road (located at the Lawrence Heights Community Centre)
							</li>
							<li>
								Volunteers are needed to help distribute food on Tuesdays and
								Fridays
							</li>
						</ul>
					</li>
				</ul>
				<ul className='my-6'>
					<li>
						<ul>
							<li>Albion Library Community Food Space</li>
							<li>1515 Albion Road (located close to the Albion Library)</li>
							<li>
								Volunteers are needed to help distribute food on Wednesdays and
								Thursdays
							</li>
						</ul>
					</li>
				</ul>

				<div>
					<h2 className='text-lg smallLaptop:text-3xl font-bold text-center my-8'>
						Register Today
					</h2>
					<Formik
						enableReinitialize
						initialValues={initialState}
						onSubmit={signInUser}
						validationSchema={LoginSchema}
					>
						{(props: FormikProps<Values>) => (
							<Form>
								<div className='relative flex flex-col space-y-6 items-center justify-center'>
									<div className='w-full smallLaptop:w-[30%]'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='tablet:px-6'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 border-black'
												name='name'
												placeholder='Enter Your Name'
												type='text'
											/>
										</div>
									</div>
									<div className='w-full smallLaptop:w-[30%]'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='tablet:px-6'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 border-black'
												name='email'
												placeholder='Enter Your Email Address'
												type='email'
											/>
										</div>
									</div>
									<div className='w-full smallLaptop:w-[30%]'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='tablet:px-6'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 border-black'
												name='phone'
												placeholder='Enter Your Phone Number'
												type='text'
											/>
										</div>
									</div>
									<div className='w-full smallLaptop:w-[30%]'>
										<div className='mb-4'>
											<FormikCustomInput
												className='border border-jobanaut-gray-200 rounded-[6px]'
												container='tablet:px-6'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 border-black'
												name='availability'
												placeholder='Enter Your Availablity (comma separated)'
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
										title='REGISTER'
										isSubmitting={loading}
										isDisabled={loading}
										type='submit'
										variant={ButtonProperties.VARIANT.secondary.name}
									/>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</main>
	);
}
