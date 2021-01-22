import React from 'react'
import { BundleCard, Footer, Navbar, Notice } from '@components/molecules'
import styled from 'styled-components'
import { Container } from '@components/atoms'
import Head from 'next/head'

const BundleContainer = styled.div`
	${Container} {
		padding-top: 10rem;
		padding-bottom: 10rem;
	}
`

const BundleTitle = styled.h1`
	font-size: 5.4rem;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 2.5rem;

	span {
		color: ${({ theme }) => theme.colors.blue};
	}
`

const BundleSubTitle = styled.p`
	color: #7e7e7e;
	font-size: 2.2rem;
	text-align: center;
	margin-left: 5rem;
	margin-right: 5rem;
	margin-bottom: 10rem;
`

const BundleGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	max-width: 90rem;
	margin-right: auto;
	margin-left: auto;
	column-gap: 5rem;
	row-gap: 5rem;
`

const Bundles = [
	{
		img: '/images/workout.png',
		title: 'home workout',
		desc: 'Get all the essentials you need to get started working out in the comfort of your own home.',
		path: 'workout',
	},
	{
		img: '/images/gym.png',
		title: 'gym',
		desc: 'Coming soon...',
	},
	{
		img: '/images/running.png',
		title: 'running',
		desc: 'Coming soon...',
	},
]

const BundlePage = () => {
	return (
		<>
			<Head>
				<title>Elere | Bundle</title>
			</Head>
			<Notice />
			<Navbar />
			<BundleContainer>
				<Container>
					<BundleTitle>
						activity <span>bundles</span>
					</BundleTitle>
					<BundleSubTitle>
						Choose an activity that you want to pursue, from our specially curated list of activities.
					</BundleSubTitle>
					<BundleGrid>
						{Bundles.map(({ img, title, desc, path }, key) => (
							<BundleCard img={img} title={title} desc={desc} path={path} key={key} />
						))}
					</BundleGrid>
				</Container>
			</BundleContainer>
			<Footer />
		</>
	)
}

export default BundlePage
