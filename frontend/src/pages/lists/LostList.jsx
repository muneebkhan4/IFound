import React, { Component } from "react";
import PersonPost from "../../components/PersonPost";
import CustomButton from "../../components/CustomButton";

const LostList = () => {
  return (
    <React.Fragment>
      <h1 className="App-header">Lost List</h1>

      <div className="row">
        <div className="col center">
          <CustomButton title="Post Missing Person" navTo="/upload-person" />
        </div>
        <div className="col center">
          <CustomButton title="Post Missing Thing" navTo="/upload-thing" />
        </div>
      </div>
      <div className="container text-center">
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default LostList;
