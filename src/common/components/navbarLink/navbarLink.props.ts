import { AnchorHTMLAttributes } from 'react'

export interface NavbarLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
	href: string
}
