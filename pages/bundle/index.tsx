import { Footer, Gender, Navbar } from '@components/molecules'
import Head from 'next/head'

const BundleGender = () => {
	return (
		<>
			<Head>
				<title>Elere | Bundle</title>
			</Head>
			<Navbar />
			<Gender />
			<Footer />
		</>
	)
}

export default BundleGender
