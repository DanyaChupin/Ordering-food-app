import { RequireAuth } from '../helpers/RequireAuth'
import { createBrowserRouter, defer } from 'react-router-dom'
import Layout from '../layout/Menu/Layout'
import { Suspense } from 'react'
import Cart from '../pages/Cart/Cart'
import SuccessOrder from '../pages/SuccessOrder/SuccessOrder'
import Product from '../pages/Product/Product'
import axios from 'axios'
import { PREFIX } from '../helpers/API'
import AuthLayout from '../layout/Auth/AuthLayout'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { Error } from '../pages/Error/Error'
import { MenuLoader } from '../loader/menu.loader'

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<MenuLoader />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/success/:id',
				element: <SuccessOrder />,
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: axios
							.get(`${PREFIX}/products/${params.id}`)
							.then(data => data)
							.catch(e => alert(e)),
					})
				},
			},
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
])
