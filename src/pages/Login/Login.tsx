import Form from '../../components/Form/Form'
import Heading from '../../components/Heading/Heading'
import styles from './Login.module.css'

const Login = () => {
	return (
		<>
			<Heading title='Вход' />
			<Form type='login' />
		</>
	)
}

export default Login
