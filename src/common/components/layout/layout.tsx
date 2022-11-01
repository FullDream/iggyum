import { FC, ReactNode } from 'react'
import { Header } from '../header/header'

interface LayoutProps {
	children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header></Header>
			<main>{children}</main>
		</>
	)
}
