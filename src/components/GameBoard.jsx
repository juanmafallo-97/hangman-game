import React from 'react';
import InputLetter from './InputLetter';
import Word from './Word';

const GameBoard = () => {
  return (
    <div>
      <Word />
      <InputLetter />
    </div>
  );
};

export default GameBoard;
