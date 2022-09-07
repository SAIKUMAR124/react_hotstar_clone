import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState();
	const [tvData, setTvData] = useState();
	const [data, setData] = useState();

	useEffect(() => {
		const getMovieDetails = () => {
			axios
				.get(
					`${process.env.REACT_APP_BASE_URL}movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
				)
				.then((response) => {
					setMovieData(response.data);
				})
				.catch((err) => {});
		};

		const getTvDetails = () => {
			axios
				.get(
					`${process.env.REACT_APP_BASE_URL}tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
				)
				.then((response) => {
					setTvData(response.data);
				})
				.catch((err) => {});
		};

		getTvDetails();
		getMovieDetails();
	}, []);

	useEffect(() => {
		if (movieData) {
			setData(movieData);
		}
		if (tvData) {
			setData(tvData);
		}
		console.log(data);
	}, [movieData, tvData]);

	return (
		<div style={{ marginTop: '4.5rem', color: 'white' }}>
			SinglePage
			<h1>wjchd: {id}</h1>
		</div>
	);
};

export default SinglePage;
