import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Spinner } from 'flowbite-react'

import { useGetArticlesListQuery } from 'api/articles.api'
import { ArticleCard } from '@common/components'
import { Pagination } from 'antd'
import { Tags } from 'features/tags/Tags'

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
			<div className=" mt-5 grid grid-cols-[1fr_250px] gap-6 ">
				<div className="grid gap-3">
					{isLoading && (
						<div className="row-span-full justify-self-center p-12">
							<Spinner size="xl" />
						</div>
					)}

					{data?.articles.map((item) => (
						<ArticleCard key={item.slug} {...item} />
					))}
				</div>

				<Tags />
			</div>
			<Pagination
				className="py-5 flex items-center justify-center"
				disabled={isFetching}
				defaultCurrent={1}
				showSizeChanger={false}
				onChange={onPageChange}
				current={currentPage}
				total={data?.articlesCount}
			/>
		</>
	)
}
