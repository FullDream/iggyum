import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type AuthState = {
	token: string | null
}

const auth = createSlice({
	name: 'auth',
	initialState: { token: null } as AuthState,
	reducers: {
		setCredentials: (state, action: PayloadAction<string>) => {
			state.token = action.payload
		},
	},
})

export const { setCredentials } = auth.actions

export default auth.reducer
