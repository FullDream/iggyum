import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'features/auth/auth.slice'
import tagsReducer from 'features/tags/tags.slice'
import { createWrapper } from 'next-redux-wrapper'
import { api } from '../api'

const makeStore = () =>
	configureStore({
		reducer: {
			[api.reducerPath]: api.reducer,
			auth: authReducer,
			tags: tagsReducer,
		},
		middleware: (gDM) => gDM().concat(api.middleware),
	})

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type RootDispatch = RootStore['dispatch']

export const wrapper = createWrapper<RootStore>(makeStore, { debug: false })
