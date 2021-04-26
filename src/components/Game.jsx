import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setWord } from '../actions/setWord';
import { selectWord } from '../assets/words';
import FinishedGame from './FinishedGame';
import GameBoard from './GameBoard';
import InputWord from './InputWord';

const Game = () => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  const word = useSelector((state) => state.word);
  const lives = useSelector((state) => state.lives);
  const secondaryWord = useSelector((state) => state.secondaryWord);

  useEffect(() => {
    if (players === 1) dispatch(setWord(selectWord()));
  }, [players, dispatch]);

  return (
    <div>
      <h1>Jugadores: {players}</h1>
      {lives === 0 || (word === secondaryWord.join('') && word.length !== 0) ? (
        <FinishedGame />
      ) : players === 1 ? (
        <GameBoard />
      ) : word ? (
        <GameBoard />
      ) : (
        <InputWord />
      )}
    </div>
  );
};

export default Game;
