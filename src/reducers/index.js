import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import wordReducer from "./wordReducer";
import secondaryWordReducer from "./secondaryWordReducer";
import messageReducer from "./messageReducer";
import livesReducer from "./livesReducer";

const allReducers = combineReducers({
  players: playerReducer,
  word: wordReducer,
  secondaryWord: secondaryWordReducer,
  message: messageReducer,
  lives: livesReducer,
});

export default allReducers;
