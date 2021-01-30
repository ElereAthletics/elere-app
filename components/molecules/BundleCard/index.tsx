import Image from 'next/image'
import { FC } from 'react'
import {
	BundleCardContainer,
	BundleCardDesc,
	BundleCardImg,
	BundleCardText,
	BundleCardTitle,
	BundleOverlay,
	OverlayText,
} from './styles'
import { useRouter } from 'next/router'

interface Props {
	img: string
	title: string
	desc: string
	path?: string
	disabled?: boolean
}

const BundleCard: FC<Props> = ({ img, title, desc, path }) => {
	const router = useRouter()
	const { gender } = router.query

	return (
		<BundleCardContainer
			path={path}
			onClick={() =>
				path && router.push({ pathname: '/bundle/[gender]/[path]', query: { gender: gender, path: path } })
			}
		>
			<BundleOverlay>
				<OverlayText>coming soon</OverlayText>
			</BundleOverlay>
			<BundleCardImg>
				<Image src={img} layout='fill' objectFit='cover' />
			</BundleCardImg>
			<BundleCardText>
				<BundleCardTitle>{title}</BundleCardTitle>
				<BundleCardDesc>{desc}</BundleCardDesc>
			</BundleCardText>
		</BundleCardContainer>
	)
}

BundleCard.defaultProps = {
	disabled: true,
	path: '',
}

export default BundleCard
