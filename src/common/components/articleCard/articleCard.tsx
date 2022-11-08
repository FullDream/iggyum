import { FC } from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
import { Card, Button } from 'flowbite-react'

import { ArticleCardProps } from './articleCard.props'
import { LikeBtn } from '../../../features/likeBtn/LikeBtn'
import Link from 'next/link'

export const ArticleCard: FC<ArticleCardProps> = ({
	author,
	title,
	createdAt,
	description,
	className,
	slug,
	...props
}) => {
	return (
		<Card className={className}>
			<div className="grid grid-cols-[auto_1fr_1fr] gap-3">
				<Image src={author.image} quality={100} width={50} height={50} alt={author.username} />
				<div className="self-start">
					<h3>{author.username}</h3>
					<time>{format(new Date(createdAt), 'dd.mm.yyyy')}</time>
				</div>
				<LikeBtn className="justify-self-end" slug={slug} {...props} />
			</div>
			<h2>{title}</h2>
			<p className="opacity-80">{description}</p>
			<Link className="flex justify-end" href={slug}>
				<Button>
					Read more
					<svg
						className="ml-2 -mr-1 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</Link>
		</Card>
	)
}
