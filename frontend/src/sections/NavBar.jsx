import React, { Component } from "react";
import {
  Routes,
  Route,
  useNavigate,
  NavLink,
  Link,
  Navigate,
} from "react-router-dom";
import NotFound from "../pages/NotFound";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          <h2 className="fonts">IFound</h2>
        </Link>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ">
            <NavLink className="nav-link m-4" aria-current="page" to="/Home">
              Home
            </NavLink>
            <NavLink className="nav-link m-4" to="/Found-List">
              Found List
            </NavLink>
            <NavLink className="nav-link m-4" to="/Lost-List">
              Lost List
            </NavLink>
            <NavLink className="nav-link m-4" to="/Contact-Us">
              Contact Us
            </NavLink>
          </div>
        </div>
        <NavLink className="nav-link m-4" to="/Login">
          <button className="btn btn-primary m-4">Login/ Signup</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
