import { Container } from '@mui/material'
import { Box } from '@mui/system'
import { wrapper } from '@store/index'
import { getArticlesList, getRunningOperationPromises } from '@store/slices/articlesApi.slice'

export default function Home() {
	return (
		<>
			<Box bgcolor="green">
				<Container>
					<h1 style={{ textAlign: 'center' }}>conduit</h1>
				</Container>
			</Box>
			<Container> ddf</Container>
		</>
	)
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
	await store.dispatch(getArticlesList.initiate({ offset: 10, ...context.query }))

	await Promise.all(getRunningOperationPromises())

	return {
		props: {},
	}
})
