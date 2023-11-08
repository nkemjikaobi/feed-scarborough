import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { Toaster } from 'react-hot-toast';


const roboto = Roboto({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Feed Toronto',
	description: 'Feed Toronto',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				{' '}
				<NextTopLoader color='#1686C1' />
				<Toaster
					toastOptions={{
						duration: 5000,
						style: {
							marginTop: '80px',
							borderRadius: '6px',
							fontSize: '14px',
							height: '50px',
						},
						error: {
							style: {
								background: '#FFE4E4',
								color: '#B61E1E',
							},
						},
						success: {
							style: {
								background: '#E4FFE7',
								color: '#1EB62D',
							},
						},
					}}
					position='top-right'
				/>
				{children}
			</body>
		</html>
	);
}
