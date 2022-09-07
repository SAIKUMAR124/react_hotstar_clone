import {
	LATEST_MOVIES,
	POPULAR_MOVIES,
	POPULAR_SHOWS,
	TOP_RATED_MOVIES,
	UPCOMING_MOVIES,
} from './movieActionTypes';

const initialState = {
	popularMovies: {},
	latestMovies: {},
	popularShows: {},
	upcomingMovies: {},
	topRatedMovies: {},
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case LATEST_MOVIES:
			return {
				...state,
				latestMovies: action.payload,
			};

		case POPULAR_MOVIES:
			return {
				...state,
				popularMovies: action.payload,
			};

		case POPULAR_SHOWS:
			return {
				...state,
				popularShows: action.payload,
			};

		case UPCOMING_MOVIES:
			return {
				...state,
				upcomingMovies: action.payload,
			};

		case TOP_RATED_MOVIES:
			return {
				...state,
				topRatedMovies: action.payload,
			};

		default:
			return state;
	}
};
