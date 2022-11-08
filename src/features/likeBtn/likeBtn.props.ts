import { ButtonHTMLAttributes } from 'react'

export interface LikeBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	favorited: boolean
	favoritesCount?: number
	slug: string
}
