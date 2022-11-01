import { wrapper } from '@store/index'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { Layout } from '../common/components'
import '../styles/global.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default wrapper.withRedux(MyApp)
