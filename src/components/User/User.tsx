import { useDispatch, useSelector } from 'react-redux'
import styles from './User.module.css'
import { AppDispath, RootState } from '../../store/store'
import { useEffect } from 'react'
import { getUserProfile } from '../../store/user.slice'

const User = () => {
	const dispach = useDispatch<AppDispath>()
	useEffect(() => {
		dispach(getUserProfile())
	}, [dispach])

	const { profile } = useSelector((state: RootState) => state.user)

	return (
		<div className={styles['user']}>
			<img
				className={styles['user__avatar']}
				src='/user.svg'
				alt='изображение пользователя'
			/>
			<div className={styles['user__info']}>
				<div className={styles['user__name']}>{profile && profile.name}</div>
				<div className={styles['user__email']}>{profile && profile.email}</div>
			</div>
		</div>
	)
}
export default User
