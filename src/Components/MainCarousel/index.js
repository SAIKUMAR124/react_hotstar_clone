import React, { useEffect, useState } from 'react';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, color: 'red', background: 'green' }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, color: 'red', background: 'green' }}
			onClick={onClick}
		/>
	);
}

const MainCarousel = () => {
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const dataa = await response.json();
			setData(dataa);
		};
		fetchData();
	}, []);

	let settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,

		className: 'slider variable-width',
		infinite: false,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 7,
		initialSlide: 0,
		variableWidth: true,
	};

	return (
		<div>
			<Slider {...settings}>
				{data &&
					data.map((item) => {
						return (
							<div key={item.id} className='image-container'>
								<img src={item.image} alt={item.title} />
							</div>
						);
					})}
			</Slider>
		</div>
	);
};

export default MainCarousel;
