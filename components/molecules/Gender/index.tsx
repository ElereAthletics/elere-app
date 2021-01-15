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
import { useRouter } from 'next/router'

const Gender = () => {
	const router = useRouter()

	const MaleClickHandler = () => {
		router.push({
			query: { gender: 'male' },
		})
	}

	const FemaleClickHandler = () => {
		router.push({
			query: { gender: 'female' },
		})
	}

	return (
		<GenderContainer>
			<ShoppingFor>Shopping For</ShoppingFor>
			<GenderFemale onClick={FemaleClickHandler}>
				<GenderTitleContainer>
					<GenderTitle>female</GenderTitle>
					<GenderLine></GenderLine>
				</GenderTitleContainer>
				<GenderFemaleImg>
					<Image src='/images/female.png' layout='fill' objectFit='contain' />
				</GenderFemaleImg>
			</GenderFemale>
			<GenderMale onClick={MaleClickHandler}>
				<GenderTitleContainer>
					<GenderTitle>male</GenderTitle>
					<GenderLine></GenderLine>
				</GenderTitleContainer>
				<GenderMaleImg>
					<Image src='/images/male.png' layout='fill' objectFit='contain' />
				</GenderMaleImg>
			</GenderMale>
		</GenderContainer>
	)
}

export default Gender
