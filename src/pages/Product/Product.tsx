import { Await, useLoaderData } from 'react-router-dom'
import { Product } from '../../interfaces/product.interface'
import { Suspense } from 'react'

const Product = () => {
	const data = useLoaderData() as { data: Product }
	return (
		<Suspense fallback={'Загружа...'}>
			<Await resolve={data.data}>
				{({ data }: { data: Product }) => <>{data.name}</>}
			</Await>
		</Suspense>
	)
}

export default Product
