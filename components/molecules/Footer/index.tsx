import { Container } from '@components/atoms'
import {
	FooterColumn,
	FooterContainer,
	FooterSubTitle,
	FooterLink,
	FooterItem,
	FooterCopyright,
	FooterGrid,
	FooterIcon,
	FooterIcons,
	FooterEmailBox,
	FooterEmailInput,
	FooterEmailBtn,
} from './styles'

const Footer = () => {
	return (
		<FooterContainer>
			<Container>
				<FooterGrid>
					<FooterColumn>
						<FooterSubTitle>information</FooterSubTitle>
						<FooterLink>About</FooterLink>
						<FooterLink>Careers</FooterLink>
						<FooterLink>Terms & Conditions</FooterLink>
						<FooterLink>Privacy Policy</FooterLink>
					</FooterColumn>
					<FooterColumn>
						<FooterSubTitle>Service</FooterSubTitle>
						<FooterLink>FAQS</FooterLink>
						<FooterLink>Size Guide</FooterLink>
						<FooterLink>Returns & Exchange</FooterLink>
					</FooterColumn>
					<FooterColumn>
						<FooterSubTitle>Contact us</FooterSubTitle>
						<FooterItem>Email: elereathletics@gmail.com</FooterItem>
						<FooterIcons>
							<a href='https://www.facebook.com/ElereAthletics' target='_blank' rel='noreferrer'>
								<FooterIcon src='/images/facebook.svg' />
							</a>
							<a
								href='https://www.instagram.com/elereathletics/?igshid=1bl1no6sp67as'
								target='_blank'
								rel='noreferrer'
							>
								<FooterIcon src='/images/instagram.svg' />
							</a>
							<a href='https://twitter.com/elereathletics?s=21' target='_blank' rel='noreferrer'>
								<FooterIcon src='/images/twitter.svg' />
							</a>
						</FooterIcons>
					</FooterColumn>
					<FooterColumn>
						<FooterSubTitle>Join our newsletter</FooterSubTitle>
						<FooterEmailBox>
							<FooterEmailInput placeholder='Enter your email' />
							<FooterEmailBtn>
								<img src='/images/arrow-right.svg' />
							</FooterEmailBtn>
						</FooterEmailBox>
					</FooterColumn>
				</FooterGrid>
				<FooterCopyright>&copy; 2020 Elere. All Rights Reserved.</FooterCopyright>
			</Container>
		</FooterContainer>
	)
}

export default Footer
