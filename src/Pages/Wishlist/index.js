import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ImageStack from '../../Components/ImageStack';
import './index.scss';

const Wishlist = () => {
	const history = useHistory();
	const watchListItems = useSelector((state) => state.watchList.watchListItems);

	return (
		<div className='wishlist-page'>
			<h2 className='heading'>Watch List</h2>
			<ImageStack data={watchListItems} />
		</div>
	);
};

export default Wishlist;
