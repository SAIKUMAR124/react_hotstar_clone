import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SinglePage from './Pages/SinglePage';
import Wishlist from './Pages/Wishlist';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
				<Route path='/home' exact>
					<HomePage />
				</Route>
				<Route path='/home/:id' exact>
					<SinglePage />
				</Route>
				<Route path='/wishlist' exact>
					<Wishlist />
				</Route>
				<Route path='/search' exact>
					<SearchPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
