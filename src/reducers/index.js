import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import wordReducer from "./wordReducer";
import secondaryWordReducer from "./secondaryWordReducer";

const allReducers = combineReducers({
  players: playerReducer,
  word: wordReducer,
  secondaryWord: secondaryWordReducer,
});

export default allReducers;
