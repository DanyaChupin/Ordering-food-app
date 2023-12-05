import { useSelector } from 'react-redux'
import Heading from '../../components/Heading/Heading'
import { RootState } from '../../store/store'
import CartItem from '../../components/CartItem/CartItem'
import { useCallback, useEffect, useState } from 'react'
import { Product } from '../../interfaces/product.interface'
import axios from 'axios'
import { PREFIX } from '../../helpers/API'
import styles from './Cart.module.css'
import CartInfo from '../../components/CartInfo/CartInfo'
import Button from '../../components/Button/Button'

const Cart = () => {
	const [cartProducts, setCartProducts] = useState<Product[]>([])

	const DELIVER_FEE = 169
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

	const allProductsCount = items.reduce((acc, item) => acc + item.count, 0)
	const allPriceCount = items
		.map(i => {
			const product = cartProducts.find(p => p.id == i.id)
			if (!product) {
				return 0
			}
			return i.count * product.price
		})
		.reduce((acc, i) => (acc += i), 0)
	return (
		<>
			<Heading title='Корзина' />
			{items.length === 0 ? (
				<div>Карзина пуста</div>
			) : (
				<div className={styles['cart']}>
					<div className={styles['cart__wrapper']}>
						{items.map(i => {
							const product = cartProducts.find(p => p.id === i.id)
							if (!product) {
								return
							}
							return <CartItem key={i.id} count={i.count} {...product} />
						})}
					</div>

					<div className={styles['cart__info']}>
						<CartInfo title='Доставка' price={DELIVER_FEE} />
						<CartInfo
							title='Итог'
							price={allPriceCount + DELIVER_FEE}
							allItemsCount={allProductsCount}
						/>

						<Button appearence='big'>Оформить</Button>
					</div>
				</div>
			)}
		</>
	)
}

export default Cart
