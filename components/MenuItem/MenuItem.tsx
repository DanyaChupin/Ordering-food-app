import { Link } from 'react-router-dom'
import { MenuItemProps } from './MenuItem.props'
import styles from './MenuItem.module.css'

const MenuItem = ({ title, img, to }: MenuItemProps) => {
	return (
		<li className={styles['menu-item']}>
			<Link to={to}>
				<img
					className={styles['menu-item__img']}
					src={img}
					alt={`изображение ${title}`}
				/>
				{title}
			</Link>
		</li>
	)
}

export default MenuItem
