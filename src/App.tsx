import { Link } from 'react-router-dom'
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
			<div>
				<Link to='/'>Home</Link>
				<Link to='/cart'>Cart</Link>
			</div>
		</div>
	)
}

export default App
