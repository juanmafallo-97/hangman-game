import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../actions/setMessge";
import { setLives } from "../actions/setLives";
import { updateWord } from "../actions/updateWord";

const InputLetter = () => {
  const [value, setValue] = useState("");

  const word = Array.from(useSelector((state) => state.word));
  const secondaryWord = useSelector((state) => state.secondaryWord);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const checkLetter = (e) => {
    e.preventDefault();
    const input = value.toUpperCase();
    const symbols = ["Á", "É", "Í", "Ó", "Ú"];
    if (input.length === 0) return;
    if (input.length > 1) {
      const message = "Debe ingresar una sola letra";
      dispatch(setMessage(message));
    } else if (symbols.includes(input)) {
      const message = "La letra no debe contener símbolos";
      dispatch(setMessage(message));
    } else {
      setValue("");
      dispatch(setMessage(""));
      validateLetter(input);
    }
  };

  const validateLetter = (letter) => {
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
      dispatch(setLives(-1));
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
