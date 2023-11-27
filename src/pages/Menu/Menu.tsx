import HeaderPage from '../../components/Heading/Heading'
import ProductCard from '../../components/ProductCard/ProductCard'

const Menu = () => {
	return (
		<div>
			<HeaderPage title='Меню' withSearch={true} />
			<ProductCard
				id={1}
				title='Наслаждение'
				description='Салямиб руккола, помидоры,оливки'
				rating={4.5}
				price={300}
				img='/demo.png'
			/>
		</div>
	)
}
export default Menu
