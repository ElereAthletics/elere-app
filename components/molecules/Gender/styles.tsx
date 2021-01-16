import { media } from 'style'
import styled from 'styled-components'

export const GenderContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	height: 60rem;
	position: relative;

	${media.sm} {
		grid-template-columns: 1fr;
		height: 100rem;
	}
`

export const GenderFemaleImg = styled.div`
	position: relative;
	height: 100%;
	transition: all 0.3s ease-in-out;
`

export const GenderMaleImg = styled.div`
	position: relative;
	height: 100%;
	transition: all 0.3s ease-in-out;
`

export const ShoppingFor = styled.h1`
	font-size: 5rem;
	font-weight: 500;
	position: absolute;
	top: 50%;
	left: 50%;
	text-transform: uppercase;
	transform: translate(-50%, -50%) rotate(-90deg);

	${media.sm} {
		transform: translate(-50%, -50%);
	}
`
export const GenderTitleContainer = styled.div`
	position: absolute;
`

export const GenderTitle = styled.h2`
	font-size: 3.5rem;
`

export const GenderLine = styled.div`
	background-color: ${({ theme }) => theme.colors.black};
	width: 0;
	height: 3px;
	margin-left: auto;
	margin-right: auto;
	transition: all 0.3s ease-in-out;
`

export const GenderMale = styled.div`
	background-color: #eaeaea;
	padding-top: 7.5rem;
	padding-bottom: 7.5rem;
	cursor: pointer;
	overflow: hidden;

	& ${GenderTitleContainer} {
		top: 5rem;
		right: 5rem;

		${media.sm} {
			top: auto;
			bottom: 5rem;
		}
	}

	&:hover ${GenderMaleImg} {
		transform: scale(1.15);
	}

	&:hover ${GenderTitle} {
		color: ${({ theme }) => theme.colors.blue};
	}

	&:hover ${GenderLine} {
		width: 70%;
		background-color: ${({ theme }) => theme.colors.blue};
	}
`

export const GenderFemale = styled.div`
	background-color: #fafafa;
	padding-top: 7.5rem;
	padding-bottom: 7.5rem;
	cursor: pointer;
	overflow: hidden;

	& ${GenderTitleContainer} {
		top: 5rem;
		left: 5rem;
	}

	&:hover ${GenderFemaleImg} {
		transform: scale(1.15);
	}

	&:hover ${GenderTitle} {
		color: ${({ theme }) => theme.colors.blue};
		transition: all 0.3s ease-in-out;
	}

	&:hover ${GenderLine} {
		width: 70%;
		background-color: ${({ theme }) => theme.colors.blue};
	}
`
