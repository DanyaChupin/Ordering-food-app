import { useSelector } from 'react-redux'
import Heading from '../../components/Heading/Heading'
import { RootState } from '../../store/store'
import CartItem from '../../components/CartItem/CartItem'
import { useCallback, useEffect, useState } from 'react'
import { Product } from '../../interfaces/product.interface'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'

const Cart = () => {
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
	useEffect(() => {
		loadAllItems()
	}, [items, loadAllItems])

	return (
		<>
			<Heading title='Корзина' />
			{cartProducts.length === 0 ? (
				<div>Карзина пуста</div>
			) : (
				items.map(i => {
					const product = cartProducts.find(p => p.id === i.id)
					if (!product) {
						return
					}
					return <CartItem count={i.count} {...product} />
				})
			)}
		</>
	)
}

export default Cart
