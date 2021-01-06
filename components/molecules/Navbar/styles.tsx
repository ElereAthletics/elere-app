import { Container } from '@components/atoms'
import styled from 'styled-components'

export const NavbarWrap = styled.nav`
	${Container} {
		display: flex;
		justify-content: space-between;
		padding-top: 2rem;
		padding-bottom: 2rem;
		align-items: center;
	}
`

export const NavLogo = styled.p`
	text-transform: uppercase;
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: 3rem;
	font-weight: 500;
`

export const NavSearch = styled.form`
	display: flex;
	align-items: center;
	padding: 0.75rem 1.5rem;
	border-radius: 100px;
	border: 1px solid #e6e6e6;
	transition: all 0.3s ease-in-out;
	justify-self: right;
	max-width: 20rem;
	background-color: white;

	&:focus-within {
		border: 1px solid #bbbbbb;
	}
`

export const NavSearchInput = styled.input`
	font-size: 1.6rem;
	border: none;
	margin-right: 1rem;
	outline: none;
	width: 100%;
`

export const NavSearchBtn = styled.button.attrs(() => ({ type: 'submit' }))`
	background-color: transparent;
	border: none;
	outline: none;
`

export const NavLinksWrap = styled.div`
	display: flex;
	& > *:not(:last-child) {
		margin-right: 4rem;
	}
`

export const NavLink = styled.p`
	cursor: pointer;
	text-transform: uppercase;
	font-size: 2rem;
`
