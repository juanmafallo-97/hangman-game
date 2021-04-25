const livesReducer = (state = 7, action) => {
  const value = action.payload;
  switch (action.type) {
    case "SET_LIVES":
      return state + value;
    default:
      return state;
  }
};

export default livesReducer;
