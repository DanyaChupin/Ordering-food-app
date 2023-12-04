import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const CountCart = () => {
	const { items } = useSelector((state: RootState) => state.cart)
	return <div>{items.length}</div>
}

export default CountCart
