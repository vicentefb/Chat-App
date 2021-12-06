import React, { useState, createContext } from "react";

// initialize an instance of a context api
export const Context = createContext();

// this provider is component where you can put components inside of it
// and whenever components live inside of this provider they will have access to this context
export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
