import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SIdeBar'
import styles from './Layout.module.css'

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
