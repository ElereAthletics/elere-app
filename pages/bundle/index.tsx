import { Footer, Gender, Navbar, Notice } from '@components/molecules'
import Head from 'next/head'

const BundleGender = () => {
	return (
		<>
			<Head>
				<title>Elere | Bundle</title>
			</Head>
			<Notice />
			<Navbar />
			<Gender />
			<Footer />
		</>
	)
}

export default BundleGender
