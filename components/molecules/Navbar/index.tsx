import { Container } from '@components/atoms'
import { NavbarWrap, NavLogo, NavSearch, NavSearchInput, NavSearchBtn, NavLink, NavLinksWrap } from './styles'

const Navbar = () => {
	return (
		<NavbarWrap>
			<Container>
				<NavLogo>elere</NavLogo>
				<NavLinksWrap>
					<NavLink>home</NavLink>
					<NavLink>about</NavLink>
					<NavLink>bundle</NavLink>
					<NavLink>shop</NavLink>
				</NavLinksWrap>
				<NavSearch>
					<NavSearchInput placeholder='Search...' />
					<NavSearchBtn>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='13.729'
							height='13.729'
							viewBox='0 0 13.729 13.729'
						>
							<path
								id='search'
								d='M14.4,10.9a5.811,5.811,0,1,0-1.025,1.025l.031.033,3.082,3.082a.726.726,0,1,0,1.027-1.027l-3.082-3.082ZM12.893,4.255a4.359,4.359,0,1,1-6.164,0A4.359,4.359,0,0,1,12.893,4.255Z'
								transform='translate(-4 -1.525)'
								fill='#010822'
								fillRule='evenodd'
								opacity='0.755'
							/>
						</svg>
					</NavSearchBtn>
				</NavSearch>
			</Container>
		</NavbarWrap>
	)
}

export default Navbar
