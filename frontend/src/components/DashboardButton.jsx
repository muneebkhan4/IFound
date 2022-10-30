import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "rsuite";
import Card from "react-bootstrap/Card";

function DashboardButton({ title, navTo }) {
  return (
    <React.Fragment>
      <NavLink className="nav-link m-4" style={{ marginTop: 20 }} to={navTo}>
        <Card
          style={{
            width: "18rem",
            height: "10rem",
          }}
          className="center"
        >
          <h2 className="center" style={{ marginTop: 43 }}>
            Card Title
          </h2>
        </Card>
      </NavLink>
    </React.Fragment>
  );
}

export default DashboardButton;
