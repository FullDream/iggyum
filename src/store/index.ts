import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/auth/auth.slice'
import { api } from '../api'

const makeStore = () =>
	configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			auth: authReducer,
		},
		middleware: (gDM) => gDM().concat(api.middleware),
	})

const store = makeStore()
export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type RootDispatch = RootStore['dispatch']

export default store
