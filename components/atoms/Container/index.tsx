import { media } from 'style'
import styled from 'styled-components'

export const Container = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	margin-right: auto;
	margin-left: auto;
	height: 100%;
	max-width: 1320px;
	${media.xl} {
		max-width: 1140px;
	}
	${media.lg} {
		max-width: 960px;
	}
	${media.md} {
		max-width: 720px;
	}
	${media.sm} {
		max-width: 540px;
	}
	${media.xs} {
		max-width: 100%;
	}
`
