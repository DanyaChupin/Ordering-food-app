import { useDispatch } from 'react-redux'
import { AppDispath } from '../../store/store'
import { cartActions } from '../../store/cart.slice'
import { CartItemProps } from './CartItem.props'
import styles from './CartItem.module.css'

const CartItem = (props: CartItemProps) => {
	const dispatch = useDispatch<AppDispath>()
	const increase = () => {
		dispatch(cartActions.add(props.id))
	}
	const descreas = () => {
		dispatch(cartActions.remove(props.id))
	}
	const deleteItem = () => {
		dispatch(cartActions.delete(props.id))
	}
	return (
		<div className={styles['item']}>
			<div
				className={styles['item__image']}
				style={{ backgroundImage: `url(${props.image})` }}
			/>
			<div className={styles['item__description']}>
				<div className={styles['item__name']}>{props.name}</div>
				<div className={styles['item__price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['item__action']}>
				<button className={styles['item__button-decrement']} onClick={descreas}>
					<img src='/decrement.svg' alt='Удалить из корзины' />
				</button>
				<div className={styles['item__action-count']}>{props.count}</div>
				<button className={styles['item__button-increase']} onClick={increase}>
					<img src='/increment.svg' alt='Добавить в корзину' />
				</button>
				<button className={styles['item__button-delete']} onClick={deleteItem}>
					<img src='/delete.svg' alt='Добавить в корзину' />
				</button>
			</div>
		</div>
	)
}

export default CartItem
