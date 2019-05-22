import { combineReducers } from 'redux';
import { home } from './home';
import { emotions, getJoyEmotion as _getJoyEmotion  } from './emotions';

export default combineReducers({
  home,
  emotions
});

export const getJoyEmotion = state => _getJoyEmotion(state)