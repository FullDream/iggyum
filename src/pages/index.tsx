import { ArticleCard } from '@common/components'
import { wrapper } from '@store/index'

import { Pagination } from 'flowbite-react'
import {
	getArticlesList,
	getRunningOperationPromises,
	useGetArticlesListQuery,
} from '@store/slices/articlesApi.slice'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const checkOffset = (number?: string) => {
	if (!number) return 0
	return (+number - 1) * 10
}

export default function Home() {
	const router = useRouter()
	const [offset, setOffset] = useState(0)

	const { data } = useGetArticlesListQuery({ offset })
	const [currentPage, setCurrentPage] = useState<number>(1)

	useEffect(() => {}, [])

	const onPageChange = (page: number) => {
		setOffset((state) => (state = checkOffset(page)))
		setCurrentPage((state) => (state = page))
		router.push({ query: { page } })
	}

	return (
		<>
			<div>
				<div>
					<h1 style={{ textAlign: 'center' }}>conduit</h1>
				</div>
			</div>
			<div className="md:container md:mx-auto grid gap-3">
				{data?.articles.map((item) => (
					<ArticleCard key={item.slug} {...item} />
				))}
			</div>
			<div className="flex items-center justify-center text-center">
				<Pagination
					currentPage={currentPage}
					onPageChange={onPageChange}
					showIcons={true}
					totalPages={17}
				/>
			</div>
		</>
	)
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
	await store.dispatch(getArticlesList.initiate({ offset: checkOffset(context.query.page) }))

	await Promise.all(getRunningOperationPromises())

	return {
		props: {},
	}
})
