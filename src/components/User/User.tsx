import styles from './User.module.css'

const User = () => {
	return (
		<div className={styles['user']}>
			<img
				className={styles['user__avatar']}
				src='/user.svg'
				alt='изображение пользователя'
			/>
			<div className={styles['user__info']}>
				<div className={styles['user__name']}>Данил Чупин</div>
				<div className={styles['user__email']}>Chupa@mail.ru</div>
			</div>
		</div>
	)
}
export default User
