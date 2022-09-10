import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../Components/Carousel';
import './index.scss';

const Orginals = () => {
	const movies = useSelector((state) => state.movies);
	return (
		<div className='orginals-page'>
			<h1>Orginals</h1>
			<Carousel data={movies.latestMovies.results} title='Latest & Trending' />
		</div>
	);
};

export default Orginals;
