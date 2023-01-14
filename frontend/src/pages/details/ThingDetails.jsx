import React from "react";
import NavBar from "../../sections/NavBar";
const ThingDetail = () => {
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />;
      <div className="row">
        <div className="col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            className="figure-img img-fluid rounded"
            alt="..."
            width="600"
            height="auto"
            style={{ marginLeft: 40, marginTop: 20 }}
          />
        </div>
        <div
          className="col bg-light"
          style={{ marginTop: 80, marginRight: 40 }}
        >
          <div className="row">
            <div className="col">
              <h3>Name:</h3>
            </div>
            <div className="col">
              <h3>Thing</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Category:</h3>
            </div>
            <div className="col">
              <h3>AnyCateg</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Color:</h3>
            </div>
            <div className="col">
              <h3>Any Color</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>City:</h3>
            </div>
            <div className="col">
              <h3>Lahore</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Case Type:</h3>
            </div>
            <div className="col">
              <h3>Found</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Founder Name:</h3>
            </div>
            <div className="col">
              <h3>AnyName</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Contact No.:</h3>
            </div>
            <div className="col">
              <h3>00000000000</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Founder Address:</h3>
            </div>
            <div className="col">
              <h3>House no. 00, AnyTown, Lahore</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Details:</h3>
            </div>
            <div className="col">
              <h3>Any details come here</h3>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ThingDetail;