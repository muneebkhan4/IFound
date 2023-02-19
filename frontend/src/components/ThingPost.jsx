import React from "react";
import { NavLink } from "react-router-dom";
const ThingPost = (props) => {
  let image = "data:image/jpg;base64," + props.image;
  if (!props.image)
    image =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  return (
    <React.Fragment>
      <div className="custom-post-card" style={{ marginBottom: "1rem" }}>
        <img
          src={image}
          className="card-img-top"
          style={{
            marginTop: "0.15rem",
            borderRadius: "1.5rem",
            width: "14rem",
            height: "14rem",
          }}
        />
        <div className="card-body" style={{ marginTop: "1rem" }}>
          <h5 className="card-title">Name: {props.data.name}</h5>
          <h6 className="card-text">City: {props.data.city}</h6>
          <h6 className="card-text">Color: {props.data.color}</h6>
          <NavLink
            className="nav-link m-4"
            style={{ marginTop: "1rem", marginBottom: "0.25rem" }}
            to={{ pathname: "/Thing-Details" }}
            state={{ data: props.data, image: props.image }}
          >
            View Details
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThingPost;
