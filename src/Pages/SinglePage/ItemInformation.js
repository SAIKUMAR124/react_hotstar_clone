import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Grid } from '@mui/material';

const ItemInformation = ({
	singleData,
	handleWatchList,
	isPresentInWatchlist,
}) => {
	return (
		<Grid item xs={12} md={6} className='data'>
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
				<button
					className='watch-list'
					onClick={() => handleWatchList(singleData)}
				>
					{isPresentInWatchlist ? 'Remove from Watchlist' : 'Watchlist'}
				</button>
			</div>
		</Grid>
	);
};

export default ItemInformation;
