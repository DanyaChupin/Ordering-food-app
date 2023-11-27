import styles from './SearchInput.module.css'

const SearchInput = () => {
	return (
		<form className={styles['search-input__wrapper']}>
			<label htmlFor='search' className={styles['search-input__lable']}>
				<img
					className={styles['search-input__img']}
					src='./search.svg'
					alt='поиск'
				/>
			</label>
			<input
				name='search'
				className={styles['search-input']}
				type='text'
				placeholder='Введите блюдо или состав'
			/>
		</form>
	)
}

export default SearchInput
