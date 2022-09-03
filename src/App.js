import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
	return (
		<div>
			<h1>Header</h1>
			<Switch>
				<Route path='/' exact>
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
