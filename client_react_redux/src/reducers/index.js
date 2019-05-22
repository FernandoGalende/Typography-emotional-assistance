import { combineReducers } from 'redux';
import { home } from './home';
import { emotions } from './emotions';

export default combineReducers({
  home,
  emotions
});