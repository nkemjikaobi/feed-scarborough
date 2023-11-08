import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				{' '}
				<NextTopLoader color='#1686C1' />
				<ToastContainer
					autoClose={5000}
					closeOnClick
					draggable
					hideProgressBar={false}
					newestOnTop={false}
					pauseOnFocusLoss
					pauseOnHover
					position='top-right'
					rtl={false}
					theme='dark'
				/>
				{children}
			</body>
		</html>
	);
}
