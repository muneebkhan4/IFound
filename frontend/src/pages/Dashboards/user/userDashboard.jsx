import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";
import axios from "axios";
import NavBar from "../../../sections/NavBar";

function UserDashboard() {
  const navigate = useNavigate();
  const [validate, setValidate] = useState("");
  const screenHeight = window.innerHeight;
  // Set the height of the current screen height
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
        // console.log("Server Returned userType: ",userType);
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
        <NavBar currentUser={localStorage.getItem("email")} />
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

          <div className="col bg-list" style={{ height: "fit-content" }}>
            <div className="row">
              <div
                className="col"
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              >
                <DashboardButton
                  title="Post Missing Thing"
                  PostType="MissingThing"
                  navTo="/upload-thing"
                ></DashboardButton>
              </div>
              <div
                className="col"
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              >
                <DashboardButton
                  title="Post Missing Person/ Child"
                  navTo="/uploadLostPerson"
                  PostType="MissingPerson"
                ></DashboardButton>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              >
                <DashboardButton
                  title="Post Found Thing"
                  PostType="FoundThing"
                  navTo="/upload-thing"
                ></DashboardButton>
              </div>
              <div
                className="col"
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              >
                <DashboardButton
                  title="Post Found Person/ Child"
                  navTo="/uploadFoundPerson"
                  PostType="FoundPerson"
                ></DashboardButton>
              </div>
            </div>
            <div className="row">
              <div
                className="col"
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              >
                <DashboardButton
                  title="Match Lost Cases"
                  navTo="/lostMatchCases"
                  value={2}
                ></DashboardButton>
              </div>
              <div
                className="col"
                style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
              >
                <DashboardButton
                  title="Match Found Cases"
                  navTo="/foundMatchCases"
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
