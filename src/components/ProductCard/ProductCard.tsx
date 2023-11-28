import { Link } from 'react-router-dom'
import { Product } from '../../interfaces/product.interface'
import styles from './ProductCard.module.css'

const ProductCard = ({
	id,
	image,
	ingredients,
	name,
	price,
	rating,
}: Product) => {
	return (
		<Link to={`/product/${id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div
					className={styles['card__head']}
					style={{ backgroundImage: `url(${image})` }}
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
					<div className={styles['card__title']}>{name}</div>
					<div className={styles['card__ing-wrapper']}>
						{ingredients.map(ing => (
							<div key={ing} className={styles['card__description']}>
								{ing}
							</div>
						))}
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProductCard
