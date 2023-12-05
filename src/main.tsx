import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import Cart from './pages/cart/Cart.tsx'
import Layout from './layout/Menu/Layout.tsx'
import { Error } from './pages/Error/Error.tsx'
import Product from './pages/Product/Product.tsx'
import axios from 'axios'
import { PREFIX } from './helpers/API.ts'
import './index.css'
import AuthLayout from './layout/Auth/AuthLayout.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'
import { RequireAuth } from './helpers/RequireAuth.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

const Menu = lazy(() => import('./pages/Menu/Menu.tsx'))

const router = createBrowserRouter([
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
						<Menu />
					</Suspense>
				),
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

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
