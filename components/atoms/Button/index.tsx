import styled, { css } from 'styled-components'

interface ButtonProps {
	variant?: 'primary' | 'secondary'
	size?: 'lg' | 'md' | 'sm'
}

export const BtnPrimary = css`
	background-color: ${({ theme }) => theme.colors.blue};
	color: white;
	&:active {
		background-color: ${({ theme }) => theme.colors['blue-dark']};
	}
`

export const BtnSecondary = css`
	background-color: white;
	border: 2px solid ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.blue};
	&:active {
		background-color: ${({ theme }) => theme.colors['white-dark']};
	}
`

export const Button = styled.button<ButtonProps>`
	border: none;
	outline: none;
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: translateY(-2px);
	}
	&:active {
		transform: translateY(1px);
	}
	${({ variant }) => variant === 'primary' && BtnPrimary}
	${({ variant }) => variant === 'secondary' && BtnSecondary}
	${({ size }) =>
		size === 'lg' &&
		css`
			font-size: 2.2rem;
			padding: 1.6rem 3.5rem;
		`}
		${({ size }) =>
		size === 'md' &&
		css`
			font-size: 1.8rem;
			padding: 1.2rem 2.3rem;
		`}
		${({ size }) =>
		size === 'sm' &&
		css`
			font-size: 1.4rem;
			padding: 0.8rem 1.5rem;
		`}
`

Button.defaultProps = {
	variant: 'primary',
	size: 'md',
}
