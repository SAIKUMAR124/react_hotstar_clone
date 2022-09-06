import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setLatestMovies,
	setPopularMovies,
} from '../../app/reducers/movies/movieActions';
import Brands from '../../Components/Brands';
import Carousel from '../../Components/Carousel';
import ImgSlider from '../../Components/ImgSlider';
import './index.scss';

const HomePage = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);

	useEffect(() => {
		const PopularMovies = () => {
			axios
				.get(
					`${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
				)
				.then((response) => {
					dispatch(setPopularMovies(response.data));
				});
		};

		const LatestMovies = () => {
			axios
				.get(
					`${process.env.REACT_APP_BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
				)
				.then((response) => {
					dispatch(setLatestMovies(response.data));
				});
		};

		LatestMovies();
		PopularMovies();
	}, []);

	return (
		<main
			className='home-page'
			style={{
				background:
					'url(images/home/home-background.png) center center / cover no-repeat fixed',
			}}
		>
			<ImgSlider />
			<Brands />
			<Carousel data={movies.latestMovies.results} title='Latest' />
			<Carousel data={movies.popularMovies.results} title='Popular' />
			
		</main>
	);
};

export default HomePage;

const data = [
	{
		image: 'BB6.jpg',
	},
	{
		image: 'criminal_justice.png',
	},
	{
		image: 'heaven.jpg',
	},
	{
		image: 'she_hulk.jpg',
	},
	{
		image: 'sketch.jpg',
	},
	{
		image: 'kadavar.jpg',
	},
	{
		image: 'the_warrior.jpg',
	},
	{
		image: 'vattam.jpg',
	},
	{
		image: 'vikram.jpg',
	},
	{
		image: 'BB6.jpg',
	},
	{
		image: 'criminal_justice.png',
	},
	{
		image: 'heaven.jpg',
	},
	{
		image: 'she_hulk.jpg',
	},
	{
		image: 'sketch.jpg',
	},
	{
		image: 'kadavar.jpg',
	},
	{
		image: 'the_warrior.jpg',
	},
	{
		image: 'vattam.jpg',
	},
	{
		image: 'vikram.jpg',
	},
];
