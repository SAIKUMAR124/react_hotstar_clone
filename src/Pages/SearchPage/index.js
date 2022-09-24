import React, { useEffect, useState } from 'react';
import './index.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import ImageStack from '../../Components/ImageStack';

const SearchPage = () => {
	const [searchText, setSearchText] = useState('');
	const [searchList, setSearchList] = useState([]);

	useEffect(() => {
		console.log(searchText);
		console.log(searchList);
	}, [searchList, searchText]);

	useEffect(() => {
		searchText &&
			axios
				.get(
					`https://api.themoviedb.org/3/search/movie?api_key=e294e45611e50168b9c8f72fbc46598b&language=en-US&page=1&include_adult=false&query=${searchText}`
				)
				.then((res) => setSearchList(res.data.results));
	}, [searchText]);

	return (
		<div className='search-page'>
			<h2 className='heading'>Search Page</h2>
			<div className='search-container'>
				<div className='search'>
					<input
						placeholder='Please enter to search'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					<SearchOutlinedIcon className='icon' />
				</div>
			</div>
			<div className='search-results'>
				<ImageStack data={searchList} />
			</div>
		</div>
	);
};

export default SearchPage;
