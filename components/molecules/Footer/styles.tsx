import { Container } from '@components/atoms'
import { media } from 'style'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
	background-color: ${({ theme }) => theme.colors.blue};
	color: white;
	font-size: 1.8rem;

	${Container} {
		padding-top: 10rem;
	}
`

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 5rem;
	row-gap: 5rem;
	margin-bottom: 10rem;

	${media.md} {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const FooterSubTitle = styled.p`
	text-transform: uppercase;
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
`

export const FooterColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`

export const FooterItem = styled.p`
	&:not(:last-child) {
		margin-bottom: 1rem;
	}
`

export const FooterLink = styled(FooterItem)`
	cursor: pointer;
`

export const FooterCopyright = styled.p`
	text-align: center;
	padding-bottom: 2.5rem;
`
export const FooterIcons = styled(FooterLink)`
	display: flex;
	cursor: default;

	& > *:not(:last-child) {
		margin-right: 2rem;
	}
`

export const FooterIcon = styled.img`
	height: 2rem;
`

export const FooterEmailBox = styled.form`
	display: flex;
	background-color: white;
`

export const FooterEmailInput = styled.input`
	flex: 1;
	margin: 0.75rem 1rem;
	border: none;
	outline: none;
	font-size: 1.8rem;
`

export const FooterEmailBtn = styled.button.attrs(() => ({ type: 'submit' }))`
	border: none;
	outline: none;
	background-color: white;
	cursor: pointer;

	img {
		padding: 0 1rem;
	}
`
