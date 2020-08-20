import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/Context";

const Nav = () => {
  const [collapse, setCollapse] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
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
            <NavLink className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
        </ul>
        {auth ? (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/profile"
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                activeClassName="active"
              >
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
