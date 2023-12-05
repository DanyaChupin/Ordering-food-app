import { Product } from '../../interfaces/product.interface'

export interface CartItemProps extends Product {
	count: number
}
