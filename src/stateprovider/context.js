import { useReducer, createContext } from "react";

//Context for the application
export const Context = createContext();

//Creating this component for the wrappping the App component in this for ease of use of the context in the application
export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
