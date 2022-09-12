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

const initialState = {
	pending: false,
	latest: {},
	onTheAir: {},
	popular: {},
	topRated: {},
	actionAndAdventure: {},
	animation: {},
	comedy: {},
	crime: {},
	documentary: {},
	drama: {},
	family: {},
	kids: {},
	mystery: {},
	news: {},
	reality: {},
	scienceFiction: {},
	soap: {},
	talk: {},
	warAndPolitics: {},
	western: {},
};

export const tvReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TV_PENDING:
			return {
				...state,
				pending: true,
			};

		case FETCH_TV_SUCCESS:
			return {
				...state,
				pending: false,
			};

		case LATEST:
			return {
				...state,
				latest: action.payload,
			};

		case ON_THE_AIR:
			return {
				...state,
				onTheAir: action.payload,
			};

		case POPULAR:
			return {
				...state,
				popular: action.payload,
			};

		case TOP_RATED:
			return {
				...state,
				topRated: action.payload,
			};

		case ACTION_AND_ADVENTURE:
			return {
				...state,
				actionAndAdventure: action.payload,
			};

		case ANIMATION:
			return {
				...state,
				animation: action.payload,
			};

		case COMEDY:
			return {
				...state,
				comedy: action.payload,
			};

		case CRIME:
			return {
				...state,
				crime: action.payload,
			};

		case DOCUMENTARY:
			return {
				...state,
				documentary: action.payload,
			};

		case DRAMA:
			return {
				...state,
				drama: action.payload,
			};

		case FAMILY:
			return {
				...state,
				family: action.payload,
			};
		case KIDS:
			return {
				...state,
				kids: action.payload,
			};
		case MYSTERY:
			return {
				...state,
				mystery: action.payload,
			};

		case NEWS:
			return {
				...state,
				news: action.payload,
			};

		case REALITY:
			return {
				...state,
				reality: action.payload,
			};

		case SCIENCE_FICTION:
			return {
				...state,
				scienceFiction: action.payload,
			};

		case SOAP:
			return {
				...state,
				soap: action.payload,
			};

		case TALK:
			return {
				...state,
				talk: action.payload,
			};

		case WAR_AND_POLITICS:
			return {
				...state,
				warAndPolitics: action.payload,
			};

		case WESTERN:
			return {
				...state,
				western: action.payload,
			};

		default:
			return state;
	}
};
