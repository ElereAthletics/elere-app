import React from 'react'
import { useRouter } from 'next/router'
import { Footer, Navbar, Notice } from '@components/molecules'
import styled from 'styled-components'
import { Container } from '@components/atoms'

const BundleContainer = styled.div``

const BundlePage = () => {
	const router = useRouter()
	const { gender } = router.query

	return (
		<>
			<Notice />
			<Navbar />
			<BundleContainer>
				<Container>{gender}</Container>
			</BundleContainer>
			<Footer />
		</>
	)
}

export default BundlePage
