import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	setActionAndAddventureTV,
	setAnimationTV,
	setComedyTV,
	setCrimeTV,
	setDocumentaryTV,
	setDramaTV,
	setFamilyTV,
	setFetchTvPending,
	setFetchTvSuccess,
	setKidsTV,
	setLatestTV,
	setMysteryTV,
	setNewsTV,
	setOnAirTV,
	setPopularTV,
	setRealityTV,
	setScienceFictionTV,
	setSoapTV,
	setTalkTV,
	setTopRatedTV,
	setWarAndPoliticsTV,
	setWesternTV,
} from '../../app/reducers/tv/tvActions';
import Carousel from '../../Components/Carousel';
import './index.scss';

const Orginals = () => {
	const tv = useSelector((state) => state.tv);
	const dispatch = useDispatch();

	useEffect(() => {
		document.title = 'Hotstat: Orginals';
		dispatch(setFetchTvPending());
		const latest = axios.get(
			`${process.env.REACT_APP_BASE_URL}tv/latest?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		const onTheAir = axios.get(
			`${process.env.REACT_APP_BASE_URL}tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		const popular = axios.get(
			`${process.env.REACT_APP_BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		const topRated = axios.get(
			`${process.env.REACT_APP_BASE_URL}tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
		);
		const actionAndAdventure = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10759`
		);
		const animation = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`
		);
		const comedy = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`
		);
		const crime = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`
		);
		const documentary = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`
		);
		const drama = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`
		);
		const family = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`
		);
		const kids = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10762`
		);
		const mystery = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=9648`
		);
		const news = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10763`
		);
		const reality = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10764`
		);
		const scienceFiction = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10765`
		);
		const soap = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10766`
		);
		const talk = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10767`
		);
		const warAndPolitics = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10768`
		);
		const western = axios.get(
			`${process.env.REACT_APP_BASE_URL}discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=37`
		);

		axios
			.all([
				latest,
				onTheAir,
				popular,
				topRated,
				actionAndAdventure,
				animation,
				comedy,
				crime,
				documentary,
				drama,
				family,
				kids,
				mystery,
				news,
				reality,
				scienceFiction,
				soap,
				talk,
				warAndPolitics,
				western,
			])
			.then(
				axios.spread((...responses) => {
					dispatch(setLatestTV(responses[0]));
					dispatch(setOnAirTV(responses[1]));
					dispatch(setPopularTV(responses[2]));
					dispatch(setTopRatedTV(responses[3]));
					dispatch(setActionAndAddventureTV(responses[4]));
					dispatch(setAnimationTV(responses[5]));
					dispatch(setComedyTV(responses[6]));
					dispatch(setCrimeTV(responses[7]));
					dispatch(setDocumentaryTV(responses[8]));
					dispatch(setDramaTV(responses[9]));
					dispatch(setFamilyTV(responses[10]));
					dispatch(setKidsTV(responses[11]));
					dispatch(setMysteryTV(responses[12]));
					dispatch(setNewsTV(responses[13]));
					dispatch(setRealityTV(responses[14]));
					dispatch(setScienceFictionTV(responses[15]));
					dispatch(setSoapTV(responses[16]));
					dispatch(setTalkTV(responses[17]));
					dispatch(setWarAndPoliticsTV(responses[18]));
					dispatch(setWesternTV(responses[19]));
					dispatch(setFetchTvSuccess());
				})
			);
	}, [dispatch]);

	return (
		<div className='orginals-page'>
			<h1 className='title'>Orginals</h1>
			{tv.pending ? (
				<div>Loading...</div>
			) : (
				<>
					{tv.latest?.data?.results ? (
						<Carousel data={tv.latest.data.results} title='Latest' />
					) : null}
					{tv.onTheAir?.data?.results ? (
						<Carousel data={tv.onTheAir.data.results} title='On The Air' />
					) : null}
					{tv.popular?.data?.results ? (
						<Carousel data={tv.popular.data.results} title='Popular' />
					) : null}
					{tv.topRated?.data?.results ? (
						<Carousel data={tv.topRated.data.results} title='Top Rated' />
					) : null}
					{tv.actionAndAdventure?.data?.results ? (
						<Carousel
							data={tv.actionAndAdventure.data.results}
							title='Action & Adventure'
						/>
					) : null}
					{tv.animation?.data?.results ? (
						<Carousel data={tv.animation.data.results} title='Animation' />
					) : null}
					{tv.comedy?.data?.results ? (
						<Carousel data={tv.comedy.data.results} title='Comedy' />
					) : null}
					{tv.crime?.data?.results ? (
						<Carousel data={tv.crime.data.results} title='Crime' />
					) : null}
					{tv.documentary?.data?.results ? (
						<Carousel data={tv.documentary.data.results} title='Documentary' />
					) : null}
					{tv.drama?.data?.results ? (
						<Carousel data={tv.drama.data.results} title='Drama' />
					) : null}
					{tv.family?.data?.results ? (
						<Carousel data={tv.family.data.results} title='Family' />
					) : null}
					{tv.kids?.data?.results ? (
						<Carousel data={tv.kids.data.results} title='Kids' />
					) : null}
					{tv.mystery?.data?.results ? (
						<Carousel data={tv.mystery.data.results} title='Mystery' />
					) : null}
					{tv.News?.data?.results ? (
						<Carousel data={tv.News.data.results} title='News' />
					) : null}
					{tv.reality?.data?.results ? (
						<Carousel data={tv.reality.data.results} title='Reality' />
					) : null}
					{tv.scienceFiction?.data?.results ? (
						<Carousel
							data={tv.scienceFiction.data.results}
							title='Sci-Fi & Fantasy'
						/>
					) : null}
					{tv.soap?.data?.results ? (
						<Carousel data={tv.soap.data.results} title='Soap' />
					) : null}
					{tv.talk?.data?.results ? (
						<Carousel data={tv.talk.data.results} title='Talk' />
					) : null}
					{tv.warAndPolitics?.data?.results ? (
						<Carousel
							data={tv.warAndPolitics.data.results}
							title='War & Politics'
						/>
					) : null}
					{tv.western?.data?.results ? (
						<Carousel data={tv.western.data.results} title='Western' />
					) : null}
				</>
			)}
		</div>
	);
};

export default Orginals;
