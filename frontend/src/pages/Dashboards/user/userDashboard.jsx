import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";
import Navbar from "../../../sections/NavBar";
import axios from "axios";

function UserDashboard() {
  const navigate = useNavigate();
  const [validate, setValidate] = useState("");
  useEffect(() => {
    const validate = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      // Request made to the backend api
      // Send formData object
      let userType;
      try {
        userType = await axios.post(
          "http://localhost:1000/verifyToken",
          userType,
          {
            headers: {
              x_auth_token: token,
            },
          }
        );
        if (userType.data === "user") setValidate("true");
        else if (userType.data === "police") navigate("/police-dashboard");
        else if (userType.data === "admin") navigate("/admin-dashboard");
        else navigate("/notFound");
      } catch (err) {
        if (!userType) {
          navigate("/notFound");
        }
      }
    };

    validate();
  });

  return (
    validate === "true" && (
      <React.Fragment>
        <Navbar currentUser={localStorage.getItem("email")} />
        <h1 className="App-header"> User Dashboard</h1>
        <div className="row">
          <div className="col ">
            <img
              src="https://i.postimg.cc/h4H4yPrS/test-img-3.jpg"
              className="card-img-top"
              style={{
                marginTop: "0.25rem",
                marginLeft: "2.5rem",
                borderRadius: "1rem",
                width: "13rem",
                height: "17rem",
              }}
            />
            <Details />
          </div>

          <div className="col bg-list">
            <div className="row">
              <div className="col">
                <DashboardButton
                  title="Post Missing Thing"
                  navTo="/upload-thing"
                ></DashboardButton>
              </div>
              <div className="col">
                <DashboardButton
                  title="Post Missing Person/ Child"
                  navTo="/upload-person"
                  PostType="MissingPerson"
                ></DashboardButton>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <DashboardButton
                  title="Post Found Thing"
                  navTo="/upload-thing"
                ></DashboardButton>
              </div>
              <div className="col">
                <DashboardButton
                  title="Post Found Person/ Child"
                  navTo="/upload-person"
                  PostType="FoundPerson"
                ></DashboardButton>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <DashboardButton
                  title="UnResolved Cases"
                  navTo="/unresolved-cases"
                  value={2}
                ></DashboardButton>
              </div>
              <div className="col">
                <DashboardButton
                  title="Resolved Cases"
                  navTo="/resolved-cases"
                  value={5}
                ></DashboardButton>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  );
}

export default UserDashboard;
