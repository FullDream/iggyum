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

export interface FavoritedBy {
	id: number
	email: string
	username: string
	password: string
	image: string
	bio: string
	demo: boolean
}

export interface ArticleFavoriteResponce extends Article {
	id: number
	authorId: number
	tagList: string[]
	favoritedBy: FavoritedBy[]
}
