import { useRouter } from 'next/router'
import { Spinner } from 'flowbite-react'

import { useGetArticlesListQuery } from 'api/articles.api'
import { ArticleCard } from '@common/components'
import { Pagination } from 'antd'
import { Tags } from 'features/tags/Tags'
import { ArticleFeeds } from 'features/articleFeeds/ArticleFeeds'
import { useEffect } from 'react'

export default function Home() {
	const router = useRouter()
	const { data, isLoading, isFetching } = useGetArticlesListQuery({ ...router.query })

	console.log(isLoading)

	useEffect(() => {}, [])

	const current = (Number(router.query.offset) || 0) / 10 + 1

	const onPageChange = (page: number) => {
		router.push({ query: { ...router.query, offset: (page - 1) * 10 } })
	}

	return (
		<>
			<div className=" mt-5 grid grid-cols-[1fr_250px] gap-6 ">
				<ArticleFeeds>
					<div className="grid gap-3 col-start-1 col-end-2">
						{isLoading && (
							<div className="row-span-full justify-self-center p-12">
								<Spinner size="xl" />
							</div>
						)}

						{data?.articles.map((item) => (
							<ArticleCard key={item.slug} {...item} />
						))}
					</div>
				</ArticleFeeds>

				<Tags className="h-max col-start-2 row-start-1 row-end-3" />
			</div>
			<Pagination
				className="py-5 flex items-center justify-center"
				disabled={isFetching}
				defaultCurrent={1}
				showSizeChanger={false}
				onChange={onPageChange}
				current={current}
				total={data?.articlesCount}
			/>
		</>
	)
}
