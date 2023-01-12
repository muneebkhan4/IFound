import React from "react";

function PersonPost(props) {
  return (
    <React.Fragment>
      <div className="custom-post-card" style={{ marginBottom: "1rem" }}>
        <a href="/Person-Details">
          <img
            src={"data:image/jpg;base64," + props.image}
            alt="image"
            className="card-img-top"
            style={{
              marginTop: "0.15rem",
              borderRadius: "1.5rem",
              width: "14rem",
            }}
          />
        </a>
        <div className="card-body">
          <a href="/Person-Details">
            <h5 className="card-title">Name: {props.name}</h5>
            <h6 className="card-text">City: {props.city}</h6>
            <h6 className="card-text">Age: {props.age} years</h6>
          </a>
          <a
            href="/Person-Details"
            className="btn btn-primary"
            style={{ marginTop: "1rem", marginBottom: "0.25rem" }}
          >
            View Details
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PersonPost;
