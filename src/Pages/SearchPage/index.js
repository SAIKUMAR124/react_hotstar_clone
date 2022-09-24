import React, { useEffect, useState } from 'react';
import './index.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';

const SearchPage = () => {
	const [searchText, setSearchText] = useState('');
	const [searchList, setSearchList] = useState([]);

	useEffect(() => {
		console.log(searchList);
	}, [searchList]);

	useEffect(() => {
		searchText && axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=e294e45611e50168b9c8f72fbc46598b&language=en-US&page=1&include_adult=false&query=${searchText}`
			)
			.then((res) => setSearchList(res.data));
	}, [searchText]);

	// https://api.themoviedb.org/3/search/movie?api_key=e294e45611e50168b9c8f72fbc46598b&language=en-US&page=1&include_adult=false&query=thor

	return (
		<div className='search-page'>
			SearchPage
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
		</div>
	);
};

export default SearchPage;
