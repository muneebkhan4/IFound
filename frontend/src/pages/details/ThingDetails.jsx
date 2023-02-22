import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ThingDetail = () => {
  const location = useLocation();
  const { data, image } = location.state;
  console.log(data);
  return (
    <React.Fragment>
      <h1 className="fonts center">Thing Post Details</h1>
      <div className="row" style={{ padding: "3rem" }}>
        <div className="col" style={{ padding: "1rem" }}>
          {image && (
            <img
              src={"data:image/jpg;base64," + image}
              className="figure-img img-fluid"
              alt="..."
              width="600"
              height="auto"
              style={{ borderRadius: "1rem" }}
            />
          )}
          {!image && (
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
              className="figure-img img-fluid"
              alt="..."
              width="600"
              height="auto"
              style={{ borderRadius: "1rem" }}
            />
          )}
        </div>
        <div
          className="col bg-light"
          style={{ padding: "2rem", marginLeft: "5rem", borderRadius: "1rem" }}
        >
          <div className="row">
            <div className="col">
              <h3>Name:</h3>
            </div>
            <div className="col">
              <h3>{data.name}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Category:</h3>
            </div>
            <div className="col">
              <h3>{data.category}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Color:</h3>
            </div>
            <div className="col">
              <h3>{data.color}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>City:</h3>
            </div>
            <div className="col">
              <h3>{data.city}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Case Type:</h3>
            </div>
            <div className="col">
              <h3>{data.postType}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Contact No.:</h3>
            </div>
            <div className="col">
              <h3>{data.phone}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Address:</h3>
            </div>
            <div className="col">
              {data.address && <h3>{data.address}</h3>}
              {!data.address && <h3>---</h3>}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Details:</h3>
            </div>
            <div className="col">
              <h3>{data.details}</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThingDetail;
