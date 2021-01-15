import { Container } from '@components/atoms'
import { Footer, Gender, Navbar, Notice } from '@components/molecules'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Bundle = () => {
	const router = useRouter()
	const { gender } = router.query

	return (
		<>
			<Head>
				<title>Elere | Bundle</title>
			</Head>
			<Notice />
			<Navbar />
			{(gender === 'male' || gender === 'female') && (
				<div>
					<Container>
						<h1>Activity Bundle</h1>
						{gender === 'male' && <div>Male</div>}
						{gender === 'female' && <div>Female</div>}
					</Container>
				</div>
			)}
			{(!gender || (gender !== 'male' && gender !== 'female')) && <Gender />}
			<Footer />
		</>
	)
}

export default Bundle
