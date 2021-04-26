const incLettersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INC_LETTER':
      return [...state, action.payload];
    case 'REMOVE_LETTERS':
      return [];
    default:
      return state;
  }
};

export default incLettersReducer;
