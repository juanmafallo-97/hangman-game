import React from 'react';
import {} from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayers } from '../actions/setPlayers';
import { setWord } from '../actions/setWord';
import Game from './Game';

const GameContainer = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  return (
    <div className="game-cont">
      {players === 0 ? (
        <div className="buttons">
          <button onClick={() => dispatch(setPlayers(1))}>1 Jugador</button>
          <button onClick={() => dispatch(setPlayers(2))}>2 Jugadores</button>
        </div>
      ) : (
        <>
          <Game />
          <button
            onClick={() => {
              dispatch(setWord(''));
              dispatch(setPlayers(0));
            }}
          >
            Volver a seleccion de jugadores
          </button>
        </>
      )}
    </div>
  );
};

export default GameContainer;
