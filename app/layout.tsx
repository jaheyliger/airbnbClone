import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import Modal from './components/modals/Modal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb Clone',
	description: 'Airbnb Clone'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<ClientOnly>
					<Modal isOpen title='hello'/>
					<Navbar />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
