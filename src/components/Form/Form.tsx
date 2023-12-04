import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { FormProps } from './Form.props'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispath, RootState } from '../../store/store'
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage'
import { useEffect } from 'react'
import { userActions } from '../../store/user.slice'
import styles from './Form.module.css'

const Form = ({ type, sendAuth }: FormProps) => {
	const dispatch = useDispatch<AppDispath>()
	useEffect(() => {
		dispatch(userActions.clearAuthError())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const { authError } = useSelector((state: RootState) => state.user)
	return (
		<div className={styles['form-wrapper']}>
			{authError && <FormErrorMessage error={authError} />}
			<form className={styles['form']} onSubmit={sendAuth}>
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
						required
					/>
				</div>
				{type === 'login' ? (
					''
				) : (
					<div className={styles['form__input']}>
						<label htmlFor='name' className={styles['input-field']}>
							Ваше имя
						</label>
						<Input
							id='name'
							name='name'
							placeholder='Имя'
							type='text'
							required
						/>
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
