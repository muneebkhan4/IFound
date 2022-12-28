import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";
import Navbar from "../../../sections/NavBar";
import axios from "axios";

const PoliceDashboard = () => {
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
        if (userType.data === "police") setValidate("true");
        else if (userType.data === "user") navigate("/user-dashboard");
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
        <h1 className="App-header">Police Dashboard</h1>
        <div className="row">
          <div className="col ">
            <img
              src="https://www.linkpicture.com/q/LPic63ac703b64bde514445861.jpg"
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
                  title="Post Theft Recovered Things"
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
                  title="Reported Posts"
                  navTo="/unresolved-cases"
                  value={2}
                ></DashboardButton>
              </div>
              <div className="col">
                <DashboardButton
                  title="View Reports"
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
};

export default PoliceDashboard;
