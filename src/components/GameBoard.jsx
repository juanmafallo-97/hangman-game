import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWord } from "../actions/updateWord";
import InputLetter from "./InputLetter";
import Letter from "./Letter";

const GameBoard = () => {
  const word = useSelector((state) => state.word);
  const secondaryWord = useSelector((state) => state.secondaryWord);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateWord(new Array(word.length).fill("a")));
  }, [word, dispatch]);

  const wordRender = secondaryWord.map((letter, index) => {
    return <Letter letter={letter} key={index} />;
  });

  return (
    <div>
      {wordRender}
      <InputLetter />
    </div>
  );
};

export default GameBoard;
