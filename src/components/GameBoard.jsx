import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWord } from "../actions/updateWord";
import InputLetter from "./InputLetter";
import Letter from "./Letter";
import Message from "./Message";
import "./styles/GameBoard.css";

const GameBoard = () => {
  const word = useSelector((state) => state.word);
  const secondaryWord = useSelector((state) => state.secondaryWord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateWord(new Array(word.length).fill("")));
  }, [word, dispatch]);

  const wordRender = secondaryWord.map((letter, index) => {
    return <Letter letter={letter} key={index} />;
  });

  return (
    <>
      <div className="word">{wordRender}</div>
      <div>
        <InputLetter />
      </div>
      <div>
        <Message />
      </div>
    </>
  );
};

export default GameBoard;
