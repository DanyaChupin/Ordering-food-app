import { menuData } from './menuData.ts'
import MenuItem from '../MenuItem/MenuItem'
import styles from './MenuList.module.css'

const MenuList = () => {
	return (
		<ul className={styles['menu-list']}>
			{menuData.map(item => (
				<MenuItem
					key={item.title}
					title={item.title}
					img={item.img}
					to={item.to}
				/>
			))}
		</ul>
	)
}

export default MenuList
