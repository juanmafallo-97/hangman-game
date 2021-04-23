const playerReducer = (state = 0, action) => {
  const number = action.payload;
  switch (action.type) {
    case 'SET_PLAYERS':
      return number;
    default:
      return state;
  }
};

export default playerReducer;
