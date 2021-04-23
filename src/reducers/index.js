import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import wordReducer from './wordReducer';

const allReducers = combineReducers({
  players: playerReducer,
  word: wordReducer,
});

export default allReducers;
