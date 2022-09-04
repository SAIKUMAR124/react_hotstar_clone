import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Header from './Components/Header';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
