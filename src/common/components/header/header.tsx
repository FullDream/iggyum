import Image from 'next/image'
import { Layout, Menu } from 'antd'
import logo from 'assets/images/iggy.png'
import Link from 'next/link'
import { useAuthUser } from '@common/hooks'

const navItemsNotAuthorized = [
	{href: '/', label: 'Home'},
	{ label: 'Sign in', href: '/login' },
	{ label: 'Sign up', href: '/register' },
]

const navItemsAuthorized = [
	{href: '/', label: 'Home'},
	{ label: 'New Article', href: '/editor' },
	{ label: 'Profile', href: '/profile' },
]

export const Header = () => {
	const isAuth = useAuthUser()


const menuItems = ( (isAuth ? navItemsAuthorized : navItemsNotAuthorized)).map(({href,  label}) => ({
          key: href,
          label: (<Link href={href} className='block' >{label}</Link>) ,
        }))

	return (
		<Layout.Header className='fixet z-10 w-full flex justify-between h-max bg-white'>
				<Link className='w-[180px] flex gap-2' href='/'>
					<Image  src={logo} width={70} height={70}  alt='iggy - nice dog' />
					<span className='  self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Iggyum</span>
				</Link>

				<Menu
				className='justify-end w-full'
        theme="light"
        mode="horizontal"
        items={menuItems}
      />

		</Layout.Header>
	)
}
