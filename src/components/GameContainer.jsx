import React from 'react';
import {} from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayers } from '../actions/setPlayers';
import { setWord } from '../actions/setWord';
import { updateWord } from '../actions/updateWord';
import { setLives } from '../actions/setLives';
import { removeLetters } from '../actions/incLettersActions';
import Game from './Game';

const GameContainer = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const lives = useSelector((state) => state.lives);

  return (
    <div className="game-container">
      {players === 0 ? (
        <div className="buttons">
          <h1 className="main-title">Juego del Ahorcado</h1>
          <p className="normal-text">Seleccione el modo de juego</p>
          <button onClick={() => dispatch(setPlayers(1))} className="button">
            1 Jugador
          </button>
          <button onClick={() => dispatch(setPlayers(2))} className="button">
            2 Jugadores
          </button>
        </div>
      ) : (
        <>
          <Game />
          <button
            onClick={() => {
              dispatch(setWord(''));
              dispatch(setPlayers(0));
              dispatch(updateWord([]));
              dispatch(removeLetters());
              dispatch(setLives(7 - lives));
            }}
            className="button"
          >
            Volver a seleccion de jugadores
          </button>
        </>
      )}
    </div>
  );
};

export default GameContainer;
