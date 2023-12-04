import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/Form/Form'
import Heading from '../../components/Heading/Heading'
import { AppDispath, RootState } from '../../store/store'
import { FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserProfile, register, userActions } from '../../store/user.slice'
import { LoginForm } from '../../types/types'

const Register = () => {
	const nav = useNavigate()
	const distpath = useDispatch<AppDispath>()
	const { jwt } = useSelector((state: RootState) => state.user)
	useEffect(() => {
		if (jwt) {
			nav('/')
		}
	}, [jwt, nav])

	const sendRegister = async (e: FormEvent) => {
		e.preventDefault()
		distpath(userActions.clearAuthError())
		const target = e.target as typeof e.target & LoginForm
		const { email, password, name } = target
		if (!name) {
			return
		}

		distpath(
			register({
				email: email.value,
				name: name.value,
				password: password.value,
			})
		)
		if (jwt) {
			distpath(getUserProfile())
		}
	}
	return (
		<>
			<Heading title='Регистрация' />
			<Form type='register' sendAuth={sendRegister} />
		</>
	)
}

export default Register
