import { Container } from '@components/atoms'
import { Footer, Navbar } from '@components/molecules'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { media } from 'style'
import styled from 'styled-components'

const WorkoutContainer = styled.div`
	${Container} {
		padding-top: 10rem;
		padding-bottom: 10rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`

const Title = styled.h2`
	font-size: 5.4rem;
	font-weight: 500;
	text-transform: uppercase;
	margin-bottom: 2.5rem;

	span {
		color: ${({ theme }) => theme.colors.blue};
	}
`

const Description = styled.p`
	max-width: 80rem;
	font-size: 2.2rem;
	margin-bottom: 6.6rem;

	span {
		color: ${({ theme }) => theme.colors.blue};
		font-weight: bold;
	}
`

const Grid = styled.div`
	display: grid;
	grid-template-columns: minmax(min-content, 250px) 1px minmax(min-content, 250px) 1px minmax(min-content, 250px);
	column-gap: 5rem;

	${media.md} {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1px 1fr 1px 1fr;
		row-gap: 5rem;
		justify-items: center;
	}
`

const GridDivider = styled.div`
	width: 1px;
	height: 36rem;
	background-color: ${({ theme }) => theme.colors.blue};
	border-radius: 100px;
	align-self: center;

	${media.md} {
		height: 1px;
		width: 80%;
	}
`

const GridTitleWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 3rem;
`

const GridTitle = styled.p`
	font-size: 3.6rem;
	font-weight: 700;
	text-transform: uppercase;
`

const GridTitleUnderline = styled.div`
	height: 2.5px;
	background-color: ${({ theme }) => theme.colors.blue};
	width: 8rem;
	margin-top: -10px;
`

const Retail = styled.p`
	font-size: 2rem;
	font-style: italic;
	margin-bottom: 3.7rem;
`

const SelectBtn = styled.button`
	outline: none;
	border: none;
	background-color: ${({ theme }) => theme.colors.blue};
	color: white;
	border-radius: 7px;
	padding: 1rem 5rem;
	text-transform: uppercase;
	cursor: pointer;
	font-size: 2rem;
`

const Price = styled.p`
	font-size: 3.6rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.blue};
	margin-bottom: 1rem;
`

const Feature = styled.div`
	display: flex;
	align-items: center;
	font-size: 2.5rem;
	margin-bottom: 2rem;

	svg {
		width: 2.3rem;
	}

	& > *:first-child {
		margin-right: 1.2rem;
		color: ${({ theme }) => theme.colors.blue};
	}
`

const Workout = () => {
	const router = useRouter()
	const { gender } = router.query

	return (
		<>
			<Head>
				<title>Elere | Home Workout</title>
			</Head>
			<Navbar />
			<WorkoutContainer>
				<Container>
					<Title>
						Home Workout <span>Bundles</span>
					</Title>
					<Description>
						Get all the essentials you need to get started working out in the comfort of your own
						home.&nbsp;<span>Choose your price point:</span>
					</Description>
					<Grid>
						<div>
							<GridTitleWrap>
								<GridTitle>Starter</GridTitle>
								<GridTitleUnderline></GridTitleUnderline>
							</GridTitleWrap>
							<Price>$99.99</Price>
							<Feature>
								<span>2</span>
								<p>Standard Tops</p>
							</Feature>
							<Feature>
								<span>1</span>
								{gender === 'female' ? <p>Sports Bra</p> : <p>Premium Top</p>}
							</Feature>
							<Feature>
								<span>1</span>
								<p>Standard Bottom</p>
							</Feature>
							<Feature>
								<span>1</span>
								<p>Premium Bottom</p>
							</Feature>
							<Feature>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='22.587'
									height='22.587'
									viewBox='0 0 22.587 22.587'
								>
									<g id='Cross' transform='translate(-3 -38)'>
										<path
											id='Path_38'
											data-name='Path 38'
											d='M0,18.382l7.088-7.088L0,4.205,4.205,0l7.088,7.088L18.382,0l4.205,4.205L15.5,11.294l7.088,7.088-4.205,4.205L11.294,15.5,4.205,22.587Z'
											transform='translate(3 38)'
											fill='#a7a7a7'
										/>
									</g>
								</svg>
								<p>Accessories</p>
							</Feature>
							<Feature>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='22.587'
									height='22.587'
									viewBox='0 0 22.587 22.587'
								>
									<g id='Cross' transform='translate(-3 -38)'>
										<path
											id='Path_38'
											data-name='Path 38'
											d='M0,18.382l7.088-7.088L0,4.205,4.205,0l7.088,7.088L18.382,0l4.205,4.205L15.5,11.294l7.088,7.088-4.205,4.205L11.294,15.5,4.205,22.587Z'
											transform='translate(3 38)'
											fill='#a7a7a7'
										/>
									</g>
								</svg>
								<p>Add-on Item</p>
							</Feature>
							<Retail>Retail Value: $150+</Retail>
							<SelectBtn>Select</SelectBtn>
						</div>
						<GridDivider></GridDivider>
						<div>
							<GridTitleWrap>
								<GridTitle>value</GridTitle>
								<GridTitleUnderline></GridTitleUnderline>
							</GridTitleWrap>
							<Price>$149.99</Price>
							<Feature>
								<span>3</span>
								<p>Standard Tops</p>
							</Feature>
							<Feature>
								{gender === 'female' ? <span>2</span> : <span>1</span>}
								{gender === 'female' ? <p>Sports Bras</p> : <p>Premium Top</p>}
							</Feature>
							<Feature>
								<span>1</span>
								<p>Standard Bottom</p>
							</Feature>
							<Feature>
								<span>2</span>
								<p>Premium Bottoms</p>
							</Feature>
							<Feature>
								<span>3</span>
								<p>Accessories</p>
							</Feature>
							<Feature>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='22.587'
									height='22.587'
									viewBox='0 0 22.587 22.587'
								>
									<g id='Cross' transform='translate(-3 -38)'>
										<path
											id='Path_38'
											data-name='Path 38'
											d='M0,18.382l7.088-7.088L0,4.205,4.205,0l7.088,7.088L18.382,0l4.205,4.205L15.5,11.294l7.088,7.088-4.205,4.205L11.294,15.5,4.205,22.587Z'
											transform='translate(3 38)'
											fill='#a7a7a7'
										/>
									</g>
								</svg>
								<p>Add-on Item</p>
							</Feature>
							<Retail>Retail Value: $230+</Retail>
							<SelectBtn>Select</SelectBtn>
						</div>
						<GridDivider></GridDivider>
						<div>
							<GridTitleWrap>
								<GridTitle>all-in</GridTitle>
								<GridTitleUnderline></GridTitleUnderline>
							</GridTitleWrap>
							<Price>$199.99</Price>
							<Feature>
								<span>5</span>
								<p>Standard Tops</p>
							</Feature>
							<Feature>
								{gender === 'female' ? <span>3</span> : <span>2</span>}
								{gender === 'female' ? <p>Sports Bras</p> : <p>Premium Top</p>}
							</Feature>
							<Feature>
								<span>2</span>
								<p>Standard Bottom</p>
							</Feature>
							<Feature>
								<span>3</span>
								<p>Premium Bottoms</p>
							</Feature>
							<Feature>
								<span>5</span>
								<p>Accessories</p>
							</Feature>
							<Feature>
								<span>1</span>
								<p>Add-on Item</p>
							</Feature>
							<Retail>Retail Value: $425+</Retail>
							<SelectBtn>Select</SelectBtn>
						</div>
					</Grid>
				</Container>
			</WorkoutContainer>
			<Footer />
		</>
	)
}

export default Workout
