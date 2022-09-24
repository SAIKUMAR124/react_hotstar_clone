import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const ImageStack = ({ data }) => {
	const history = useHistory();

	return (
		<div className='item-container'>
			{data &&
				data.map((item) => {
					return (
						<div
							className='item'
							onClick={() => history.push(`/home/${item.id}`)}
							key={item.id}
						>
							<img
								src={`${process.env.REACT_APP_BASE_IMAGE_URL}${item.poster_path}`}
								alt=''
							/>
						</div>
					);
				})}
		</div>
	);
};

export default ImageStack;
