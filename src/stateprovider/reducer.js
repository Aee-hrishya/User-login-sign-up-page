export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { user: action.payload };

    default:
      return state;
  }
};

export default reducer;
