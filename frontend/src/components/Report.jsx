import React, { Component } from "react";

const Reports = ({ title }) => {
  return (
    <div className="card custom-report-card">
      <div className="row">
        <div className="col">
          <i className="fa fa-solid fa-check fa-5x web-color"></i>
        </div>

        <div className="col">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
              These cases has been verified successfully.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
