import { FC } from 'react'
import { AppProps } from 'next/app'
import { Layout } from 'antd'
import { Provider } from 'react-redux'
import store from '@store/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import 'antd/dist/antd.css'
import '../styles/global.css'
import { Header } from '@common/components'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Layout>
				<Header />
				<Layout.Content className="p-5">
					<Component {...pageProps} />
				</Layout.Content>
			</Layout>
			<ToastContainer />
		</Provider>
	)
}

export default MyApp
