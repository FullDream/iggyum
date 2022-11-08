import { api } from 'api'

const tagsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTagsList: builder.query<string[], void>({
			query: () => {
				return {
					url: `/tags`,
				}
			},
			transformResponse: (res: { tags: string[] }) => res.tags,
		}),
	}),
})

export const { useGetTagsListQuery } = tagsApi

export const { getTagsList } = tagsApi.endpoints
