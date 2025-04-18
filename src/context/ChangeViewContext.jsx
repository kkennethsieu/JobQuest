import { createContext, useContext, useReducer } from "react";

const ChangeViewContext = createContext(undefined);

const initialState = {
  isHorizontal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, isHorizontal: action.payload };
    default:
      throw new Error("Error with reducer");
  }
}

function ChangeViewProvider({ children }) {
  const [{ isHorizontal }, dispatch] = useReducer(reducer, initialState);

  function setView() {
    dispatch({ type: "SET_VIEW", payload: !isHorizontal });
  }

  return (
    <ChangeViewContext.Provider value={{ setView, isHorizontal }}>
      {children}
    </ChangeViewContext.Provider>
  );
}

function useChangeView() {
  const context = useContext(ChangeViewContext);
  if (context === undefined)
    throw new Error("ChangeView Context was used outside of its provider");
  return context;
}

export { ChangeViewProvider, useChangeView };
