import React, { useEffect } from 'react';
import './index.scss';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import TvIcon from '@mui/icons-material/Tv';
import MovieIcon from '@mui/icons-material/Movie';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import { auth, provider } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	setUserLoginDetails,
	setUserSignOut,
} from '../../app/reducers/user/userActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				setUser(user);
				history.push('/home');
			} else {
				history.push('/');
			}
		});
	}, []);

	const handleAuth = () => {
		if (!user.loggedIn) {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					setUser(result.user.multiFactor.user);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			auth.signOut().then(() => {
				dispatch(setUserSignOut());
			});
		}
	};

	const setUser = (user) => {
		const data = {
			name: user.displayName,
			email: user.email,
			photo: user.photoURL,
		};
		dispatch(setUserLoginDetails(data));
	};

	return (
		<nav className='header-nav'>
			<img src='images/login/logo.svg' className='header-logo' alt='' />

			{!user.loggedIn ? (
				<div className='login' onClick={handleAuth}>
					Login
				</div>
			) : (
				<>
					<div className='nav-menu'>
						<div className='nav-con' onClick={() => history.push('/home')}>
							<HomeIcon className='icon' />
							<span className='text'>HOME</span>
						</div>
						<div className='nav-con' onClick={() => history.push('/search')}>
							<SearchIcon className='icon' />
							<span className='text'>SEARCH</span>
						</div>
						<div className='nav-con'>
							<AddIcon className='icon' />
							<span className='text'>WATCHLIST</span>
						</div>
						<div className='nav-con'>
							<TvIcon className='icon' />
							<span className='text'>ORGINALS</span>
						</div>
						<div className='nav-con'>
							<MovieIcon className='icon' />
							<span className='text'>MOVIES</span>
						</div>
						<div className='nav-con'>
							<SportsBaseballIcon className='icon' />
							<span className='text'>SPORTS</span>
						</div>
					</div>
					<div className='profile'>
						<AccountCircleIcon
							id='demo-controlled-open-select'
							sx={{ fontSize: '2.5rem' }}
						/>
						<div className='drop-down'>
							<span onClick={handleAuth}>Sign Out</span>
						</div>
					</div>
				</>
			)}
		</nav>
	);
};

export default Header;
