import React from "react";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";

function UserDashboard({ navigation }) {
  return (
    <React.Fragment>
      <h1 className="App-header"> User dashboard</h1>
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
                navTo="/"
                value={2}
              ></DashboardButton>
            </div>
            <div className="col">
              <DashboardButton
                title="Resolved Cases"
                navTo="/"
                value={5}
              ></DashboardButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserDashboard;
