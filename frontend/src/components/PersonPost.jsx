import React from "react";

const PersonPost = () => {
  return (
    <React.Fragment>
      <div className="card custom-post-card">
        <img
          src="https://images.pexels.com/photos/1096147/pexels-photo-1096147.jpeg?cs=srgb&dl=pexels-kelvin-octa-1096147.jpg&fm=jpg"
          className="card-img-top"
          alt="..."
          width="auto"
          height="350"
        />
        <div className="card-body">
          <h5 className="card-title">
            Name: AnyName &nbsp;&nbsp; City: Lahore
          </h5>
          <h6 className="card-text">10 years old.</h6>
          <a href="#" className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PersonPost;
