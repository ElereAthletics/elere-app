import { Container } from '@components/atoms'
import { Footer, Navbar, Notice, Subscribe } from '@components/molecules'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const ShopContainer = styled.div`
	${Container} {
		padding-top: 10rem;
		padding-bottom: 10rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`

const ShopTitle = styled.h2`
	font-size: 4rem;
	margin-bottom: 2.5rem;
`

const ShopDesc = styled.p`
	max-width: 80rem;
	font-size: 2rem;
	color: #535353;
	margin-bottom: 1.8rem;
`

const Follow = styled.p`
	font-size: 2rem;
	color: #535353;
	margin-bottom: 2rem;
`

const WatchDemo = styled.p`
	font-size: 2rem;
	color: #535353;
	margin-bottom: 4.5rem;

	& > * {
		cursor: pointer;
		color: ${({ theme }) => theme.colors.blue};
		text-decoration: underline;
		font-weight: bold;
	}
`

const MediaIcons = styled.div`
	display: flex;
	margin-bottom: 3rem;

	& > * {
		height: 4rem;
		cursor: pointer;
	}

	& > *:not(:last-child) {
		margin-right: 3rem;
	}
`

const Shop = () => {
	return (
		<>
			<Head>
				<title>Elere | Shop</title>
			</Head>
			<Notice />
			<Navbar />
			<ShopContainer>
				<Container>
					<ShopTitle>We&apos;re Not Quite Ready Yet! </ShopTitle>
					<ShopDesc>
						We&apos;re sorry, we&apos;re still working on building this out for you! We really
						appreciate your interest. Sign up for our email and we&apos;ll keep you in loop about our
						launch, pre-orders, how how you can support us and any news about the company.
					</ShopDesc>
					<Follow>You can also follow us here: </Follow>
					<MediaIcons>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='23.133'
							height='46.267'
							viewBox='0 0 23.133 46.267'
						>
							<path
								id='facebook_1_'
								data-name='facebook (1)'
								d='M143.9,8.675h7.229V0H143.9a10.132,10.132,0,0,0-10.121,10.121v4.337H128v8.675h5.783V46.267h8.675V23.133h7.229l1.446-8.675h-8.675V10.121A1.465,1.465,0,0,1,143.9,8.675Z'
								transform='translate(-128)'
								fill='#0627aa'
							/>
						</svg>
						<svg
							id='instagram_1_'
							data-name='instagram (1)'
							xmlns='http://www.w3.org/2000/svg'
							width='42.176'
							height='42.192'
							viewBox='0 0 42.176 42.192'
						>
							<path
								id='Path_10'
								data-name='Path 10'
								d='M21.1,3.8c5.638,0,6.305.025,8.523.124a11.562,11.562,0,0,1,3.915.725,6.525,6.525,0,0,1,2.423,1.574,6.612,6.612,0,0,1,1.583,2.423,11.61,11.61,0,0,1,.725,3.915c.1,2.225.124,2.893.124,8.523s-.025,6.305-.124,8.523a11.562,11.562,0,0,1-.725,3.915,6.525,6.525,0,0,1-1.574,2.423,6.612,6.612,0,0,1-2.423,1.583,11.61,11.61,0,0,1-3.915.725c-2.225.1-2.893.124-8.523.124s-6.305-.025-8.523-.124a11.562,11.562,0,0,1-3.915-.725,6.525,6.525,0,0,1-2.423-1.574A6.612,6.612,0,0,1,4.665,33.53a11.61,11.61,0,0,1-.725-3.915c-.1-2.225-.124-2.893-.124-8.523s.025-6.305.124-8.523a11.562,11.562,0,0,1,.725-3.915A6.525,6.525,0,0,1,6.239,6.231,6.612,6.612,0,0,1,8.663,4.649a11.61,11.61,0,0,1,3.915-.725C14.795,3.824,15.463,3.8,21.1,3.8Zm0-3.8c-5.728,0-6.445.025-8.7.124A15.417,15.417,0,0,0,7.286,1.1a10.3,10.3,0,0,0-3.742,2.44A10.339,10.339,0,0,0,1.1,7.278,15.462,15.462,0,0,0,.124,12.4C.025,14.655,0,15.372,0,21.1s.025,6.445.124,8.7A15.417,15.417,0,0,0,1.1,34.914a10.3,10.3,0,0,0,2.44,3.742,10.314,10.314,0,0,0,3.734,2.431,15.462,15.462,0,0,0,5.118.981c2.25.1,2.967.124,8.7.124s6.445-.025,8.7-.124a15.417,15.417,0,0,0,5.118-.981,10.78,10.78,0,0,0,6.165-6.165,15.462,15.462,0,0,0,.981-5.118c.1-2.25.124-2.967.124-8.7s-.025-6.445-.124-8.7a15.418,15.418,0,0,0-.981-5.118,9.883,9.883,0,0,0-2.415-3.75,10.314,10.314,0,0,0-3.734-2.431A15.462,15.462,0,0,0,29.8.132C27.546.025,26.829,0,21.1,0h0Z'
								transform='translate(0)'
								fill='#0627aa'
							/>
							<path
								id='Path_11'
								data-name='Path 11'
								d='M135.339,124.5a10.839,10.839,0,1,0,10.839,10.839A10.841,10.841,0,0,0,135.339,124.5Zm0,17.869a7.031,7.031,0,1,1,7.031-7.031A7.032,7.032,0,0,1,135.339,142.369Z'
								transform='translate(-114.238 -114.238)'
								fill='#0627aa'
							/>
							<path
								id='Path_12'
								data-name='Path 12'
								d='M367.061,91.13a2.53,2.53,0,1,1-2.53-2.53A2.53,2.53,0,0,1,367.061,91.13Z'
								transform='translate(-332.163 -81.297)'
								fill='#0627aa'
							/>
						</svg>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='47.807'
							height='38.836'
							viewBox='0 0 47.807 38.836'
						>
							<path
								id='twitter_1_'
								data-name='twitter (1)'
								d='M47.707,68.593a19.341,19.341,0,0,1-5.629,1.54,9.862,9.862,0,0,0,4.313-5.424,19.72,19.72,0,0,1-6.227,2.381,9.818,9.818,0,0,0-16.711,8.943A27.832,27.832,0,0,1,3.242,65.783,9.819,9.819,0,0,0,6.276,78.872a9.816,9.816,0,0,1-4.444-1.223v.121A9.807,9.807,0,0,0,9.7,87.386a9.821,9.821,0,0,1-2.586.345,10.088,10.088,0,0,1-1.848-.177,9.837,9.837,0,0,0,9.158,6.815,19.668,19.668,0,0,1-12.183,4.2A19.494,19.494,0,0,1-.1,98.43a27.737,27.737,0,0,0,15.04,4.406c18.036,0,27.9-14.946,27.9-27.9,0-.429-.009-.85-.028-1.27A19.739,19.739,0,0,0,47.707,68.593Z'
								transform='translate(0.1 -64)'
								fill='#0627aa'
							/>
						</svg>
					</MediaIcons>
					<WatchDemo>
						You can watch our demo video right <Link href='/#demo'>here</Link>.
					</WatchDemo>
					<Subscribe />
				</Container>
			</ShopContainer>
			<Footer />
		</>
	)
}

export default Shop
