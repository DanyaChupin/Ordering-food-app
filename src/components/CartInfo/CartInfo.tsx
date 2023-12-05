import { CartInfoProps } from './CartInfo.props'
import styles from './CartInfo.module.css'

const CartInfo = (props: CartInfoProps) => {
	return (
		<div className={styles['cart-info']}>
			<div className={styles['cart-info__title']}>
				{props.title}
				{props.allItemsCount && (
					<span
						className={styles['cart-info__all']}
					>{`(${props.allItemsCount})`}</span>
				)}
			</div>
			<div className={styles['cart-info__price']}>{props.price}&nbsp;₽</div>
		</div>
	)
}

export default CartInfo
