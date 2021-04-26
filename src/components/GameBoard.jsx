import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWord } from '../actions/updateWord';
import InputLetter from './InputLetter';
import Letter from './Letter';
import Lives from './Lives';
import Message from './Message';

const GameBoard = () => {
  const word = useSelector((state) => state.word);
  const secondaryWord = useSelector((state) => state.secondaryWord);
  const incLetters = useSelector((state) => state.incLetters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateWord(new Array(word.length).fill('')));
  }, [word, dispatch]);

  const wordRender = secondaryWord.map((letter, index) => {
    return <Letter letter={letter} key={index} />;
  });

  const incLettersRender = (
    <div>
      Letras incorrectas ingresadas: {incLetters.map((letter) => `${letter} `)}
    </div>
  );

  return (
    <>
      <div className="word-container">{wordRender}</div>
      <div className="input-container">
        <InputLetter />
      </div>
      <div className="message-container">
        <Message />
      </div>
      <div className="lives-container">
        <Lives />
      </div>
      {incLetters.length > 0 ? incLettersRender : ''}
    </>
  );
};

export default GameBoard;
