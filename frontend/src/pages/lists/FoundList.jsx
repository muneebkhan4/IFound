import React, { Component } from "react";
import PersonPost from "../../components/PersonPost";
import CustomButton from "../../components/CustomButton";
const FoundList = () => {
  return (
    <React.Fragment>
      <h1 className="App-header">Found List</h1>

      <div className="row">
        <div className="col center">
          <CustomButton title="Post Found Person" navTo="/upload-person" />
        </div>
        <div className="col center">
          <CustomButton title="Post Found thing" navTo="/upload-thing" />
        </div>
      </div>

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
