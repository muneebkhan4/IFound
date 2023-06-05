import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";
import axios from "axios";
import jwt_decode from "jwt-decode";
import NavBar from "../../../sections/NavBar";
import { Button, Card } from "react-bootstrap";
import image from '../../../Images/Reports/report2.jpg';
import Footer from "../../../sections/Footer";
import { Container, Row, Col } from "react-bootstrap";
import PieChart from "../Report/pieChart";
import { VerticalBar } from "../Report/VerticalBar";
import PostCountReport from "../Report/postCountReport";
import IfDoughnut from "../Report/ifDoughnut";
import { ActivePostCount, GetDashboardStats, TotalActivePostCount, UnresolvedCasesCount } from "../../../services/ActiveCasesService";
import { TargetType } from "../../../Enums/Enums";
import { GetUserLocalID } from "../../../services/UserService";


function UserDashboard() {
  const navigate = useNavigate();
  const [validate, setValidate] = useState("");
  const [personStats, setPersonStats] = useState({
    "PostCountReport": {
      "totalLostPosts": 0,
      "totalFoundPosts": 0,
      "totalResolved": 0,
      "totalUnResolved": 0,
    },
    "Doughnut": [
      0, 0, 0, 0
    ]
  });

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
        if (userType.data === "user") {
          setValidate("true");
          var { _id } = jwt_decode(token);
          GetUserLocalID(_id).then(response => {
            const { data: currentUser } = response;
            const userId = currentUser["userID"];

            GetDashboardStats(userId).then(response => {
              console.log("GetDashboardStats: ", response);
              const { allActiveFoundPostCount,
                allActiveLostPostCount,
                allResolvedPostCount,
                allUnResolvedPostCount,
                userActiveFoundCasesCount,
                userActiveLostCasesCount,
                userResolvedCasesCount,
                userUnresolvedCasesCount,
              } = response.data;

              const doughnutArr = [userActiveLostCasesCount, userActiveFoundCasesCount, userUnresolvedCasesCount, userResolvedCasesCount];
              const postCountObj = {
                totalLostPosts: allActiveLostPostCount,
                totalFoundPosts: allActiveFoundPostCount,
                totalResolved: allResolvedPostCount,
                totalUnResolved: 1,
              }
              setPersonStats(prevArray => {
                const newObj = { ...prevArray };
                newObj.Doughnut = doughnutArr;
                newObj.PostCountReport = postCountObj;
                return newObj;
              });
            });

          

          }).catch(_err => {
            console.log("error occuerd", _err);
          });


        }
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
        <Container style={{ marginTop: "2rem" }}>
          <div>
            <PostCountReport
              heading={"Person"}
              totalLostPosts={personStats.PostCountReport.totalLostPosts}
              totalFoundPosts={personStats.PostCountReport.totalFoundPosts}
              totalResolved={personStats.PostCountReport.totalResolved}
              totalUnResolved={personStats.PostCountReport.totalUnResolved}
            />
          </div>

          <div className="mt-2 mb-2">
            <Row >
              <Card style={{ width: '70%' }} >
                <VerticalBar />
              </Card>
              <Card style={{ width: '30%' }}>

                <IfDoughnut
                  row={personStats.Doughnut}
                />
              </Card>

            </Row>
          </div>

        </Container>
        <Container style={{ marginTop: "3rem" }}>
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
      </React.Fragment >
    )
  );
}

export default UserDashboard;
