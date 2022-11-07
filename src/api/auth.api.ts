import { Login, Register, UserAuthResponse } from 'types/auth.interface'
import { api } from '.'

const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation<UserAuthResponse, Register>({
			query: (user) => ({
				url: 'users',
				method: 'POST',
				body: { user },
			}),
		}),
		login: builder.mutation<UserAuthResponse, Login>({
			query: (user) => ({
				url: 'users/login',
				method: 'POST',
				body: { user },
			}),
		}),

		protected: builder.mutation<{ message: string }, void>({
			query: () => 'protected',
		}),
	}),
})
export const { useLoginMutation, useRegisterMutation, useProtectedMutation } = authApi
