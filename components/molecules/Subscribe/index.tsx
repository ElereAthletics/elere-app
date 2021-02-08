import styled from 'styled-components'

const EmailBox = styled.form`
	display: flex;
	margin-bottom: 6rem;
`

const EmailInput = styled.input.attrs(() => ({
	placeholder: 'Enter your email',
	type: 'email',
}))`
	border: 1px solid #bebebe;
	font-size: 2.6rem;
	outline: none;
	padding: 1rem 1.5rem;
`

const EmailBtn = styled.button.attrs(() => ({
	type: 'submit',
}))`
	background-color: ${({ theme }) => theme.colors.blue};
	border: none;
	outline: none;
	color: white;
	font-size: 2.6rem;
	padding-left: 1rem;
	padding-right: 1rem;
	cursor: pointer;
`

const Subscribe = () => {
	return (
		<EmailBox>
			<EmailInput />
			<EmailBtn>Subscribe</EmailBtn>
		</EmailBox>
	)
}

export default Subscribe
