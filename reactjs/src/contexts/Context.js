import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api/config";

export const AuthContext = createContext();
export const NameContext = createContext();

export const ContextProvider = (props) => {
  axios.defaults.withCredentials = true;
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState();
  useEffect(() => {
    axios.get(`${api}/check`).then((res) => {
      //   console.log(res.data);
      if (res.data === true) {
        setAuth(true);
        axios.get(`${api}/profile`).then((res) => {
          setName(res.data.name);
          //   console.log(name);
        });
      }
    });
  });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <NameContext.Provider value={[name, setName]}>
        {props.children}
      </NameContext.Provider>
    </AuthContext.Provider>
  );
};
