import React, { useEffect, useState } from 'react';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = ({ title, data }) => {
	let settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 8,
		slidesToScroll: 8,
		className: 'sliderr variable-width',
		variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					initialSlide: 0,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
		],
	};
	return (
		<div className='normal-carousel'>
			<div className='cat-name'>
				<div className='name'>{title}</div>
				<div className='more'>More</div>
			</div>
			<Slider {...settings}>
				{data
					? data.map((item, index) => {
							return (
								<div key={index} className='img-con'>
									<img
										src={`${process.env.REACT_APP_BASE_IMAGE_URL}${item.poster_path}`}
										alt=''
									/>
								</div>
							);
					  })
					: null}
			</Slider>
		</div>
	);
};

export default Carousel;
