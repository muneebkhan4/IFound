import React, { Component } from "react";

const Reports = () => {
  return (
    <div className="card custom-report-card">
      <div className="row">
        <div className="col">
          <i className="fa fa-solid fa-check fa-5x web-color"></i>
        </div>
        <div className="col">
          <i className="fa fa-solid fa-user fa-5x web-color"></i>
        </div>
        <div className="col">
          <i className="fa fa-solid fa-plus fa-5x web-color"></i>
        </div>
        <div className="col">
          <div className="card-body">
            <h5 className="card-title">Case Resolved</h5>
            <p className="card-text">
              These cases has been resolved successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
