import {
	LATEST_MOVIES,
	POPULAR_MOVIES,
	POPULAR_SHOWS,
	TOP_RATED_MOVIES,
	UPCOMING_MOVIES,
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

export const setUpComingMOvies = (data) => {
	return { type: UPCOMING_MOVIES, payload: data };
};

export const setTopRatedMovies = (data) => {
	return { type: TOP_RATED_MOVIES, payload: data };
};
