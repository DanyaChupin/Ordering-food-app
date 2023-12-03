import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { FormProps } from './Form.props'
import { FormEvent } from 'react'
import styles from './Form.module.css'

export type LoginForm = {
	email: {
		value: string
	}
	password: {
		value: string
	}
	name?: {
		value: string
	}
}
const Form = ({ type, sendAuth }: FormProps) => {
	const onClick = (e: FormEvent) => {
		e.preventDefault()
		const target = e.target as typeof e.target & LoginForm
		const { email, password } = target
		sendAuth(email.value, password.value)
		// nav('/')
	}
	return (
		<div className={styles['form-wrapper']}>
			<form className={styles['form']} onSubmit={onClick}>
				<div className={styles['form__input']}>
					<label htmlFor='email' className={styles['input-field']}>
						Ваш email
					</label>
					<Input id='email' name='email' placeholder='Email' type='email' />
				</div>
				<div className={styles['form__input']}>
					<label htmlFor='password' className={styles['input-field']}>
						Ваш пароль
					</label>
					<Input
						id='password'
						name='passoword'
						placeholder='Пароль'
						type='password'
					/>
				</div>
				{type === 'login' ? (
					''
				) : (
					<div className={styles['form__input']}>
						<label htmlFor='password' className={styles['input-field']}>
							Ваше имя
						</label>
						<Input id='name' name='name' placeholder='Имя' type='text' />
					</div>
				)}
				<Button appearence='big'>
					{type === 'login' ? 'Вход' : 'Зарегистрироваться'}
				</Button>
			</form>
			<div className={styles['form__bottom']}>
				{type === 'login' ? 'Нет аккаунта?' : 'Есть аккаунт?'}
				<Link
					className={styles['form__bottom-link']}
					to={type === 'login' ? '/auth/register' : '/auth/login'}
				>
					{type === 'login' ? 'Зарегистрироваться' : 'Вход'}
				</Link>
			</div>
		</div>
	)
}

export default Form
