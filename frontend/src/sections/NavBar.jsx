import { NavLink, Link, Navigate } from "react-router-dom";
// import { Button } from "rsuite";
import NotFound from "../pages/common/NotFound";
import "../styles/navbar.css";
import * as FaIcons from "react-icons/fa";
import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
// import "../App.css";
import { IconContext } from "react-icons";
// import "./NavBar.css";
import ifLogo from '../Images/image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Button, Row } from "rsuite";
import { TargetType } from "../Enums/Enums";

function NavBar(props) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);


  const handleLogout = () => {
    debugger
    localStorage.clear();

  };
  return (
    <React.Fragment>
      <div >
        <Navbar collapseOnSelect className="h-auto" expand="lg" bg="dark" variant="dark">
          <Container style={{minHeight:"4rem"}} >
            <Navbar.Brand as={Link} to="/">
              <img src={ifLogo}
              style={{height:"2rem",
              width: "6rem"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto gap-3">
                <Nav.Link as={Link} to="/" >Home</Nav.Link>
                <Nav.Link as={Link} to="/user-dashboard">Dashboard</Nav.Link>
                <NavDropdown title="Lost" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Lost-List" >Lost Person List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/thing-Lost-List">Lost Thing List</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Found" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/Found-List">Found Person List</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/thing-Lost-List">Found Thing List</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Match" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/lostMatchCases">Lost Person </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Lost Thing </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/foundMatchCases">Found Person</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Found Thing </NavDropdown.Item>

                </NavDropdown>
              </Nav>
              <Nav>
                {!props.currentUser && (
                  <Nav.Link onClick={handleLogout} href="/Login"> Login</Nav.Link>
                )}

                <NavDropdown title="Profile" id="collasible-nav-dropdown">
                  {/* <NavDropdown.Item href="#action/3.1">Post Lost Person</NavDropdown.Item>
                  <NavDropdown.Divider /> */}

                  
                  <NavDropdown.Item as={Link} to="/uploadLostPerson">Create Person</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to= {`/upload-thing/MissingThing`} >Create Thing</NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1"> Privacy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1"> Logout</NavDropdown.Item>

                </NavDropdown>


                {props.currentUser && (
                  <Nav.Link onClick={handleLogout} href="/Login">Logout</Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    </React.Fragment>








    // <div>
    //   <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    //     <ul style={{ paddingLeft: "0rem" }} onClick={showSidebar}>
    //       <li className="navbar-toggle">
    //         <Link to="#" className="menu-bars">
    //           <AiIcons.AiOutlineClose />
    //         </Link>
    //       </li>
    //       {SidebarData.map((item, index) => {
    //         return (
    //           <li key={index} className={item.cName}>
    //             <Link to={item.path}>
    //               {item.icon}
    //               <span>{item.title}</span>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>


    //   </nav>
    //   <nav className="navbar sticky-top navbar-expand-lg bg-light">

    //     <div className="container-fluid">
    //       <div className="d-flex align-items-center">
    //         {localStorage.getItem("email") &&
    //           (<Link to="#" className="menu-bars">
    //             <FaIcons.FaBars onClick={showSidebar} />
    //           </Link>)
    //         }
    //         <Link
    //           style={{ textDecoration: "none" }}
    //           className="navbar-brand"
    //           to="/"
    //         >
    //           <h2 className="fonts" style={{ marginLeft: 20 }}>
    //             IFound
    //           </h2>
    //         </Link>
    //       </div>





    //       <div className="navbar-nav">
    //         <NavLink className="nav-link m-4" to="/Lost-List">
    //           Person Lost List
    //         </NavLink>
    //         <NavLink className="nav-link m-4" to="/Found-List">
    //           Person Found List
    //         </NavLink>
    //         <NavLink className="nav-link m-4" to="/thing-Lost-List">
    //           Thing Lost List
    //         </NavLink>
    //         <NavLink className="nav-link m-4" to="/thing-Found-List">
    //           Thing Found List
    //         </NavLink>

    //         <NavLink className="nav-link m-4" to="/Contact-Us">
    //           Contact Us
    //         </NavLink>
    //       </div>

    //       {props.currentUser && (
    //         <NavLink className="nav-link m-4" to="/Login">
    //           <Button
    //             className="btn btn-primary m-4 "
    //             color="blue"
    //             appearance="primary"
    //             onClick={handleLogout}
    //           >
    //             Logout
    //           </Button>
    //         </NavLink>
    //       )}
    //       {!props.currentUser && (
    //         <NavLink className="nav-link m-4" to="/Login">
    //           <Button
    //             className="btn btn-primary m-4 "
    //             color="blue"
    //             appearance="primary"
    //             onClick={handleLogout}
    //           >
    //             Login/ Signup
    //           </Button>
    //         </NavLink>
    //       )}
    //     </div>
    //   </nav>
    // </div>

  );
}

export default NavBar;