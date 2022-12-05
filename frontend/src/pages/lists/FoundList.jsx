import React, { Component } from "react";
import PersonPost from "../../components/PersonPost";
import CustomButton from "../../components/CustomButton";
const FoundList = () => {
  return (
    <React.Fragment>
      <h1 className="App-header">Found List</h1>
      <div className="container text-center bg-list">
        <div className="row">
          <div className="col">
            <PersonPost />
          </div>
          <div className="col">
            <PersonPost />
          </div>
          <div className="col">
            <PersonPost />
          </div>
          <div className="col">
            <PersonPost />
          </div>
          <div className="col">
            <PersonPost />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoundList;
