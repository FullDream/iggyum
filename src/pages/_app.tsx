import { FC } from 'react'
import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import store from '@store/index'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import { Layout } from '../common/components'
import '../styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<ToastContainer />
		</Provider>
	)
}

export default MyApp
