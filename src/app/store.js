import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movies/movieReducer';
import { userReducer } from './reducers/user/userReducer';

const reducer = combineReducers({
	user: userReducer,
	movies: movieReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
