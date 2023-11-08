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
		email: '',
		password: '',
	};

	interface Values {
		email: string;
		password: string;
	}

	const LoginSchema = yup.object().shape({
		email: yup
			.string()
			.email('Invalid email')
			.required(errorMessages.required('Email')),
		password: yup
			.string()
			.required(errorMessages.required('Password'))
			.min(8, errorMessages.minChar(8))
			.minLowercase(1, errorMessages.minLowerCase(1))
			.minUppercase(1, errorMessages.minUpperCase(1))
			.minNumbers(1, errorMessages.minNumber(1))
			.minSymbols(1, errorMessages.minSymbol(1)),
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
				<div>
					<h2 className='text-xl smallLaptop:text-3xl font-bold text-center my-8'>
						Login to manage your Food Bank
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
												container='px-6'
												iconPosition='end'
												inputClassName='placeholder:text-14 placeholder:text-jobanaut-ink-blue-500 mobileBelow:ml-4 border-black'
												name='password'
												placeholder='Enter Password'
												type='password'
											/>
										</div>
									</div>
									<Link
										className=' text-feed-blue flex items-center justify-end'
										href='/auth/forgot-password'
									>
										Forgot Password?
									</Link>
								</div>
								<div className='flex flex-col justify-center items-center mt-[40px]'>
									<CustomButton
										customClass='w-full smallLaptop:!w-[30%] font-medium bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
										handleClick={() => {}}
										size={ButtonProperties.SIZES.big}
										title='GET STARTED'
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
