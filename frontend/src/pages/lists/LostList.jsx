import React, { Component } from "react";
import PersonPost from "../../components/PersonPost";
import NavBar from "../../sections/NavBar";

const LostList = () => {
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <h1 className="App-header">Lost List</h1>
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

export default LostList;
