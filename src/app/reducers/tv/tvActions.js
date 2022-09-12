import {
	ACTION_AND_ADVENTURE,
	ANIMATION,
	COMEDY,
	CRIME,
	DOCUMENTARY,
	DRAMA,
	FAMILY,
	FETCH_TV_PENDING,
	FETCH_TV_SUCCESS,
	KIDS,
	LATEST,
	MYSTERY,
	NEWS,
	ON_THE_AIR,
	POPULAR,
	REALITY,
	SCIENCE_FICTION,
	SOAP,
	TALK,
	TOP_RATED,
	WAR_AND_POLITICS,
	WESTERN,
} from './tvActionTypes';

export const setFetchTvPending = () => {
	return {
		type: FETCH_TV_PENDING,
	};
};

export const setFetchTvSuccess = () => {
	return {
		type: FETCH_TV_SUCCESS,
	};
};

export const setActionAndAddventureTV = (data) => {
	return {
		type: ACTION_AND_ADVENTURE,
		payload: data,
	};
};

export const setLatestTV = (data) => {
	return {
		type: LATEST,
		payload: data,
	};
};

export const setOnAirTV = (data) => {
	return {
		type: ON_THE_AIR,
		payload: data,
	};
};

export const setPopularTV = (data) => {
	return {
		type: POPULAR,
		payload: data,
	};
};

export const setTopRatedTV = (data) => {
	return {
		type: TOP_RATED,
		payload: data,
	};
};

export const setAnimationTV = (data) => {
	return {
		type: ANIMATION,
		payload: data,
	};
};

export const setComedyTV = (data) => {
	return {
		type: COMEDY,
		payload: data,
	};
};

export const setCrimeTV = (data) => {
	return {
		type: CRIME,
		payload: data,
	};
};

export const setDocumentaryTV = (data) => {
	return {
		type: DOCUMENTARY,
		payload: data,
	};
};

export const setDramaTV = (data) => {
	return {
		type: DRAMA,
		payload: data,
	};
};

export const setFamilyTV = (data) => {
	return {
		type: FAMILY,
		payload: data,
	};
};

export const setKidsTV = (data) => {
	return {
		type: KIDS,
		payload: data,
	};
};

export const setMysteryTV = (data) => {
	return {
		type: MYSTERY,
		payload: data,
	};
};

export const setNewsTV = (data) => {
	return {
		type: NEWS,
		payload: data,
	};
};

export const setRealityTV = (data) => {
	return {
		type: REALITY,
		payload: data,
	};
};

export const setScienceFictionTV = (data) => {
	return {
		type: SCIENCE_FICTION,
		payload: data,
	};
};

export const setSoapTV = (data) => {
	return {
		type: SOAP,
		payload: data,
	};
};

export const setTalkTV = (data) => {
	return {
		type: TALK,
		payload: data,
	};
};

export const setWarAndPoliticsTV = (data) => {
	return {
		type: WAR_AND_POLITICS,
		payload: data,
	};
};

export const setWesternTV = (data) => {
	return {
		type: WESTERN,
		payload: data,
	};
};
