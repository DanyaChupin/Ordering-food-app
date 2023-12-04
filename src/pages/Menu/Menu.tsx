import { ChangeEvent, useEffect, useState } from 'react'
import HeaderPage from '../../components/Heading/Heading'
import { PREFIX } from '../../helpers/API'
import { Product } from '../../interfaces/product.interface'
import axios, { AxiosError } from 'axios'
import ProductsList from '../../components/ProductsList/ProductsList'
import SearchInput from '../../components/SearchInput/SearchInput'

const Menu = () => {
	const [products, setProducts] = useState<Product[]>([])
	const [searchValue, setSearchValue] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | undefined>()
	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true)
			const { data } = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name,
				},
			})
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
		getMenu(searchValue)
	}, [searchValue])

	return (
		<>
			<HeaderPage title='Меню'>
				<SearchInput updateFilter={updateFilter} />
			</HeaderPage>
			{error && <>{error}</>}
			{!isLoading && products.length > 0 && (
				<ProductsList products={products} />
			)}
			{isLoading && <>Loading...</>}
			{!isLoading && products.length === 0 && (
				<>Ничего не найдена по данному запросу...</>
			)}
		</>
	)
}
export default Menu
