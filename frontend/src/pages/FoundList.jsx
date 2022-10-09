import React, { Component } from "react";
import PersonPost from "../components/PersonPost";

const FoundList = () => {
  return (
    <React.Fragment>
      <h1 className="App-header">Found List</h1>
      <div className="container text-center">
        <div className="row center">
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
        <div className="col">
          <PersonPost />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoundList;
