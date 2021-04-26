import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from '../actions/setMessge';
import { setLives } from '../actions/setLives';
import { updateWord } from '../actions/updateWord';
import { addIncLetter } from '../actions/incLettersActions';

const InputLetter = () => {
  const [value, setValue] = useState('');

  const word = Array.from(useSelector((state) => state.word));
  const secondaryWord = useSelector((state) => state.secondaryWord);
  const incLetters = useSelector((state) => state.incLetters);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const checkLetter = (e) => {
    e.preventDefault();
    const input = value.toUpperCase();
    const invalidLetter = /[^A-Z]/gi;
    if (input.length === 0) return;
    if (input.length > 1) {
      const message = 'Debe ingresar una sola letra';
      dispatch(setMessage(message));
      return;
    }
    if (invalidLetter.test(input)) {
      const message = 'La letra no debe contener símbolos, espacios o tiles';
      dispatch(setMessage(message));
      return;
    }
    if (repeatedLetter(input, secondaryWord, incLetters)) {
      dispatch(setMessage(`La letra ${input} ya fue ingresada`));
      return;
    }
    setValue('');
    dispatch(setMessage(''));
    validateLetter(input, word);
  };

  const validateLetter = (letter, word) => {
    if (word.includes(letter)) {
      const indexes = [];
      word.forEach((element, index) => {
        if (letter === element) indexes.push(index);
      });
      const updatedWord = secondaryWord.map((element, index) => {
        if (indexes.includes(index)) return letter;
        else return element;
      });
      dispatch(updateWord(updatedWord));
    } else {
      dispatch(addIncLetter(letter));
      dispatch(setLives(-1));
    }
  };

  const repeatedLetter = (letter, secondaryWord, incLetters) => {
    if (secondaryWord.includes(letter)) return true;
    if (incLetters.includes(letter)) {
      return true;
    }
  };

  return (
    <div>
      <form onSubmit={checkLetter}>
        <input
          type="text"
          onChange={onChange}
          value={value}
          className="letter-input input"
          placeholder="Letra..."
        />
        <button type="submit" className="button">
          Verificar
        </button>
      </form>
    </div>
  );
};

export default InputLetter;
