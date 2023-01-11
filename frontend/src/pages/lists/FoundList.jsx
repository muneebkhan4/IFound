import React, { Component } from "react";
import PersonPost from "../../components/PersonPost";
import ThingPost from "../../components/ThingPost";
import NavBar from "../../sections/NavBar";
const FoundList = () => {
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
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
            <ThingPost />
          </div>
          <div className="col">
            <ThingPost />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoundList;
