import { Container } from '@components/atoms'
import styled from 'styled-components'

export const FooterContainer = styled.footer`
	background-color: ${({ theme }) => theme.colors.blue};
	color: white;

	${Container} {
		padding-top: 10rem;
		padding-bottom: 10rem;
		display: grid;
		grid-template-columns: 1fr auto auto auto auto;
		column-gap: 5rem;
	}
`

export const FooterTitle = styled.p`
	color: white;
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: 3rem;
	font-weight: 500;
`
