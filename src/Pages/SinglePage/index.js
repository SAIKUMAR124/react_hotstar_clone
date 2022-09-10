import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSingleData } from '../../app/reducers/singleData/singleActions';
import './index.scss';
import {
	addItemToWatchList,
	removeItemFromWatchList,
} from '../../app/reducers/watchlist/watchlistActions';
import ItemInformation from './ItemInformation';

const SinglePage = () => {
	const { id } = useParams();
	const [movieData, setMovieData] = useState();
	const [tvData, setTvData] = useState();
	const dispatch = useDispatch();
	const singleData = useSelector((state) => state.singleData.data);
	const watchlist = useSelector((state) => state.watchList.watchListItems);
	const [isPresentInWatchlist, setIsPresentInWatchlist] = useState(false);
	const [screenWidth, setScreenWidth] = useState();

	const handleWidth = (event) => {
		setScreenWidth(event.currentTarget.screen.availWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWidth);
	});

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

	useEffect(() => {
		const isItemPresentInWatchList = () => {
			if (id) {
				const result = watchlist.filter((item) => item.id === parseInt(id));
				if (result[0]?.id) {
					setIsPresentInWatchlist(true);
				} else {
					setIsPresentInWatchlist(false);
				}
			}
		};
		isItemPresentInWatchList();
	}, [watchlist, id]);

	const handleWatchList = (data) => {
		if (isPresentInWatchlist) {
			dispatch(removeItemFromWatchList(data.id));
		} else {
			dispatch(addItemToWatchList(data));
		}
	};

	return (
		<div className='single-data'>
			{/* <img src='/images/home/home-background.png' height='100%' width='100%' /> */}
			{singleData && (
				<Grid container spacing={2} className='single-con'>
					<Grid item xs={12} md={6} className='img-con'>
						<img
							src={`${process.env.REACT_APP_BASE_IMAGE_URL}${singleData.poster_path}`}
							width='100%'
							height='100%'
							alt=''
						/>
					</Grid>
					<ItemInformation
						singleData={singleData}
						handleWatchList={handleWatchList}
						isPresentInWatchlist={isPresentInWatchlist}
					/>
				</Grid>
			)}
		</div>
	);
};

export default SinglePage;
