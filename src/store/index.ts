import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { articlesApi } from './slices/articlesApi.slice'

export const makeStore = () =>
	configureStore({
		reducer: {
			[articlesApi.reducerPath]: articlesApi.reducer,
		},
		middleware: (gDM) => gDM().concat(articlesApi.middleware),
	})

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type RootDispatch = RootStore['dispatch']

export const wrapper = createWrapper<RootStore>(makeStore, { debug: false })
