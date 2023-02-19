import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "rsuite";
import "../styles/navbar.css";


const NavBar = () => {

  let [credentials, setCredentials] = useState({ email: null, password: "", token: null });

  // useEffect(() => {
  //   const email = localStorage.getItem("email");
  //   const name = localStorage.getItem("name");
  //   const token = localStorage.getItem("x_auth_token");
  //   setCredentials({ email, name, token });
  // });

  const handleSignIn = () => {
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const token = localStorage.getItem("x_auth_token");
    setCredentials({ email, name, token });
  }

  const handleLogout = () => {
    localStorage.clear();
    credentials = null;
    setCredentials(
      {
        "email": "",
        "name": "",
      });
  };

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link
          style={{ textDecoration: "none" }}
          className="navbar-brand"
          to="/"
        >
          <h2 className="fonts" style={{ marginLeft: 20 }}>
            IFound
          </h2>
        </Link>
        <div className="justify-content-center">
          <div className="navbar-nav">
            <NavLink className="nav-link m-4" aria-current="page" to="/Home">
              Home
            </NavLink>
            {localStorage.getItem("email") && (
              <NavLink
                className="nav-link m-4"
                aria-current="page"
                to="/user-dashboard"
              >
                Dashboards
              </NavLink>
            )}
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

        {credentials.email && (
          <NavLink className="nav-link m-4" to="/Login">
            <Button
              className="btn btn-primary m-4 "
              color="blue"
              appearance="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </NavLink>
        )}
        {!credentials.email && (
          <NavLink className="nav-link m-4" to="/Login">
            <Button
              className="btn btn-primary m-4 "
              color="blue"
              appearance="primary"
              onClick={handleSignIn}
            >
              Login/ Signup
            </Button>
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
