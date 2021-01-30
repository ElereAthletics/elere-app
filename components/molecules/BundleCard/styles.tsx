import styled, { css } from 'styled-components'

interface Props {
	path?: string
}

export const BundleOverlay = styled.div`
	display: none;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(6, 39, 170, 0.8);
	z-index: 100;
	align-items: center;
	justify-content: center;
`

export const OverlayText = styled.div`
	color: white;
	border: 2px solid white;
	font-weight: 900;
	text-transform: uppercase;
	padding: 20px;
	font-size: 20px;
`

export const BundleCardContainer = styled.div<Props>`
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 8px;
	overflow: hidden;
	position: relative;

	${({ path }) =>
		path &&
		css`
			cursor: pointer;
		`}

	${({ path }) =>
		!path &&
		css`
			${BundleOverlay} {
				display: flex;
			}
		`}
`

export const BundleCardImg = styled.div`
	height: 20rem;
	position: relative;
`

export const BundleCardTitle = styled.p`
	color: ${({ theme }) => theme.colors.blue};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 2rem;
`

export const BundleCardDesc = styled.p`
	font-size: 1.6rem;
	color: #7e7e7e;
`

export const BundleCardText = styled.div`
	height: 22.5rem;
	padding: 2rem;
`
