import React from "react";
import axios from "axios";
import { csrfCookie, api } from "../api/config";

const Home = () => {
  axios.defaults.withCredentials = true;
  const login = () => {
    axios.get(csrfCookie).then((res) => {
      console.log(res);
      axios
        .post(`${api}/login`, {
          email: "admin@gmail.com",
          password: "password",
        })
        .then((res) => {
          console.log(res);
        });
    });
  };
  const check = () => {
    axios.get(`${api}/check`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div className="container my-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, unde!
      Dolores ullam est voluptatibus aut ipsa repellendus doloremque delectus
      consequuntur commodi necessitatibus. Hic accusamus voluptatum, fugit nisi
      beatae unde reiciendis?
      <hr />
      <p onClick={login}>Login</p>
      <p onClick={check}>Check</p>
    </div>
  );
};

export default Home;
