import React from "react";
import DashboardButton from "../../../components/DashboardButton";
import Details from "../../details/Details";

const UserDashboard = () => {
  return (
    <React.Fragment>
      <h1 className="App-header"> User dashboard</h1>
      <div className="row">
        <div className="col ">
          <img
            src="https://images.pexels.com/photos/1096147/pexels-photo-1096147.jpeg?cs=srgb&dl=pexels-kelvin-octa-1096147.jpg&fm=jpg"
            className="figure-img img-fluid rounded"
            alt="..."
            width="200"
            height="200"
            style={{ marginLeft: 40, marginTop: 40 }}
          />
          <Details></Details>
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
                title="Post Missing Thing"
                navTo="/"
              ></DashboardButton>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDashboard;
