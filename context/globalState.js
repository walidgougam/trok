import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./appReducer";

const initialState = {
  email: "",
  password: "",
  firstname: "",
  lastname: "",
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setEmail(email) {
    dispatch({
      type: "SET_EMAIL",
      payload: email,
    });
  }

  function setPassword(password) {
    dispatch({
      type: "SET_PASSWORD",
      payload: password,
    });
  }
  function setFirstname(firstname) {
    dispatch({
      type: "SET_FIRSTNAME",
      payload: firstname,
    });
  }
  function setLastname(lastname) {
    dispatch({
      type: "SET_LASTNAME",
      payload: lastname,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        email: state.email,
        password: state.password,
        setEmail,
        setPassword,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
