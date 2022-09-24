import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './index.scss';

const Wishlist = () => {
	const history = useHistory();
	const movieData = useSelector((state) => state.movies.popularMovies);

	return (
		<div className='wishlist-page'>
			<div className='wishlist-container'>
				{movieData.results &&
					movieData.results.map((item) => {
						return (
							<div
								className='item'
								onClick={() => history.push(`/home/${item.id}`)}
							>
								<img
									src={`${process.env.REACT_APP_BASE_IMAGE_URL}${item.poster_path}`}
									alt=''
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Wishlist;
