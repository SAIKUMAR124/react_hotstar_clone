import {
	ADD_TO_WATCH_LIST,
	REMOVE_FROM_WATCH_LIST,
} from './watchlistActionTypes';

const initialList = () => {
	const list = localStorage.getItem('hotstar-watch-list');
	let watchList = [];
	if (list) {
		watchList = JSON.parse(list);
	}
	return watchList;
};

const initialState = {
	watchListItems: initialList(),
};

export const watchListReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_WATCH_LIST:
			localStorage.setItem(
				'hotstar-watch-list',
				JSON.stringify([...state.watchListItems, action.payload])
			);
			return {
				...state,
				watchListItems: [...state.watchListItems, action.payload],
			};

		case REMOVE_FROM_WATCH_LIST:
			const data = state.watchListItems.filter(
				(item) => item.id !== parseInt(action.payload)
			);
			localStorage.setItem('hotstar-watch-list', JSON.stringify(data));
			return {
				...state,
				watchListItems: [...data],
			};

		default:
			return state;
	}
};
