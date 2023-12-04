import { FormEvent } from 'react'

export interface FormProps {
	type: string
	sendAuth: (e: FormEvent) => void
}
