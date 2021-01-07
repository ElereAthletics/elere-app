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
						<img src='/images/search.svg' />
					</NavSearchBtn>
				</NavSearch>
			</Container>
		</NavbarWrap>
	)
}

export default Navbar
