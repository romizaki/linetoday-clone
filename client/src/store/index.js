import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import newsReducers from './reducers/newsReducer';

const rootReducers = combineReducers({
  news: newsReducers
})

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;