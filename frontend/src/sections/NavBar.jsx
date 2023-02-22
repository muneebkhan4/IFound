import React, { Component } from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { Button } from "rsuite";
import NotFound from "../pages/common/NotFound";
import "../styles/navbar.css";

class NavBar extends Component {
  handleLogout = () => {
    localStorage.clear();
  };
  render() {
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

          {this.props.currentUser && (
            <NavLink className="nav-link m-4" to="/Login">
              <Button
                className="btn btn-primary m-4 "
                color="blue"
                appearance="primary"
                onClick={this.handleLogout}
              >
                Logout
              </Button>
            </NavLink>
          )}
          {!this.props.currentUser && (
            <NavLink className="nav-link m-4" to="/Login">
              <Button
                className="btn btn-primary m-4 "
                color="blue"
                appearance="primary"
                onClick={this.handleLogout}
              >
                Login/ Signup
              </Button>
            </NavLink>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;