import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from '../../Components/Carousel';
import './index.scss';

const Movies = () => {
	const movieData = useSelector((state) => state.movies);

	return (
		<div className='movies-page'>
			<h1>Movies</h1>
			<Carousel
				data={movieData.latestMovies.results}
				title='Latest & Trending'
			/>
		</div>
	);
};

export default Movies;
