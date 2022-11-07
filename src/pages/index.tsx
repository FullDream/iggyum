import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Pagination, Spinner } from 'flowbite-react'
import cn from 'classnames'

import { useGetArticlesListQuery } from 'api/articles.api'
import { ArticleCard } from '@common/components'

const checkOffset = (number?: number) => {
	if (!number) return 0
	return (+number - 1) * 10
}

export default function Home() {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [offset, setOffset] = useState<number>(0)

	const router = useRouter()
	const { data, isLoading, isFetching } = useGetArticlesListQuery({ offset })

	useEffect(() => {
		if (router.query.page) {
			const numberPageQuery = Number(router.query.page)

			setCurrentPage(numberPageQuery)
			setOffset(checkOffset(numberPageQuery))
		}
	}, [router.query.page])

	const onPageChange = (page: number) => {
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
				{isLoading && (
					<div className="row-span-full justify-self-center p-12">
						<Spinner size="xl" />
					</div>
				)}

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
