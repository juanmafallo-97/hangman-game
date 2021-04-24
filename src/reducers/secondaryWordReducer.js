const secondaryWordReducer = (state = [], action) => {
  const word = action.payload;
  switch (action.type) {
    case "UPDATE_WORD":
      return word;
    default:
      return state;
  }
};

export default secondaryWordReducer;
