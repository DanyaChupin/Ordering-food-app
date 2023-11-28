import { Outlet } from 'react-router-dom'
import styles from './AuthLayout.module.css'

const AuthLayout = () => {
	return (
		<div className={styles['auth-layout']}>
			<div className={styles['auth-layout__logo']}>
				<img src='/logo.svg' alt='Логотип компании' />
			</div>
			<div className={styles['auth-layout__content']}>
				<Outlet />
			</div>
		</div>
	)
}

export default AuthLayout
