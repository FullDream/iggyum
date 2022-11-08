import { FC } from 'react'
import { AppProps } from 'next/app'
import { Layout } from 'antd'
import { wrapper } from '@store/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import 'antd/dist/antd.css'
import '../styles/global.css'
import { Header } from 'features/header/Header'
import { Provider } from 'react-redux'

const MyApp: FC<AppProps> = ({ Component, ...rest }: AppProps) => {
	const { store, props } = wrapper.useWrappedStore(rest)
	return (
		<Provider store={store}>
			<Layout>
				<Header />
				<Layout.Content className="p-5">
					<Component {...props.pageProps} />
				</Layout.Content>
			</Layout>
			<ToastContainer />
		</Provider>
	)
}

export default MyApp
