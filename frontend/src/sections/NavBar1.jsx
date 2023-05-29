import { NavLink, Link, Navigate } from "react-router-dom";
import { Button } from "rsuite";
import NotFound from "../pages/common/NotFound";
import "../styles/navbar.css";
import * as FaIcons from "react-icons/fa";
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";
import "./NavBar.css";

import {NavDropdown} from 'react-bootstrap';

function NavBar(props) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  const handleLogout = () => {
    localStorage.clear();

  };
  return (
    <div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul style={{ paddingLeft: "0rem" }} onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>


      </nav>
      <nav className="navbar sticky-top navbar-expand-lg bg-light">

        <div className="container-fluid">
          <div className="d-flex align-items-center">
            {localStorage.getItem("email") &&
              (<Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>)
            }
            <Link
              style={{ textDecoration: "none" }}
              className="navbar-brand"
              to="/"
            >
              <h2 className="fonts" style={{ marginLeft: 20 }}>
                IFound
              </h2>
            </Link>
          </div>





          <div className="navbar-nav">
            <NavLink className="nav-link m-4" to="/Lost-List">
              Person Lost List
            </NavLink>
            <NavLink className="nav-link m-4" to="/Found-List">
              Person Found List
            </NavLink>
            <NavLink className="nav-link m-4" to="/thing-Lost-List">
              Thing Lost List
            </NavLink>
            <NavLink className="nav-link m-4" to="/thing-Found-List">
              Thing Found List
            </NavLink>

            <NavLink className="nav-link m-4" to="/Contact-Us">
              Contact Us
            </NavLink>
          </div>

          {props.currentUser && (
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
          {!props.currentUser && (
            <NavLink className="nav-link m-4" to="/Login">
              <Button
                className="btn btn-primary m-4 "
                color="blue"
                appearance="primary"
                onClick={handleLogout}
              >
                Login/ Signup
              </Button>
            </NavLink>
          )}
        </div>
      </nav>
    </div>

  );
}

export default NavBar;