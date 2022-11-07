import { FC } from 'react'
import { LikeBtnProps } from './likeBtn.props'
import cn from 'classnames'
import { useFavoriteArticleBySlugMutation } from 'api/articles.api'
import { useRouter } from 'next/router'
import { useAuthUser } from '@common/hooks'

export const LikeBtn: FC<LikeBtnProps> = ({ slug, favorited, favoritesCount, className }) => {
	const [sendLike, { isLoading }] = useFavoriteArticleBySlugMutation()
	const router = useRouter()
	const isAuth = useAuthUser()

	const onLikeClick = async () => {
		if (!isAuth) return router.push('/login')

		await sendLike({ slug, method: favorited ? 'DELETE' : 'POST' })
	}
	return (
		<button
			onClick={onLikeClick}
			className={cn(
				'border-blue-100 border-2 flex gap-2 justify-center p-2 h-max',
				'hover:shadow-lg',
				'text-blue-500',
				'transition-all',
				{ 'text-red-500': favorited, 'opacity-60': isLoading },
				className,
			)}
			disabled={isLoading}>
			{favoritesCount}
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
			</svg>
		</button>
	)
}
