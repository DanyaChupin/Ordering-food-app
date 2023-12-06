import { Product } from './product.interface'

export interface cartInfoSuccess {
	createdAt: string
	data: { products: Product[] }
	id: number
	status: string
	userId: 172
}
