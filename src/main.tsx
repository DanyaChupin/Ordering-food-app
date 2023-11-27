import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart } from './pages/cart/Cart.tsx'
import Menu from './pages/Menu/Menu.tsx'
import './index.css'
import { Layout } from './layout/Menu/Layout.tsx'
import { Error } from './pages/Error/Error.tsx'
import Product from './pages/Product/Product.tsx'
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
