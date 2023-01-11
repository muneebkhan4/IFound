import React from "react";

const ThingPost = (props) => {
  return (
    <React.Fragment>
      <div className="custom-post-card" style={{ marginBottom: "1rem" }}>
        <a href="/Thing-Details">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
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
            <h5 className="card-title">Name: Thing</h5>
            <h6 className="card-text">City: Lahore</h6>
            <h6 className="card-text">Color: Black</h6>
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
