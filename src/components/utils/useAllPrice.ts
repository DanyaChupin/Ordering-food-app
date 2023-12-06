import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useCallback, useMemo, useState } from 'react'
import axios from 'axios'
import { Product } from '../../interfaces/product.interface'
import { PREFIX } from '../../helpers/API'

export const useAllPrice = () => {
	const [cartProducts, setCartProducts] = useState<Product[]>([])

	const { items } = useSelector((state: RootState) => state.cart)

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`)
		return data
	}

	const loadAllItems = useCallback(async () => {
		const res = await Promise.all(items.map(item => getItem(item.id)))
		setCartProducts(res)
	}, [items])

	const allProductsCount = items.reduce((acc, item) => acc + item.count, 0)

	const allPriceCount = useMemo(() => {
		return items
			.map(i => {
				const product = cartProducts.find(p => p.id == i.id)
				if (!product) {
					return 0
				}
				return i.count * product.price
			})
			.reduce((acc, i) => (acc += i), 0)
	}, [cartProducts, items])

	return {
		items,
		allPriceCount,
		loadAllItems,
		cartProducts,
		setCartProducts,
		allProductsCount,
	}
}
