import { api } from '.'
import { Article, ArticleFavoriteResponce, ArticlesResults } from '../types'

export const articlesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getArticlesList: builder.query<
			ArticlesResults,
			{ offset?: number | string; tag?: number | string }
		>({
			query: (arg) => {
				const offset = arg.offset || 0
				return {
					url: `/articles`,
					params: { offset, ...arg },
				}
			},
			providesTags: ['Articles'],
		}),
		getArticleBySlug: builder.query<Article, string>({
			query: (slug) => `/articles/${slug}`,
		}),
		favoriteArticleBySlug: builder.mutation<
			ArticleFavoriteResponce,
			{ slug: string; method: 'POST' | 'DELETE' }
		>({
			query: ({ slug, method }) => ({ url: `articles/${slug}/favorite`, method }),
			invalidatesTags: ['Articles'],
		}),
	}),
})

export const {
	useGetArticleBySlugQuery,
	useGetArticlesListQuery,
	useFavoriteArticleBySlugMutation,
} = articlesApi

export const { getArticlesList } = articlesApi.endpoints
