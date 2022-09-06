import React from 'react';
import './index.scss';

const Brands = () => {
	return (
		<div className='brands'>
			<div className='wrap'>
				<img src='/images/home/brands/viewers-disney.png' alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1564674844-disney.mp4' type='video/mp4' />
				</video>
			</div>
			<div className='wrap'>
				<img src='/images/home/brands/viewers-marvel.png' alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1564676115-marvel.mp4' type='video/mp4' />
				</video>
			</div>
			<div className='wrap'>
				<img src='/images/home/brands/viewers-national.png' alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source
						src='/videos/1564676296-national-geographic.mp4'
						type='video/mp4'
					/>
				</video>
			</div>
			<div className='wrap'>
				<img src='/images/home/brands/viewers-pixar.png' alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1564676714-pixar.mp4' type='video/mp4' />
				</video>
			</div>
			<div className='wrap'>
				<img src='/images/home/brands/viewers-starwars.png' alt='' />
				<video autoPlay={true} loop={true} playsInline={true}>
					<source src='/videos/1608229455-star-wars.mp4' type='video/mp4' />
				</video>
			</div>
		</div>
	);
};

export default Brands;
