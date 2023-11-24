import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
function App() {
	return (
		<div>
			<Button onClick={() => console.log('hello')}>Hello</Button>

			<Button appearence='big' onClick={() => console.log('hello')}>
				Hello
			</Button>
			<Input placeholder='Email' />
		</div>
	)
}

export default App
