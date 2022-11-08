import { RootState } from '@store/index'
import { Tabs } from 'antd'
import { addTag, deleteTag } from 'features/tags/tags.slice'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ArticleFeeds = () => {
	const router = useRouter()
	const [tabs, setTabs] = useState<any[]>()

	const activeTags = useSelector<RootState, string[]>((state) => state.tags.data)
	const dispatch = useDispatch()

	const initialItems = [
		{
			label: 'Global Feed',
			key: 'MAIN',
			closable: false,
		},
	]
	useEffect(() => {
		if (!router.isReady) return
		if (router.query.tag) {
			dispatch(addTag(router.query.tag as string))
		}
	}, [router.isReady])

	useEffect(() => {
		setTabs([
			...initialItems,
			...activeTags.map((tag) => ({
				label: tag,
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
			activeKey={(router.query.tag as string) || 'MAIN'}
			onEdit={onEdit}
			items={tabs}
		/>
	)
}
