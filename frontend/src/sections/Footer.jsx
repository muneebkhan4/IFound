import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Footer(props) {
  return (
    <React.Fragment>
      <div className="footer">
        <Card
          style={{
            background: "dark",
            marginTop: 20,
            bottom: "0",
            position: "fixed",
            width: "100%"
          }}
        >
          <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
            <div className="col">
              <NavLink to={"/"}>Home</NavLink>
            </div>
          </div>

          <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
            <div className="col">
              <NavLink to={"/Contact-Us"}>Contact us</NavLink>
            </div>
          </div>

          <div className="row" style={{ marginTop: 10, marginLeft: 10 }}>
            <div className="col">
              <NavLink to={"/"}>About us</NavLink>
            </div>
          </div>
          <div className="center">
            &#169;All rights are reserved by&nbsp;
            <a href="mailto:muneebkhan4@outlook.com">IFound</a>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Footer;
