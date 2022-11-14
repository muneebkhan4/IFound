import React from "react";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";

function UserDashboard({ name, email }) {
  return (
    <React.Fragment>
      <h1 className="App-header"> User dashboard</h1>
      <div className="row">
        <div className="col ">
          <img
            src="https://i.postimg.cc/h4H4yPrS/test-img-3.jpg"
            className="figure-img img-fluid rounded"
            alt="..."
            width="200"
            height="200"
            style={{ marginLeft: 40, marginTop: 40 }}
          />
          <Details name={name} email={email}></Details>
        </div>

        <div className="col">
          <div className="row">
            <div className="col">
              <DashboardButton
                title="Post Missing Thing"
                navTo="/"
              ></DashboardButton>
            </div>
            <div className="col">
              <DashboardButton
                title="Post Missing Person/ Child"
                navTo="/"
              ></DashboardButton>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <DashboardButton
                title="Post Found Thing"
                navTo="/"
              ></DashboardButton>
            </div>
            <div className="col">
              <DashboardButton
                title="Post Found Person/ Child"
                navTo="/"
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
