import { ADD_TO_WATCH_LIST, REMOVE_FROM_WATCH_LIST } from './watchlistActionTypes';

export const addItemToWatchList = (data) => {
	return {
		type: ADD_TO_WATCH_LIST,
		payload: data,
	};
};

export const removeItemFromWatchList = (data) => {
	return {
		type: REMOVE_FROM_WATCH_LIST,
		payload: data,
	};
};
