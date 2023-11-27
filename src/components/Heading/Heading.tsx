import SearchInput from '../SearchInput/SearchInput'
import { HeadingProps } from './Heading.props'
import styles from './Heading.module.css'

const Heading = ({ title, withSearch = false }: HeadingProps) => {
	return (
		<header className={styles['heading']}>
			<h1 className={styles['heading__title']}>{title}</h1>
			{withSearch && <SearchInput />}
		</header>
	)
}
export default Heading
