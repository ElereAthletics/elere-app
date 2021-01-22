import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

interface Props {
	img: string
	title: string
	desc: string
	path?: string
	disabled?: boolean
}

const BundleCardContainer = styled.div`
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-radius: 8px;
	overflow: hidden;
`

const BundleCardImg = styled.div`
	height: 20rem;
	position: relative;
`

const BundleCardTitle = styled.p`
	color: ${({ theme }) => theme.colors.blue};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 2rem;
`

const BundleCardDesc = styled.p`
	font-size: 1.6rem;
	color: #7e7e7e;
`

const BundleCardText = styled.div`
	height: 22.5rem;
	padding: 2rem;
`

const BundleCard: FC<Props> = ({ img, title, desc, path }) => {
	return (
		<Link href={path}>
			<BundleCardContainer>
				<BundleCardImg>
					<Image src={img} layout='fill' objectFit='cover' />
				</BundleCardImg>
				<BundleCardText>
					<BundleCardTitle>{title}</BundleCardTitle>
					<BundleCardDesc>{desc}</BundleCardDesc>
				</BundleCardText>
			</BundleCardContainer>
		</Link>
	)
}

BundleCard.defaultProps = {
	disabled: true,
	path: '',
}

export default BundleCard
