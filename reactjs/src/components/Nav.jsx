import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [collapse, setCollapse] = useState(false);
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
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
