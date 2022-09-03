import './App.scss';
import NormalCarousel from './Components/NormalCarousel';
import { Button } from '@mui/material';

function App() {
	return (
		<div className='App'>
			<h1>Hello</h1>
			<NormalCarousel />
			<Button variant='contained'>Submit</Button>
		</div>
	);
}

export default App;
