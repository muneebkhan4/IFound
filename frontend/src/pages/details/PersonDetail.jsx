import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import NavBar from "../../sections/NavBar";
function PersonDetail(props) {
  const location = useLocation();
  const { data, image } = location.state;
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <h1 className="fonts center">Person Post Details</h1>
      <div className="row" style={{ padding: "3rem" }}>
        <div className="col" style={{ padding: "1rem" }}>
          <img
            src={"data:image/jpg;base64," + image}
            className="figure-img img-fluid"
            alt="..."
            width="600"
            height="auto"
            style={{ borderRadius: "1rem" }}
          />
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
              <h3>Father's Name:</h3>
            </div>
            <div className="col">
              {data.fatherName && <h3>{data.fatherName}</h3>}
              {!data.fatherName && <h3>---</h3>}
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
              {data.founderName && <h3>{data.founderName}</h3>}
              {!data.founderName && <h3>---</h3>}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Contact No.:</h3>
            </div>
            <div className="col">
              {data.phoneNumber && <h3>{data.phoneNumber}</h3>}
              {!data.phoneNumber && <h3>---</h3>}
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
