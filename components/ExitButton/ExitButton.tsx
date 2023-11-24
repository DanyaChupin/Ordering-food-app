import styles from './ExitButton.module.css'

const ExitButton = () => {
	return (
		<button className={styles['exit-button']}>
			<img src='/exit.svg' alt='выход' />
			ExitButton
		</button>
	)
}

export default ExitButton
