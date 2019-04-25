import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import cityReducer from './citiesReducer';

export default combineReducers({
  search: searchReducer,
  city: cityReducer,
});
