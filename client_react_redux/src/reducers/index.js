import { combineReducers } from 'redux';
import { user } from './user';
import { createSelector } from 'reselect';
import { emotions, getJoyEmotion as _getJoyEmotion  } from './emotions';

export default combineReducers({
  user,
  emotions
});

export const getJoyEmotion = createSelector(state => state, _getJoyEmotion)