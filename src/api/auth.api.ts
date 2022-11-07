import { api } from '.'
import { UserWithToken } from '@types/user.interface'

export interface UserResponse {
	user: UserWithToken
}

export interface LoginRequest {
	user: {
		email: string
		password: string
	}
}

const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<UserResponse, LoginRequest>({
			query: (data) => ({
				url: 'users/login',
				method: 'POST',
				body: data,
			}),
		}),
		protected: builder.mutation<{ message: string }, void>({
			query: () => 'protected',
		}),
	}),
})
export const { useLoginMutation, useProtectedMutation } = authApi
