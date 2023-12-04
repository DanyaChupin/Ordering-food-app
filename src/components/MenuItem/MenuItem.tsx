import { NavLink } from 'react-router-dom'
import { MenuItemProps } from './MenuItem.props'
import styles from './MenuItem.module.css'
import cn from 'classnames'
import CountCart from '../CountCart/CountCart'

const MenuItem = ({ title, img, to }: MenuItemProps) => {
	return (
		<li className={cn(styles['menu-item'])}>
			<NavLink
				to={to}
				className={({ isActive }) =>
					cn(styles['menu-item__link'], {
						[styles.active]: isActive,
					})
				}
			>
				<img
					className={styles['menu-item__img']}
					src={img}
					alt={`изображение ${title}`}
				/>
				{title}

				{title === 'Корзина' ? <CountCart /> : ''}
			</NavLink>
		</li>
	)
}

export default MenuItem
