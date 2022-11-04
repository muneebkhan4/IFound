import React from "react";
import Card from "react-bootstrap/Card";

function Details(props) {
  return (
    <React.Fragment>
      <h2 className="fonts" style={{ marginLeft: 40, marginTop: 40 }}>
        Details
      </h2>
      <Card
        style={{
          width: "25rem",
          //height: "10rem",
          background: "lightblue",
          marginLeft: 40,
          //marginTop: 40,
        }}
        className="center web-color bg-light"
      >
        <div className="col" style={{ marginLeft: 20, marginTop: 40 }}>
          <div className="row">
            <div className="col">
              <h4>Name:</h4>
            </div>
            <div className="col">
              <h4>khan</h4>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4>City:</h4>
            </div>
            <div className="col">
              <h4>Lahore</h4>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4>Contact No.:</h4>
            </div>
            <div className="col">
              <h4>00000000000</h4>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4>Address:</h4>
            </div>
            <div className="col">
              <h4>House no. 00, AnyTown, Lahore</h4>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h4>Bio:</h4>
            </div>
            <div className="col">
              <h4>Any details come here</h4>
            </div>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
}

export default Details;
