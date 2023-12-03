import { useEffect, useState } from 'react'
import HeaderPage from '../../components/Heading/Heading'
import { PREFIX } from '../../helpers/API'
import { Product } from '../../interfaces/product.interface'
import axios, { AxiosError } from 'axios'
import ProductsList from '../../components/ProductsList/ProductsList'

const Menu = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>()

	const getMenu = async () => {
		try {
			setIsLoading(true)
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`)
			setProducts(data)
			setIsLoading(false)
		} catch (e) {
			setIsLoading(false)
			if (e instanceof AxiosError) {
				setError(e.message)
			}
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
			{error && <>{error}</>}
			{!isLoading && <ProductsList products={products} />}
			{isLoading && <>Loading...</>}
		</>
	)
}
export default Menu
