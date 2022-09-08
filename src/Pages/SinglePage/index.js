import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSingleData } from '../../app/reducers/singleData/singleActions';
import './index.scss';
import StarRateIcon from '@mui/icons-material/StarRate';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const SinglePage = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState();
	const [tvData, setTvData] = useState();
	const dispatch = useDispatch();
	const singleData = useSelector((state) => state.singleData.data);

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
	}, [id]);

	useEffect(() => {
		if (movieData) {
			dispatch(setSingleData(movieData));
		}
		if (tvData) {
			dispatch(setSingleData(tvData));
		}
	}, [movieData, tvData]);

	return (
		<div className='single-data'>
			{/* <img src='/images/home/home-background.png' height='100%' width='100%' /> */}
			{singleData && (
				<Grid container spacing={2} className='single-con'>
					<Grid item xs={6} className='data'>
						<h1 className='title'>{singleData.title}</h1>
						<ul className='genres'>
							{singleData.genres
								? singleData.genres.map((item) => {
										return <li key={item.id}>{item.name}</li>;
								  })
								: null}
						</ul>
						<div className='item-details-con'>
							<span>
								<GroupWorkIcon size='small' className='icon' />
								{singleData.runtime}
							</span>
							<span>
								<StarRateIcon size='small' className='icon' />
								{singleData.vote_average}
							</span>
							<span>
								<KeyboardDoubleArrowUpIcon size='small' className='icon' />
								{singleData.vote_count}
							</span>
						</div>
						<div className='release-date'>
							Release Date: <span>{singleData.release_date}</span>
						</div>
						<p className='description'>{singleData.overview}</p>
						<ul className='production'>
							{singleData.production_companies
								? singleData.production_companies.map((item) => {
										return <li key={item.id}>{item.name}</li>;
								  })
								: null}
						</ul>
						<div className='btn-container'>
							<button className='watch-now'>Watch Now</button>
							<button className='watch-list'>Watchlist</button>
						</div>
					</Grid>
					<Grid item xs={6} className='img-con'>
						<img
							src={`${process.env.REACT_APP_BASE_IMAGE_URL}${singleData.poster_path}`}
							width='100%'
							height='100%'
						/>
					</Grid>
				</Grid>
			)}
		</div>
	);
};

export default SinglePage;
