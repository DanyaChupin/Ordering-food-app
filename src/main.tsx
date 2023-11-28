import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart } from './pages/cart/Cart.tsx'
import Menu from './pages/Menu/Menu.tsx'
import { Layout } from './layout/Menu/Layout.tsx'
import { Error } from './pages/Error/Error.tsx'
import Product from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Menu />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					await new Promise<void>(resolve => {
						setTimeout(() => {
							resolve()
						}, 2000)
					})
					const { data } = await axios.get(`${PREFIX}/product1s/${params.id}`)

					return data
				},
			},
		],
	},
	{
		path: '*',
		element: <Error />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
