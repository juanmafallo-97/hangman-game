import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import wordReducer from './wordReducer';
import secondaryWordReducer from './secondaryWordReducer';
import messageReducer from './messageReducer';
import livesReducer from './livesReducer';
import incLettersReducer from './incLettersReducer';

const allReducers = combineReducers({
  players: playerReducer,
  word: wordReducer,
  secondaryWord: secondaryWordReducer,
  message: messageReducer,
  lives: livesReducer,
  incLetters: incLettersReducer,
});

export default allReducers;
