import React, { useState } from 'react';
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
import { setUserLoginDetails } from '../../app/reducers/user/userActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const history = useHistory();

	const handleAuth = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				// console.log(result.additionalUserInfo.profile);
				setUser(result.additionalUserInfo.profile);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const setUser = (user) => {
		const data = {
			name: user.name,
			email: user.email,
			photo: user.picture,
		};
		console.log(data);
		dispatch(setUserLoginDetails(data));
	};

	return (
		<nav className='header-nav'>
			<img src='images/login/logo.svg' className='header-logo' alt='' />
			<div className='nav-menu'>
				<div className='nav-con'>
					<HomeIcon className='icon' />
					<span className='text'>HOME</span>
				</div>
				<div className='nav-con'>
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

			{!user.name ? (
				<div className='login' onClick={handleAuth}>
					Login
				</div>
			) : (
				<div>
					<AccountCircleIcon
						id='demo-controlled-open-select'
						sx={{ fontSize: '2.5rem' }}
					/>
				</div>
			)}
		</nav>
	);
};

export default Header;
