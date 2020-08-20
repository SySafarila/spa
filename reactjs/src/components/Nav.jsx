import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/Context";
import axios from "axios";
import { api } from "../api/config";

const Nav = () => {
  axios.defaults.withCredentials = true;
  const [collapse, setCollapse] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  useEffect(() => {
    axios.get(`${api}/check`).then((res) => {
      console.log(res.data);
      if (res.data === true) {
        setAuth(true);
      }
    });
  });
  const collapsing = () => {
    setCollapse(!collapse);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
      <Link className="navbar-brand" to="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler border-0"
        type="button"
        onClick={collapsing}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${
          collapse ? "show" : ""
        } justify-content-between`}
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          {auth === true ? (
            ""
          ) : (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
