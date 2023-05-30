import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { COLORS } from "../styles/globalColors";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer"  >
        <Card className="w-100 mt-1"
          style={{
            background: "dark",
            backgroundColor: COLORS.ifDarkBlue,
            zIndex:"11"
          }}
        >
          <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
            <div className="col" >
              <NavLink to={"/"}><div style={{ color: "white" }}>Home</div></NavLink>
            </div>
          </div>

          <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
            <div className="col">
              <NavLink to={"/Contact-Us"}><div style={{ color: "white" }}>Contact us</div> </NavLink>
            </div>
          </div>

          <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
            <div className="col">
              <NavLink to={"/"}><div style={{ color: "white" }}>About us</div></NavLink>
            </div>
          </div>
          <div className="center" style={{ color: "white" }}>
            &#169;All rights are reserved by&nbsp;
            <a href="mailto:muneebkhan4@outlook.com"><div style={{ color: "white",textDecoration: "underline" }}>IFound</div></a>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Footer;
