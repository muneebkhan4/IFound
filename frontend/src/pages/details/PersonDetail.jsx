import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import NavBar from "../../sections/NavBar";
function PersonDetail(props) {
  const location = useLocation();
  const { data, image } = location.state;
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />;
      <div className="row">
        <div className="col">
          <img
            src={"data:image/jpg;base64," + image}
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
              <h3>{data.name}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Father's Name:</h3>
            </div>
            <div className="col">
              <h3>{data.fatherName}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Age:</h3>
            </div>
            <div className="col">
              <h3>{data.age} years</h3>
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
              <h3>Founder Name:</h3>
            </div>
            <div className="col">
              <h3>{data.founderName}</h3>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>Contact No.:</h3>
            </div>
            <div className="col">
              <h3>{data.phoneNumber}</h3>
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
}

export default PersonDetail;
