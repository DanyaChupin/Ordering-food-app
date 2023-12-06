import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import styles from './SuccessOrder.module.css'

const SuccessOrder = () => {
	const nav = useNavigate()
	const { id } = useParams()
	return (
		<div className={styles['success']}>
			<img
				className={styles['success__img']}
				src='/success.png'
				alt='Заказ оформлен'
				draggable={false}
			/>
			<h1 className={styles['success__info']}>
				Ваш заказ оформлен, номер вашего заказа:
				<span className={styles['success__count']}>{id}</span>
			</h1>
			<div>
				<Button appearence='big' onClick={() => nav('/')}>
					Сделать новый
				</Button>
			</div>
		</div>
	)
}

export default SuccessOrder
