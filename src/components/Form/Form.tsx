import { Link, useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { FormProps } from './Form.props'
import styles from './Form.module.css'
import { FormEvent } from 'react'

const Form = ({ type }: FormProps) => {
	const nav = useNavigate()
	const onClick = (e: FormEvent) => {
		e.preventDefault()
		nav('/')
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
