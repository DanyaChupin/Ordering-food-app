export interface FormProps {
	type: string
	sendAuth: (email: string, password: string, name?: string) => void
}
