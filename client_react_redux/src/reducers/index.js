import { combineReducers } from 'redux';
import { home } from './home';
import { createSelector } from 'reselect';
import { emotions, getJoyEmotion as _getJoyEmotion  } from './emotions';

export default combineReducers({
  home,
  emotions
});

export const getJoyEmotion = createSelector(state => state, _getJoyEmotion)