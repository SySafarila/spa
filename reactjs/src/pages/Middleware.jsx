import React, { useContext } from "react";
import { AuthContext } from "../contexts/Context";
import { Redirect } from "react-router-dom";

const Middleware = (props) => {
  const [auth] = useContext(AuthContext);
  if (auth === true) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default Middleware;
