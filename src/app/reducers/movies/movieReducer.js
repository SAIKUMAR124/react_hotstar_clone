import {
	LATEST_MOVIES,
	POPULAR_MOVIES,
	POPULAR_SHOWS,
} from './movieActionTypes';

const initialState = {
	popularMovies: {},
	latestMovies: {},
	popularShows: {},
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

		default:
			return state;
	}
};
