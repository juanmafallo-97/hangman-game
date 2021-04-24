import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWord } from "../actions/setWord";
import { selectWord } from "../assets/words";
import GameBoard from "./GameBoard";
import InputWord from "./InputWord";

const Game = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  const word = useSelector((state) => state.word);

  useEffect(() => {
    if (players === 1) dispatch(setWord(selectWord()));
  }, [players, dispatch]);

  return (
    <div>
      <h1>Jugadores: {players}</h1>
      {players === 1 ? <GameBoard /> : word ? <GameBoard /> : <InputWord />}
    </div>
  );
};

export default Game;
