import { BtnSecondary, Button, Container } from '@components/atoms'
import { Navbar, Notice } from '@components/molecules'
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
	}
`

const Home = () => {
	return (
		<>
			<Notice />
			<Header>
				<HeaderBackground>
					<Image src='/images/hero-background.png' layout='fill' objectFit='cover' quality={50} />
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
								<Image src='/images/hero.png' width={1165} height={1214} />
							</HeaderImg>
						</Container>
					</HeaderContainer>
				</HeaderMain>
			</Header>
			<StepsSection>
				<Container>Hello</Container>
			</StepsSection>
		</>
	)
}

export default Home
