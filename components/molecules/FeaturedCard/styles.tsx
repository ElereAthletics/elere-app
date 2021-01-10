import { media } from 'style'
import styled, { css } from 'styled-components'

interface FeaturedProps {
	number: number
}

export const FeaturedCardWrap = styled.div<FeaturedProps>`
	font-size: 1.8rem;

	${({ number }) =>
		number === 1 &&
		css`
			grid-column: 1/2;
			grid-row: 1/3;
		`}

	${({ number }) =>
		number === 2 &&
		css`
			grid-column: 2/3;
			grid-row: 2/4;
		`}

  ${({ number }) =>
		number === 3 &&
		css`
			grid-column: 1/2;
			grid-row: 3/5;
		`}

  ${media.xs} {
		grid-column: auto;
		grid-row: auto;
	}
`

export const FeaturedCardImg = styled.div`
	position: relative;
	margin-bottom: 2rem;

	img {
		border-radius: 20px;
	}
`

export const FeaturedCardTitle = styled.p`
	margin-bottom: 1.5rem;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 2rem;
`

export const FeaturedCardDesc = styled.p`
	margin-bottom: 1.5rem;
	color: #4e4e4e;
`

export const FeaturedCardLearn = styled.div`
	cursor: pointer;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.blue};
	font-weight: 700;
	display: flex;
	align-items: center;

	p {
		margin-right: 1rem;
	}

	img {
		height: 1rem;
	}

	${media.xs} {
		justify-content: center;
	}
`
