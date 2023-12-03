import styles from './FormErrorMessage.module.css'

const FormErrorMessage = ({ error }: { error: string }) => {
	return <div className={styles['error']}>{error}</div>
}

export default FormErrorMessage
