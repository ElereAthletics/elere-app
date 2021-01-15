import { Container } from '@components/atoms'
import styled from 'styled-components'

export const NoticeWrap = styled.div`
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};

	${Container} {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		display: flex;
		justify-content: space-between;
	}
`

export const NoticeRight = styled.div`
	display: flex;
	align-items: center;

	*:not(:last-child) {
		margin-right: 4rem;
	}
`
