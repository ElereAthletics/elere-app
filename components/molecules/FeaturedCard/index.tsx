import {
	FeaturedCardImg,
	FeaturedCardWrap,
	FeaturedCardDesc,
	FeaturedCardTitle,
	FeaturedCardLearn,
} from './styles'
import Image from 'next/image'

const FeaturedCard = ({ img, title, desc, width, height, number }) => {
	return (
		<FeaturedCardWrap number={number}>
			<FeaturedCardImg>
				<Image src={img} width={width} height={height} />
			</FeaturedCardImg>
			<FeaturedCardTitle>{title}</FeaturedCardTitle>
			<FeaturedCardDesc>{desc}</FeaturedCardDesc>
			<FeaturedCardLearn>
				<p>learn more</p>
				<img src='/images/arrow-right.svg' />
			</FeaturedCardLearn>
		</FeaturedCardWrap>
	)
}

export default FeaturedCard
