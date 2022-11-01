export interface Author {
	username: string
	bio?: any
	image: string
	following: boolean
}

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
	author: Author
}

export interface ArticlesResults {
	articles: Article[]
	articlesCount: number
}
