import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import styles from './Layout.module.css'

export const Layout = () => {
	return (
		<div className={styles['layout']}>
			<SideBar />
			<div className={styles['layout__content']}>
				<Outlet />
			</div>
		</div>
	)
}
