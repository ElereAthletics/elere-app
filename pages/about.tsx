import { Container } from '@components/atoms'
import { Footer, Navbar, Notice } from '@components/molecules'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const AboutSection = styled.div`
	${Container} {
		padding-top: 10rem;
		padding-bottom: 10rem;
	}
`

const AboutTitle = styled.h1`
	font-size: 5.4rem;
	font-weight: 500;
	text-transform: uppercase;
	text-align: center;
	margin-bottom: 2.5rem;

	span {
		color: ${({ theme }) => theme.colors.blue};
	}
`

const AboutSubTitle = styled.p`
	color: #7e7e7e;
	font-size: 2.2rem;
	text-align: center;
	margin-left: 5rem;
	margin-right: 5rem;
	margin-bottom: 10rem;
`

const AboutContent = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	align-items: center;
	column-gap: 10rem;
`

const AboutGoalTitle = styled.h2`
	font-size: 4.5rem;
	font-weight: 500;
	text-transform: uppercase;
	margin-bottom: 2.5rem;

	span {
		color: ${({ theme }) => theme.colors.blue};
	}
`

const AboutGoalWrap = styled.div`
	p:not(:last-child) {
		margin-bottom: 2.5rem;
	}

	p {
		font-size: 2rem;
		color: rgba(1, 8, 34, 0.58);
	}
`

const AboutGoalImg = styled.div``

const About = () => {
	return (
		<>
			<Head>
				<title>Elere | About </title>
			</Head>
			<Notice />
			<Navbar />
			<AboutSection>
				<Container>
					<AboutTitle>
						about <span>elere</span>
					</AboutTitle>
					<AboutSubTitle>
						Elere was founded in Toronto, Canada. We&apos;re focused on providing an affordable,
						covenient, and simple way to get everything you need to start your fitness journey.
					</AboutSubTitle>
					<AboutContent>
						<AboutGoalWrap>
							<AboutGoalTitle>
								our <span>goal</span>
							</AboutGoalTitle>
							<p>
								The goal is to provide users with a platform where the barriers associated with
								starting a new fitness activity are removed.{' '}
							</p>
							<p>
								Whether you are just starting out or trying to get back, get everything you need at
								an affordable price delivered right to your door.
							</p>
							<p>
								No need for research, or comparing prices, our bundles do all the work for you
								while providing the best bang for your buck.
							</p>
						</AboutGoalWrap>
						<AboutGoalImg>
							<Image src='/images/goal.png' width={678} height={846} />
						</AboutGoalImg>
					</AboutContent>
				</Container>
			</AboutSection>
			<Footer />
		</>
	)
}

export default About
