import { ChangeEvent } from 'react'

export interface SearchInputProps {
	updateFilter: (e: ChangeEvent<HTMLInputElement>) => void
}
