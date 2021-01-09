import { BtnSecondary, Button, Container } from '@components/atoms'
import { Footer, Navbar, Notice } from '@components/molecules'
import Image from 'next/image'
import { media } from 'style'
import styled from 'styled-components'

const Header = styled.header`
	position: relative;

	${media.md} {
		color: white;
		background-color: rgba(6, 39, 170, 0.9);
	}
`

const HeaderBackground = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: -1;
	display: none;

	${media.md} {
		display: block;
	}
`

const HeaderMain = styled.div``

const HeaderContainer = styled.div`
	height: 70rem;
	background-color: ${({ theme }) => theme.colors['white-dark']};

	${media.md} {
		background-color: transparent;
	}

	${Container} {
		display: grid;
		grid-template-columns: 4fr 3fr;
		align-items: center;
		column-gap: 5rem;

		${media.md} {
			grid-template-columns: auto;
		}
	}
`

const HeaderBtn = styled(Button)`
	${media.md} {
		${BtnSecondary}
	}
`

const HeaderContent = styled.div`
	${media.md} {
		text-align: center;
	}
`

const HeaderImg = styled.div`
	height: 100%;
	position: relative;

	${media.md} {
		display: none;
	}
`

const HeaderTitle = styled.h1`
	font-size: 5.4rem;
	text-transform: uppercase;
	font-weight: 300;
	margin-bottom: 3rem;

	span {
		font-weight: 500;
	}
`

const HeaderSubTitle = styled.p`
	margin-bottom: 5rem;
	font-size: 2.2rem;
	color: rgba(1, 8, 34, 0.58);

	${media.md} {
		color: rgba(255, 255, 255, 0.7);
	}
`

const StepsSection = styled.section`
	${Container} {
		padding-top: 12rem;
		padding-bottom: 12rem;
		display: grid;
		grid-template-columns: 1fr 2fr;
		column-gap: 5rem;

		${media.sm} {
			grid-template-columns: 1fr;
			row-gap: 7.5rem;
		}
	}
`
const StepsTitle = styled.h2`
	font-size: 6.5rem;
	text-transform: uppercase;
	font-weight: 500;

	${media.sm} {
		text-align: center;
	}
`
const StepsGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 5rem;
	row-gap: 5rem;

	${media.sm} {
		text-align: center;
	}
`

const StepsItem = styled.div``

const StepsIcon = styled.div`
	background-color: ${({ theme }) => theme.colors.blue};
	width: 8rem;
	height: 8rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100px;
	margin-bottom: 2.5rem;

	img {
		height: 3.5rem;
	}

	${media.sm} {
		margin-right: auto;
		margin-left: auto;
	}
`

const StepsItemTitle = styled.p`
	font-size: 2rem;
	text-transform: uppercase;
	font-weight: 700;
	margin-bottom: 1rem;
`
const StepsItemDesc = styled.p`
	font-size: 1.6rem;
	color: #7e7e7e;
`

const WhySection = styled.section`
	position: relative;
`

const WhyMain = styled.div`
	height: 80rem;
	background-color: #f8f8f8;

	${media.md} {
		background-color: rgba(255, 255, 255, 0.9);
	}

	${Container} {
		display: grid;
		grid-template-columns: 2fr 3fr;
		padding-top: 5rem;
		padding-bottom: 5rem;
		align-items: center;

		${media.md} {
			grid-template-columns: 1fr;
		}

		${media.sm} {
			text-align: center;
		}
	}
`

const WhyContent = styled.div``

const WhyImg = styled.div`
	height: 100%;
	position: relative;

	${media.md} {
		display: none;
	}
`
const WhyTitle = styled.h2`
	font-size: 6.5rem;
	text-transform: uppercase;
	font-weight: 500;
	margin-bottom: 2.5rem;
`

const WhyText = styled.p`
	font-size: 1.8rem;
	color: #4e4e4e;
	margin-bottom: 2rem;

	span {
		color: ${({ theme }) => theme.colors.blue};
		font-weight: 700;
		text-transform: uppercase;
	}
`

const WhySubTitle = styled.p`
	font-weight: 700;
	font-size: 2rem;
	margin-bottom: 1.6rem;
	text-transform: uppercase;
	margin-top: 3rem;
`

const WhyBackImg = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: -1;
	display: none;

	${media.md} {
		display: block;
	}
