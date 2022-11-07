import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.NEXT_PUBLIC_DOMAIN + '/api/',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token
			if (token) {
				headers.set('authorization', `Token ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ['Articles'],
	endpoints: () => ({}),
})
