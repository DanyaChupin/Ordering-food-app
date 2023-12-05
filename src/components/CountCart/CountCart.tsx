import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import styles from './CountCart.module.css'

const CountCart = () => {
	const { items } = useSelector((state: RootState) => state.cart)
	return (
		items.length !== 0 && (
			<span className={styles['count-cart']}>{items.length}</span>
		)
	)
}

export default CountCart
