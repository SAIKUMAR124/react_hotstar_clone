import React from 'react';
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
		</main>
	);
};

export default HomePage;
