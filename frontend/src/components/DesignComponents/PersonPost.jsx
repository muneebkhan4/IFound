import React from "react";
import { NavLink } from "react-router-dom";

function PersonPost(props) {
  debugger;
  return (
    <React.Fragment >
      <div className="custom-post-card" style={{ marginBottom: "1rem" }}>
        <img
          src={"data:image/jpg;base64," + props.image}
          alt="image"
          className="card-img-top"
          width="130" height="200"
          style={{
            marginTop: "0.15rem",
            borderRadius: "1rem",
            width: "14rem",
          }}
        />
        <div className="card-body"  style={{ marginTop: "1rem" }}>
          <h5 className="card-title">Name: {props.data.name}</h5>
          <h6 className="card-text">City: {props.data.city}</h6>
          <h6 className="card-text">Age: {props.data.age} years</h6>

          <NavLink
            className="nav-link m-4"
            style={{ marginTop: "1rem", marginBottom: "0.25rem" }}
            to={{ pathname: `/Person-Details/${props.data.postId}` }}
          >
            View Details
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PersonPost;
