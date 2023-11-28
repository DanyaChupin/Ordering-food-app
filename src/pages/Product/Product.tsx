import { useLoaderData } from 'react-router-dom'
import { Product } from '../../interfaces/product.interface'

const Product = () => {
	const data = useLoaderData() as Product
	return <div>{data.name}</div>
}

export default Product
