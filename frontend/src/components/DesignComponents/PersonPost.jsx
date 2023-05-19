import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';


function PersonPost(props) {
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
        <div className="card-body" style={{ marginTop: "1rem" }}>
          <h5 className="card-title">Name: {props.data.name}</h5>
          <h6 className="card-text">City: {props.data.city}</h6>
          <h6 className="card-text">Age: {props.data.age} years</h6>

          <NavLink
            className="nav-link m-4 fw-bold"
            style={{ marginTop: "0.5rem" }}
            to={{ pathname: `/Person-Details/${props.data.postId}` }}
          >
            View Details
          </NavLink>
          {
            props.deletePermission && <Button className="mb-2" onClick={() => props.handleDeleteActivePost(props.data.postId)} variant="outline-secondary" size="sm">Delete</Button>
          }
          {
            props.confidence && <div id="match-confidence" >
              <div className="d-flex align-items-center justify-content-center">
                <div>
                  Confidence:
                </div>
                <div className="text-center m-1 fw-bold">{props.confidence.toFixed(4)}%</div>
              </div>

              <ProgressBar
                now={props.confidence}
                label={`${props.confidence}%`}
                variant={props.confidence < 50 ? 'danger' : 'success'}
              />
            </div>
          }

          <div id="spacer" className="mb-2"></div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PersonPost;
