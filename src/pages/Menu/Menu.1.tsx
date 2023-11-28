import { useEffect, useState } from 'react'
import HeaderPage from '../../components/HeaderPage/Heading'
import ProductCard from '../../components/ProductCard/ProductCard'
import { PREFIX } from '../../helpers/API'
import { Product } from '../../interfaces/product.interface'
import axios from 'axios'

export const Menu = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const getMenu = async () => {
		try {
			setIsLoading(true)
			await new Promise<void>(resolve => {
				setTimeout(() => {
					resolve()
				}, 2000)
			})

			const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data)
			setIsLoading(false)
		} catch (e) {
			setIsLoading(false)
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
			{!isLoading &&
				products.map(product => (
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
			{isLoading && <>Loading...</>}
		</>
	)
}
