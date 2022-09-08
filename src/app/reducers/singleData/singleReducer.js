import { SINGLE_DATA } from './singleActionTypes';

const initialState = {
	data: {},
};

export const singleReducer = (state = initialState, action) => {
	switch (action.type) {
		case SINGLE_DATA:
			return {
				...state,
				data: action.payload,
			};

		default:
			return state;
	}
};
