'use client';
import Image from 'next/image';
import MobileNavigation from './components/NavBar/MobileNavigation';
import CustomButton from './components/atoms/CustomButton/CustomButton';
import { ButtonProperties } from './shared/helpers';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DesktopNavigation from './components/NavBar/DesktopNavigation';

export default function Home() {
	const router = useRouter();
	return (
		<main className=''>
			<div className='hidden smallLaptop:block'>
				<DesktopNavigation />
			</div>
			<div className='block smallLaptop:hidden'>
				<MobileNavigation />
			</div>
			<div className='relative'>
				<div className='hidden smallLaptop:block'>
					<div className='h-screen w-screen relative'>
						<Image src='/foodbank-hero.jpg' fill alt='' />
						<div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
					</div>
				</div>
				<div className='block smallLaptop:hidden'>
					<div className='w-screen h-[450px] relative'>
						<Image src='/foodbank-hero.jpg' alt='' fill />
					</div>
				</div>
				<div className='absolute top-[50%] right-[10%] -translate-x-[50%] -translate-y-[50%] text-white hidden smallLaptop:block'>
					<h2 className='text-8xl'>Find a food bank</h2>
					<p className='text-lg mt-4 mb-6'>
						You can find your nearest food bank by searching with your postal
						code or address.
					</p>
					<div className='hidden smallLaptop:block'>
						<Link href='/find-food-bank'>
							<CustomButton
								customClass='text-[18px] !w-[80%] font-bold bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1] !h-[70px] !w-[500px]'
								handleClick={() => router.push('/find-food-bank')}
								size={ButtonProperties.SIZES.big}
								title='GET STARTED'
								variant={ButtonProperties.VARIANT.secondary.name}
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className='mt-8 flex items-center justify-center smallLaptop:hidden'>
				<Link href='/find-food-bank'>
					<CustomButton
						customClass='text-12 !w-[80%] font-bold bg-citiBlue-400 !bg-[#1686C1] !text-white !border-[#1686C1]'
						handleClick={() => router.push('/find-food-bank')}
						size={ButtonProperties.SIZES.big}
						title='GET STARTED'
						variant={ButtonProperties.VARIANT.secondary.name}
					/>
				</Link>
			</div>
		</main>
	);
}
