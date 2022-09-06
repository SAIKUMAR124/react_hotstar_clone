import {
	LATEST_MOVIES,
	POPULAR_MOVIES,
	POPULAR_SHOWS,
} from './movieActionTypes';

export const setPopularMovies = (data) => {
	return { type: POPULAR_MOVIES, payload: data };
};

export const setLatestMovies = (data) => {
	return { type: LATEST_MOVIES, payload: data };
};

export const setPopularShows = (data) => {
	return { type: POPULAR_SHOWS, payload: data };
};
