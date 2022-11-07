import { RootState } from '@store/index'
import { Tabs } from 'antd'
import { deleteTag } from 'features/tags/tags.slice'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ArticleFeeds: FC<{ children: ReactNode }> = ({ children }) => {
	const router = useRouter()
	const [tabs, setTabs] = useState<any[]>()
	const activeTags = useSelector<RootState, string[]>((state) => state.tags.data)
	const dispatch = useDispatch()

	const initialItems = [
		{
			label: 'Global Feed',
			children: children,
			key: 'MAIN',
			closable: false,
		},
	]

	useEffect(() => {
		setTabs([
			...initialItems,
			...activeTags.map((tag) => ({
				label: tag,
				children,
				key: tag,
				closable: true,
			})),
		])
	}, [activeTags])

	const onChange = (key: string) => {
		if (key === 'MAIN') {
			return router.push('/')
		}
		router.push({ query: { tag: key } })
	}

	const onEdit = (e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => {
		if (action === 'remove' && typeof e == 'string') {
			dispatch(deleteTag(e))
		}
	}

	return (
		<Tabs
			hideAdd
			type="editable-card"
			destroyInactiveTabPane={true}
			onChange={onChange}
			activeKey={(router.query.tag as string) ?? 'MAIN'}
			onEdit={onEdit}
			items={tabs}
		/>
	)
}