const messageReducer = (state = "", action) => {
  const message = action.payload;
  switch (action.type) {
    case "SET_MESSAGE":
      return message;
    default:
      return state;
  }
};

export default messageReducer;
