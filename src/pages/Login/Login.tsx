import { FormEvent, useEffect } from 'react'
import Form from '../../components/Form/Form'
import Heading from '../../components/Heading/Heading'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispath, RootState } from '../../store/store'
import { getUserProfile, login, userActions } from '../../store/user.slice'
import { LoginForm } from '../../types/types'

const Login = () => {
	const nav = useNavigate()
	const dispath = useDispatch<AppDispath>()
	const { jwt } = useSelector((state: RootState) => state.user)
	useEffect(() => {
		if (jwt) {
			nav('/')
		}
	}, [jwt, nav])

	const sendLogin = async (e: FormEvent) => {
		e.preventDefault()

		dispath(userActions.clearAuthError())
		const target = e.target as typeof e.target & LoginForm
		const { email, password } = target
		dispath(
			login({
				email: email.value,
				password: password.value,
			})
		)
		if (jwt) {
			dispath(getUserProfile())
		}
	}

	return (
		<>
			<Heading title='Вход' />
			<Form type='login' sendAuth={sendLogin} />
		</>
	)
}

export default Login
