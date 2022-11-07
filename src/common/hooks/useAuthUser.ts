import { useSelector } from 'react-redux'
import { selectToken } from 'features/auth/auth.slice'

export const useAuthUser = () => {
	const token: string | null = useSelector(selectToken)

	return !!token
}
