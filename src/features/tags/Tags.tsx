import { RootState } from '@store/index'
import { Tag, Card, Button } from 'antd'
import { useGetTagsListQuery } from 'api/tags.api'
import { useDispatch, useSelector } from 'react-redux'
import { addTag, deleteAllTags, deleteTag } from './tags.slice'
import { UndoOutlined } from '@ant-design/icons'
export const Tags = () => {
	const { data, isLoading } = useGetTagsListQuery()
	const dispatch = useDispatch()

	const checkedData = useSelector<RootState, string[]>((state) => state.tags.data)

	const onPressTag = (tag: string, checked: boolean) => {
		checked ? dispatch(addTag(tag)) : dispatch(deleteTag(tag))
	}

	return (
		<Card
			title={
				<div className="flex justify-between">
					Popular Tags <Button onClick={() => dispatch(deleteAllTags())} icon={<UndoOutlined />} />
				</div>
			}
			loading={isLoading}
			className="h-max">
			{data?.map((item) => (
				<Tag.CheckableTag
					onChange={(checked) => onPressTag(item, checked)}
					className="my-1 border-1 border-gray-300"
					checked={!!checkedData.find((tag) => tag === item)}
					key={item}>
					{item}
				</Tag.CheckableTag>
			))}
		</Card>
	)
}
