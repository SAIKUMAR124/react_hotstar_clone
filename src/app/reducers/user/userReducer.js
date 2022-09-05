import { SET_USER_LOGIN_DETAILS, SET_USER_SIGN_OUT } from './userActionTypes';

const initialState = {
	name: '',
	email: '',
	photo: '',
	loggedIn: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_LOGIN_DETAILS:
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				photo: action.payload.photo,
				loggedIn: true,
			};

		case SET_USER_SIGN_OUT:
			return {
				...state,
				name: '',
				email: '',
				photo: '',
				loggedIn: false,
			};

		default:
			return state;
	}
};
