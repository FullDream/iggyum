import { api } from '.'
import { Article, ArticlesResults } from '../types'

export const articlesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getArticlesList: builder.query<ArticlesResults, { offset?: number | string }>({
			query: (arg) => {
				return {
					url: `/articles`,
					params: { ...arg },
				}
			},
		}),
		getArticleBySlug: builder.query<Article, string>({
			query: (slug) => `/articles/${slug}`,
		}),
	}),
})

export const { useGetArticleBySlugQuery, useGetArticlesListQuery } = articlesApi
