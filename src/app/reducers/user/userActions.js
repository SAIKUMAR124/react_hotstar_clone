import { SET_USER_LOGIN_DETAILS } from './userActionTypes';

export const setUserLoginDetails = (data) => {
	return {
		type: SET_USER_LOGIN_DETAILS,
		payload: data,
	};
};

export const setUserSignOut = () => {
	return {
		type: SET_USER_LOGIN_DETAILS,
	};
};
