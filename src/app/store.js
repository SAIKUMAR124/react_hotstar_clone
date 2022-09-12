import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movies/movieReducer';
import { singleReducer } from './reducers/singleData/singleReducer';
import { tvReducer } from './reducers/tv/tvReducer';
import { userReducer } from './reducers/user/userReducer';
import { watchListReducer } from './reducers/watchlist/watchlistReducer';

const reducer = combineReducers({
	user: userReducer,
	movies: movieReducer,
	singleData: singleReducer,
	watchList: watchListReducer,
	tv: tvReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
