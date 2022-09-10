import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import SearchPage from './Pages/SearchPage';
import SinglePage from './Pages/SinglePage';
import Wishlist from './Pages/Wishlist';
import Orginals from './Pages/Orginals';
import Movies from './Pages/Movies';

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
				<Route path='/orginals' exact>
					<Orginals />
				</Route>
				<Route path='/movies' exact>
					<Movies />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
