//InitialState for storing the users
export const initialState = {
  user: null,
};

//The reducer function for handling the users that are being added
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { user: action.payload };

    default:
      return state;
  }
};

export default reducer;
