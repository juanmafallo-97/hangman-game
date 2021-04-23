const wordReducer = (state = '', action) => {
  const word = action.payload;
  switch (action.type) {
    case 'SET_WORD':
      return word;
    default:
      return state;
  }
};

export default wordReducer;
