import { ProductCardProps } from './ProductsCard.props'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

const ProductCard = ({
	title,
	img,
	id,
	description,
	price,
	rating,
}: ProductCardProps) => {
	return (
		<Link to={`/product/${id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div
					className={styles['card__head']}
					style={{ backgroundImage: `url(${img})` }}
				>
					<div className={styles['card__price']}>
						{price}
						<span className={styles['price-currency']}>₽</span>
					</div>
					<button className={styles['card__button']}>
						<img src='/card-icon.svg' alt='Добавить в корзину' />
					</button>
					<div className={styles['card__rating']}>
						{rating}
						<img src='/star.svg' alt='ретинг' />
					</div>
				</div>
				<div className={styles['card__footer']}>
					<div className={styles['card__title']}>{title}</div>
					<div className={styles['card__description']}>{description}</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
