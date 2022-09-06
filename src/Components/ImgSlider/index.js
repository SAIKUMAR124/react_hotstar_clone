import React from 'react';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImgSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		className: 'slider',
	};
	return (
		<Slider {...settings}>
			<div className='wrap'>
				<span>
					<img src='images/home/slider/slider-badag.jpg' alt='' />
				</span>
			</div>
			<div className='wrap'>
				<span>
					<img src='images/home/slider/slider-badging.jpg' alt='' />
				</span>
			</div>
			<div className='wrap'>
				<span>
					<img src='images/home/slider/slider-scale.jpg' alt='' />
				</span>
			</div>
			<div className='wrap'>
				<span>
					<img src='images/home/slider/slider-scales.jpg' alt='' />
				</span>
			</div>
		</Slider>
	);
};

export default ImgSlider;
