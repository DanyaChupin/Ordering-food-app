import { useEffect, useState } from 'react'
import HeaderPage from '../../components/Heading/Heading'
import ProductCard from '../../components/ProductCard/ProductCard'
import { PREFIX } from '../../helpers/API'
import { Product } from '../../interfaces/product.interface'
import axios from 'axios'

const Menu = () => {
	const [products, setProducts] = useState<Product[]>([])

	const getMenu = async () => {
		try {
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data)
		} catch (e) {
			console.error(e)
			return
		}
	}
	useEffect(() => {
		getMenu()
	}, [])
	return (
		<>
			<HeaderPage title='Меню' withSearch={true} />
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
		</>
	)
}
export default Menu
