import React from 'react';
import Brands from '../../Components/Brands';
import Carousel from '../../Components/Carousel';
import ImgSlider from '../../Components/ImgSlider';
import './index.scss';

const HomePage = () => {
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
			<Carousel />

			<div style={{ height: '200px' }}></div>
		</main>
	);
};

export default HomePage;
