import { Container } from '@components/atoms'
import { NavbarWrap, NavLogo, NavSearch, NavSearchInput, NavSearchBtn, NavLink, NavLinksWrap } from './styles'
import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {
	className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
	return (
		<NavbarWrap className={className}>
			<Container>
				<Link href='/'>
					<NavLogo>elere</NavLogo>
				</Link>
				<NavLinksWrap>
					<Link href='/'>
						<NavLink>home</NavLink>
					</Link>
					<Link href='/about'>
						<NavLink>about</NavLink>
					</Link>
					<Link href='/bundle'>
						<NavLink>bundle</NavLink>
					</Link>
					<Link href='/shop'>
						<NavLink>shop</NavLink>
					</Link>
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
