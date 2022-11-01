import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { Article, ArticlesResults } from '../../types'

export const articlesApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_DOMAIN + '/api',
	}),
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) {
			return action.payload[reducerPath]
		}
	},
	tagTypes: [],
	endpoints: (builder) => ({
		getArticlesList: builder.query<
			ArticlesResults[],
			{ offset?: number; sort?: string | string[] }
		>({
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

export const {
	useGetArticleBySlugQuery,
	useGetArticlesListQuery,
	util: { getRunningOperationPromises },
} = articlesApi

export const { getArticleBySlug, getArticlesList } = articlesApi.endpoints
