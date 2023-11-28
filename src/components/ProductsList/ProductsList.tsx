import ProductCard from '../ProductCard/ProductCard'
import { ProductsListProps } from './ProductsList.props'
import styles from './ProductsList.module.css'

const ProductsList = ({ products }: ProductsListProps) => {
	return (
		<div className={styles['products-list']}>
			{products.map(product => (
				<ProductCard
					key={product.id}
					id={product.id}
					name={product.name}
					ingredients={product.ingredients}
					rating={product.rating}
					price={product.price}
					image={product.image}
				/>
			))}
		</div>
	)
}

export default ProductsList
