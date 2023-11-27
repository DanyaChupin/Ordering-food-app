import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import SideBar from '../../components/SideBar/SIdeBar'

export const Layout = () => {
	return (
		<div className={styles['layout']}>
			<SideBar />
			<div>
				<Outlet />
			</div>
		</div>
	)
}