`

const FeaturedSection = styled.section`
	${Container} {
		padding-top: 15rem;
		padding-bottom: 15rem;
	}
`

const Pillar = styled.div`
	display: flex;

	&:not(:last-child) {
		margin-right: 2.5rem;
	}
`

const PillarText = styled.p`
	font-size: 1.8rem;
	color: #4e4e4e;
`

const PillarsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	${media.sm} {
		justify-content: center;
	}

	p {
		margin-right: 1rem;
	}

	img {
		height: 1.6rem;
	}
`

const Home = () => {
	return (
		<>
			<Notice />
			<Header>
				<HeaderBackground>
					<Image
						src='/images/hero-background.png'
						layout='fill'
						objectFit='cover'
						quality={50}
						priority
					/>
				</HeaderBackground>
				<HeaderMain>
					<Navbar />
					<HeaderContainer>
						<Container>
							<HeaderContent>
								<HeaderTitle>
									The <span>Easiest</span> way to <span>start</span> a fitness activity
								</HeaderTitle>
								<HeaderSubTitle>
									Whatever your passion, whatever your goal, let us help you achieve it
								</HeaderSubTitle>
								<HeaderBtn size='lg'>get started</HeaderBtn>
							</HeaderContent>
							<HeaderImg>
								<Image src='/images/hero.png' layout='fill' objectFit='contain' />
							</HeaderImg>
						</Container>
					</HeaderContainer>
				</HeaderMain>
			</Header>
			<StepsSection>
				<Container>
					<StepsTitle>how it works</StepsTitle>
					<StepsGrid>
						<StepsItem>
							<StepsIcon>
								<img src='/images/dumbbell.svg' />
							</StepsIcon>
							<StepsItemTitle>Choose your fitness activity</StepsItemTitle>
							<StepsItemDesc>
								Choose a fitness activity from various options to see which best meets your goals
								and interests
							</StepsItemDesc>
						</StepsItem>
						<StepsItem>
							<StepsIcon>
								<img src='/images/dollar.svg' />
							</StepsIcon>
							<StepsItemTitle>Choose your Price point</StepsItemTitle>
							<StepsItemDesc>
								Choose from 3 different price points to see which suits your budget and needs the
								best
							</StepsItemDesc>
						</StepsItem>
						<StepsItem>
							<StepsIcon>
								<img src='/images/shirts.svg' />
							</StepsIcon>
							<StepsItemTitle>Customize your bundle</StepsItemTitle>
							<StepsItemDesc>
								Curate your bundle to your likes and needs. Mix and match size, colour and style.{' '}
							</StepsItemDesc>
						</StepsItem>
						<StepsItem>
							<StepsIcon>
								<img src='/images/box.svg' />
							</StepsIcon>
							<StepsItemTitle>start your journey</StepsItemTitle>
							<StepsItemDesc>
								Get everything you need in a couple clicks, delivered to your door in 5 days.
							</StepsItemDesc>
						</StepsItem>
					</StepsGrid>
				</Container>
			</StepsSection>
			<WhySection>
				<WhyBackImg>
					<Image src='/images/why-background.png' layout='fill' objectFit='cover' quality={50} />
				</WhyBackImg>
				<WhyMain>
					<Container>
						<WhyContent>
							<WhyTitle>why us?</WhyTitle>
							<WhyText>
								<span>Elere</span> is a platform created to make it easier for you to{' '}
								<span>start</span>.
							</WhyText>
							<WhyText>
								Whatever your goals and desires are, wherever along the process you are, we want to
								help you reach the <span>finish</span>.
							</WhyText>
							<WhySubTitle>Our three pillars are</WhySubTitle>
							<PillarsContainer>
								<Pillar>
									<PillarText>Affordability</PillarText>
									<img src='/images/check.svg' />
								</Pillar>
								<Pillar>
									<PillarText>Convenience</PillarText>
									<img src='/images/check.svg' />
								</Pillar>
								<Pillar>
									<PillarText>Simplicity</PillarText>
									<img src='/images/check.svg' />
								</Pillar>
							</PillarsContainer>
						</WhyContent>
						<WhyImg>
							<Image src='/images/why.png' layout='fill' objectFit='contain' />
						</WhyImg>
					</Container>
				</WhyMain>
			</WhySection>
			<FeaturedSection>
				<Container>Hello</Container>
			</FeaturedSection>
			<Footer />
		</>
	)
}

export default Home
