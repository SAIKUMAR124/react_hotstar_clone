import React, { useState } from 'react';
import './index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, color: 'white' }}
			onClick={onClick}
		>
			<ArrowForwardIosIcon
				sx={{ background: 'transparent', fontSize: '70px' }}
			/>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, color: 'white' }}
			onClick={onClick}
		>
			<ArrowBackIosIcon
				sx={{
					background: 'transparent',
					fontSize: '70px',
				}}
			/>
		</div>
	);
}

const MainCarousel = () => {
	const [data] = useState(HeaderCarouselData);

	let settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,

		className: 'slider variable-width',
		centerMode: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		variableWidth: true,
		autoplay: true,
	};

	return (
		<div className='main-carousel'>
			<Slider {...settings}>
				{data &&
					data.map((item) => {
						return (
							<div key={item.id} className='Carousel-container'>
								<div className='Carousel-con'>
									<div className='carousel-content'>
										<div className='content'>
											<h1 className='title'>{item.title}</h1>
											<div className='category'>2022</div>
											<p className='description'>{item.description}</p>
										</div>
									</div>
									<div className='carousel-img'>
										<img
											src={item.image}
											alt={item.title}
											width='100%'
											height='100%'
											object-fit='contain'
										/>
										<div className="img-gradient"></div>
									</div>
								</div>
							</div>
						);
					})}
			</Slider>
		</div>
	);
};

export default MainCarousel;

const HeaderCarouselData = [
	{
		id: 0,
		image: './images/header/criminal_justice.jpg',
		title: 'Criminal Justice: Adhura Sach',
		description:
			"NEW EPISODE EVERY FRIDAY. When a teenage star's brother becomes the prime suspect in her murder, Madhav Mishra takes the case, only to realise he has to first tackle his client's lies.",
		categories: ['Hotstar Specials', 'Crime'],
	},
	{
		id: 1,
		image: './images/header/kadavali.jpg',
		title: 'Cadaver',
		description:
			'A high-profile murder baffles the cops when a prison inmate claims responsibility and promises more deaths. Will police surgeon Bhadra crack this mystery?',
		categories: ['Thriller', '2022'],
	},
	{
		id: 2,
		image: './images/header/sl_vs_ban.jpg',
		title: "SL Nab Super 4 Spot from BD's Grasp",
		description:
			'Sri Lanka scraped through with a two-wicket win over Bangladesh and roared into the Super 4s of DP World Asia Cup 2022',
		categories: ['Asia Cup', '2022'],
	},
	{
		id: 3,
		image: './images/header/super_singer.jpg',
		title: 'Super Singer Junior',
		description:
			"Fourteen energetic and talented kids join the biggest musical reality show to compete for the grand prize. Don't miss the captivating performances and unlimited fun.",
		categories: ['Star MAA', 'Telugu', 'Reality'],
	},
];
