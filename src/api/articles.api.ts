import { api } from '.'
import { Article, ArticleFavoriteResponce, ArticlesResults } from '../types'

export const articlesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getArticlesList: builder.query<ArticlesResults, { offset?: number | string }>({
			query: (arg) => {
				return {
					url: `/articles`,
					params: { ...arg },
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
