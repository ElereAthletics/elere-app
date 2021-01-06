import { Container } from '@components/atoms'
import { media } from 'style'
import styled from 'styled-components'

export const NoticeWrap = styled.div`
	background-color: ${({ theme }) => theme.colors.blue};
	color: ${({ theme }) => theme.colors.white};

	${media.md} {
		background-color: ${({ theme }) => theme.colors.black};
	}

	${Container} {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		display: flex;
		justify-content: space-between;
	}
`

export const NoticeRight = styled.div`
	display: flex;
	*:not(:last-child) {
		margin-right: 4rem;
	}
`
