import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";
import axios from "axios";

import NavBar from "../../../sections/NavBar";
import { Button, Card } from "react-bootstrap";
import image from '../../../Images/Reports/report2.jpg';
import Footer from "../../../sections/Footer";
import { Container, Row, Col } from "react-bootstrap";
import PieChart from "../Report/pieChart";
import { VerticalBar } from "../Report/VerticalBar";
import PostCountReport from "../Report/postCountReport";
import IfDoughnut from "../Report/ifDoughnut";


function UserDashboard() {
  const navigate = useNavigate();
  const [validate, setValidate] = useState("");
  const screenHeight = window.innerHeight;
  // Set the height of the current screen height
  useEffect(() => {
    const validate = async () => {
      // authentication token
      const token = localStorage.getItem("x_auth_token");
      console.log(token);
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
  }, []);

  return (
    validate === "true" && (
      <React.Fragment>
        <NavBar currentUser={localStorage.getItem("email")} />
        <Container style={{marginTop:"2rem"}}>
          <div>
            <PostCountReport heading={"Person Statistic"} />
          </div>

          <div className="mt-2 mb-2">
            <Row >
              <Card style={{ width: '70%' }} >
                <VerticalBar />
              </Card>
              <Card style={{ width: '30%' }}>

                <IfDoughnut />
              </Card>

            </Row>
          </div>

        </Container>
        <Container style={{marginTop:"3rem"}}>
          <div>
            <PostCountReport heading={"Object Statistic"} />
          </div>

          <div className="mt-2 mb-2">
            <Row >
              <Card style={{ width: '70%' }} >
                <VerticalBar />
              </Card>
              <Card style={{ width: '30%' }}>

                <IfDoughnut />
              </Card>

            </Row>
          </div>

        </Container>

        <Footer />

        {/* <h1 className="App-header"> User Dashboard</h1>
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

            </div>
          </div>
        </div> */}
      </React.Fragment >
    )
  );
}

export default UserDashboard;
