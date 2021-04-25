import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setWord } from "../actions/setWord";
import { setMessage } from "../actions/setMessge";
import Message from "./Message";

const InputWord = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    validateWord(value);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const validateWord = (word) => {
    const symbolsRegExp = /[^A-Z]/gi;
    if (word.match(symbolsRegExp)) {
      return dispatch(
        setMessage(
          "Palabra no válida (no debe contener símbolos, ni tildes, ni espacios)"
        )
      );
    }
    dispatch(setMessage(""));
    dispatch(setWord(word));
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="">Ingrese la palabra con la que se va a jugar</label>
        <input type="text" onChange={onChange} value={value} />
        <button type="submit">Confirmar</button>
      </form>
      <Message />
    </div>
  );
};

export default InputWord;
