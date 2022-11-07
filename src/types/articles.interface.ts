import { Profile } from './user.interface'

export interface Article {
	slug: string
	title: string
	description: string
	body: string
	tagList: string[]
	createdAt: Date
	updatedAt: Date
	favorited: boolean
	favoritesCount: number
	author: Profile
}

export interface ArticlesResults {
	articles: Article[]
	articlesCount: number
}
