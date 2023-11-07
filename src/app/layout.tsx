import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Feed Toronto',
  description: 'Feed Toronto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={inter.className}>
				{' '}
				<NextTopLoader color='#1686C1' />
				{children}
			</body>
		</html>
	);
}
