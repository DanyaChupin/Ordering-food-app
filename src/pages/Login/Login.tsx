import { useEffect } from 'react'
import Form from '../../components/Form/Form'
import Heading from '../../components/Heading/Heading'
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispath, RootState } from '../../store/store'
import { getUserProfile, login, userActions } from '../../store/user.slice'

const Login = () => {
	const nav = useNavigate()
	const dispath = useDispatch<AppDispath>()
	const { jwt, loginErrorMessage } = useSelector(
		(state: RootState) => state.user
	)
	useEffect(() => {
		if (jwt) {
			nav('/')
		}
	}, [jwt, nav])

	const sendLogin = async (email: string, password: string) => {
		dispath(userActions.clearLoginError())
		dispath(login({ email, password }))
		if (jwt) {
			dispath(getUserProfile(jwt))
		}
	}

	return (
		<>
			<Heading title='Вход' />
			{loginErrorMessage && <FormErrorMessage error={loginErrorMessage} />}
			<Form type='login' sendAuth={sendLogin} />
		</>
	)
}

export default Login
