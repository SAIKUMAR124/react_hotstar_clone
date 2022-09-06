import { LATEST_MOVIES, POPULAR_MOVIES } from './movieActionTypes';

const initialState = {
	popularMovies: [],
	latestMovies: [],
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

		default:
			return state;
	}
};
