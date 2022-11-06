import { Navbar } from 'flowbite-react'
import Image from 'next/image'

import logo from 'assets/images/iggy.png'
import Link from 'next/link'
import { NavbarLink } from '..'

const navItems = [
	{ text: 'Home', href: '/' },
	{ text: 'Sign in', href: '/login' },
	{ text: 'Sign up', href: '/register' },
]

export const Header = () => {
	return (
		<Navbar fluid={true} rounded={true}>
			<Link className="flex gap-2" href="/">
				<Image width={80} height={80} src={logo} alt=" iggy - nice dog" />
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Iggyum
				</span>
			</Link>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{navItems.map(({ href, text }) => (
					<NavbarLink key={href} href={href}>
						{text}
					</NavbarLink>
				))}
			</Navbar.Collapse>
		</Navbar>
	)
}
