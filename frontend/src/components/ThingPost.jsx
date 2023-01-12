import React from "react";

const ThingPost = (props) => {
  let image = "data:image/jpg;base64," + props.image;
  if (!props.image)
    image =
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
  return (
    <React.Fragment>
      <div className="custom-post-card" style={{ marginBottom: "1rem" }}>
        <a href="/Thing-Details">
          <img
            src={image}
            className="card-img-top"
            style={{
              marginTop: "0.15rem",
              borderRadius: "1.5rem",
              width: "14rem",
            }}
          />
        </a>
        <div className="card-body">
          <a href="/Thing-Details">
            <h5 className="card-title">Name: {props.name}</h5>
            <h6 className="card-text">City: {props.city}</h6>
            <h6 className="card-text">Color: {props.color}</h6>
          </a>
          <a
            href="/Thing-Details"
            className="btn btn-primary"
            style={{ marginTop: "1rem", marginBottom: "0.25rem" }}
          >
            View Details
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThingPost;
