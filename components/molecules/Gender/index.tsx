import Image from 'next/image'
import {
	GenderContainer,
	GenderFemale,
	GenderFemaleImg,
	GenderLine,
	GenderMale,
	GenderMaleImg,
	GenderTitle,
	GenderTitleContainer,
	ShoppingFor,
} from './styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Gender = () => {
	const router = useRouter()

	return (
		<GenderContainer>
			<ShoppingFor>Shopping For</ShoppingFor>
			<Link href={`${router.pathname}/female`}>
				<GenderFemale>
					<GenderTitleContainer>
						<GenderTitle>female</GenderTitle>
						<GenderLine></GenderLine>
					</GenderTitleContainer>
					<GenderFemaleImg>
						<Image src='/images/female.png' layout='fill' objectFit='contain' priority />
					</GenderFemaleImg>
				</GenderFemale>
			</Link>
			<Link href={`${router.pathname}/male`}>
				<GenderMale>
					<GenderTitleContainer>
						<GenderTitle>male</GenderTitle>
						<GenderLine></GenderLine>
					</GenderTitleContainer>
					<GenderMaleImg>
						<Image src='/images/male.png' layout='fill' objectFit='contain' priority />
					</GenderMaleImg>
				</GenderMale>
			</Link>
		</GenderContainer>
	)
}

export default Gender
