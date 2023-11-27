import styles from './ExitButton.module.css'

const ExitButton = () => {
	return (
		<button className={styles['exit-button']}>
			<img src='/exit.svg' alt='выход' />
			Выйти
		</button>
	)
}

export default ExitButton
