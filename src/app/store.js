import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movies/movieReducer';
import { singleReducer } from './reducers/singleData/singleReducer';
import { userReducer } from './reducers/user/userReducer';

const reducer = combineReducers({
	user: userReducer,
	movies: movieReducer,
	singleData: singleReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
