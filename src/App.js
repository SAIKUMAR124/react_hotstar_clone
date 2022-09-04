import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
	return (
		<div>
			<h1>Header</h1>
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
