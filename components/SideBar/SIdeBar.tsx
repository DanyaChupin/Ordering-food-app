import User from '../User/User'
import MenuList from '../MenuList/MenuList'
import ExitButton from '../ExitButton/ExitButton'
import styles from './SideBar.module.css'

const SideBar = () => {
	return (
		<div className={styles['sidebar']}>
			<User />
			<MenuList />
			<ExitButton />
		</div>
	)
}
export default SideBar
