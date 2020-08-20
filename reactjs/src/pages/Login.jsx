import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { api, csrfCookie } from "../api/config";
import { AuthContext } from "../contexts/Context";
import { Redirect } from "react-router-dom";

const Login = () => {
  axios.defaults.withCredentials = true;
  const [formPassword, setFormPassword] = useState(true);
  const [auth, setAuth] = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.get(csrfCookie).then((res) => {
      console.log(res);
      axios.post(`${api}/login`, data).then((res) => {
        console.log(res);
        setAuth(true);
      });
    });
  };

  const passwordToggle = () => {
    setFormPassword(!formPassword);
  };
  if (auth === false) {
    return (
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      ref={register}
                      placeholder="Email"
                      autoComplete="none"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type={formPassword ? "password" : "text"}
                      className="form-control"
                      name="password"
                      ref={register}
                      placeholder="Password"
                      autoComplete="none"
                    />
                    <small
                      className="float-right text-muted"
                      style={{ cursor: "pointer", userSelect: "none" }}
                      onClick={passwordToggle}
                    >
                      {formPassword ? "Show password" : "Hide password"}
                    </small>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Login;
