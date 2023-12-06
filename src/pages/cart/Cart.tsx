import { useDispatch, useSelector } from 'react-redux'
import Heading from '../../components/Heading/Heading'
import { AppDispath, RootState } from '../../store/store'
import CartItem from '../../components/CartItem/CartItem'
import { useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { PREFIX } from '../../helpers/API'
import styles from './Cart.module.css'
import CartInfo from '../../components/CartInfo/CartInfo'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { cartActions } from '../../store/cart.slice'
import { cartInfoSuccess } from '../../interfaces/cartInfo.interface'
import { useAllPrice } from '../../components/utils/useAllPrice'

const Cart = () => {
	const { jwt } = useSelector((state: RootState) => state.user)
	const nav = useNavigate()
	const DELIVER_FEE = 169
	const { items, allPriceCount, allProductsCount, cartProducts, loadAllItems } =
		useAllPrice()
	const dispatch = useDispatch<AppDispath>()

	useEffect(() => {
		loadAllItems()
	}, [items, loadAllItems])

	const checkout = async () => {
		try {
			const { data } = await axios.post<cartInfoSuccess>(
				`${PREFIX}/order`,
				{
					prudcts: cartProducts,
				},
				{
					headers: {
						Authorization: `Bearer ${jwt}`,
					},
				}
			)
			dispatch(cartActions.clear())
			nav(`/success/${data.id}`)
			return data
		} catch (e) {
			if (e instanceof AxiosError) {
				throw new Error(e.message)
			}
		}
	}
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
						<div className={styles['cart__button']}>
							<Button appearence='big' onClick={checkout}>
								Оформить
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Cart
