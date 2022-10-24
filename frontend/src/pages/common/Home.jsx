import React, { Component } from "react";
import Reports from "./../../components/Report";

const Home = () => {
  return (
    <React.Fragment>
      <h1 className="App-header">Home</h1>
      <Reports title="100+ Parents got their children back successfully." />
      <Reports title="20+ People got their missing disabled person back successfully." />
      <Reports title="50+ People got their things back successfully." />
    </React.Fragment>
  );
};

export default Home;
