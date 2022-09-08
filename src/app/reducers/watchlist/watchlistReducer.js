import {
	ADD_TO_WATCH_LIST,
	REMOVE_FROM_WATCH_LIST,
} from './watchlistActionTypes';

const initialState = {
	watchListItems: [],
};

export const watchListReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_WATCH_LIST:
			return {
				...state,
				watchListItems: [...state.watchListItems, action.payload],
			};

		case REMOVE_FROM_WATCH_LIST:
			const data = state.watchListItems.filter(
				(item) => item.id !== parseInt(action.payload)
			);
			return {
				...state,
				watchListItems: [...data],
			};

		default:
			return state;
	}
};
