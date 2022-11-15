import React from "react";

function PersonPost() {
  return (
    <React.Fragment>
      <div className="custom-post-card" style={{ marginBottom: "1rem" }}>
        <a href="/Person-Details">
          <img
            src="https://images.pexels.com/photos/1096147/pexels-photo-1096147.jpeg?cs=srgb&dl=pexels-kelvin-octa-1096147.jpg&fm=jpg"
            className="card-img-top"
            style={{
              marginTop: "0.25rem",
              borderRadius: "1.5rem",
              width: "14rem",
            }}
          />
        </a>
        <div className="card-body">
          <a href="/Person-Details">
            <h5 className="card-title">Name: AnyName</h5>
            <h6 className="card-text">City: Lahore</h6>
            <h6 className="card-text">Age: 10 years</h6>
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
