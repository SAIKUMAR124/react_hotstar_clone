import { SINGLE_DATA } from './singleActionTypes';

export const setSingleData = (data) => {
	return { type: SINGLE_DATA, payload: data };
};
