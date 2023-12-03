import { useNavigate } from 'react-router-dom'
import styles from './ExitButton.module.css'
import { useDispatch } from 'react-redux'
import { AppDispath } from '../../store/store'
import { userActions } from '../../store/user.slice'

const ExitButton = () => {
	const nav = useNavigate()
	const dispath = useDispatch<AppDispath>()
	const logout = () => {
		dispath(userActions.logout())
		nav('/auth/login')
	}
	return (
		<button className={styles['exit-button']} onClick={logout}>
			<img src='/exit.svg' alt='выход' />
			Выйти
		</button>
	)
}

export default ExitButton
