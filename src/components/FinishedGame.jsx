import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWord } from "../actions/setWord";
import { updateWord } from "../actions/updateWord";
import { setLives } from "../actions/setLives";
import { selectWord } from "../assets/words";

const FinishedGame = () => {
  const lives = useSelector((state) => state.lives);
  const word = useSelector((state) => state.word);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  return (
    <div className="finished">
      {lives === 0 ? "Perdiste :(" : "Ganaste!"}
      <p className="word">La palabra era {word}</p>
      <button
        onClick={() => {
          dispatch(setWord(""));
          dispatch(updateWord([]));
          dispatch(setLives(7 - lives));
          if (players === 1) dispatch(setWord(selectWord()));
        }}
      >
        Volver a jugar
      </button>
    </div>
  );
};

export default FinishedGame;
