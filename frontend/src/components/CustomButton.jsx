import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "rsuite";

function CustomButton({ title, navTo }) {
  return (
    <div className="left-margin-LL">
      <NavLink className="nav-link m-4" to={navTo}>
        <Button
          className="btn btn-primary m-4 "
          color="blue"
          appearance="primary"
        >
          {title}
        </Button>
      </NavLink>
    </div>
  );
}

export default CustomButton;
