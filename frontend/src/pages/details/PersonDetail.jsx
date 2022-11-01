import React from "react";

const PersonDetail = () => {
  return (
    <div className="row">
      <div className="col">
        <img
          src="https://images.pexels.com/photos/1096147/pexels-photo-1096147.jpeg?cs=srgb&dl=pexels-kelvin-octa-1096147.jpg&fm=jpg"
          className="figure-img img-fluid rounded"
          alt="..."
          width="600"
          height="auto"
          style={{ marginLeft: 40, marginTop: 20 }}
        />
      </div>
      <div className="col" style={{ marginTop: 80 }}>
        <div className="row">
          <div className="col">
            <h3>Name:</h3>
          </div>
          <div className="col">
            <h3>khan</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Father's Name:</h3>
          </div>
          <div className="col">
            <h3>AnyName</h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h3>Age:</h3>
          </div>
          <div className="col">
            <h3>10 years</h3>
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
  );
};

export default PersonDetail;
