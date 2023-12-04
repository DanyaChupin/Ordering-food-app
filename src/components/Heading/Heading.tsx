import { HeadingProps } from './Heading.props'
import styles from './Heading.module.css'

const Heading = ({ title, children }: HeadingProps) => {
	return (
		<header className={styles['heading']}>
			<h1 className={styles['heading__title']}>{title}</h1>
			{children}
		</header>
	)
}
export default Heading
