export const addIncLetter = (letter) => {
  return {
    type: 'ADD_INC_LETTER',
    payload: letter,
  };
};

export const removeLetters = () => {
  return {
    type: 'REMOVE_LETTERS',
  };
};
