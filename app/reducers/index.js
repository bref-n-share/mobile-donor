import { combineReducers } from 'redux';
import sitesReducer from './sitesReducer';

const globalReducer = combineReducers({
  sitesReducer: sitesReducer,
});

export default globalReducer;

