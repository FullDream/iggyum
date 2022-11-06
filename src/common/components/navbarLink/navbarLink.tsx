import { useRouter } from 'next/router'
import { FC, MouseEvent } from 'react'
import { Navbar } from 'flowbite-react'
import { NavbarLinkProps } from './navbarLink.props'

export const NavbarLink: FC<NavbarLinkProps> = ({ children, href, className }) => {
	const router = useRouter()
	const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
		event.preventDefault()
		router.push(href)
	}
	return (
		<Navbar.Link
			className={className}
			href={href}
			onClick={handleClick}
			active={router.asPath === href}>
			{children}
		</Navbar.Link>
	)
}
