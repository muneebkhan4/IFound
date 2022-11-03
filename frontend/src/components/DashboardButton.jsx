import React from "react";
import { NavLink } from "react-router-dom";

function DashboardButton({ title, navTo }) {
  return (
    <React.Fragment>
      <NavLink className="nav-link m-4" style={{ marginTop: 10 }} to={navTo}>
        <button className="DashboardButton">
          <h2 className="fonts">{title}</h2>
        </button>
      </NavLink>
    </React.Fragment>
  );
}

export default DashboardButton;
