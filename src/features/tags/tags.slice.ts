import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const tagsSlice = createSlice({
	name: 'tags',
	initialState: { data: [] } as { data: string[] },
	reducers: {
		addTag: (state, action: PayloadAction<string>) => {
			state.data = [...state.data, action.payload]
		},
		deleteTag: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter((item) => item !== action.payload)
		},
		deleteAllTags: (state) => {
			state.data = []
		},
	},
})

export const { addTag, deleteTag, deleteAllTags } = tagsSlice.actions

export default tagsSlice.reducer
