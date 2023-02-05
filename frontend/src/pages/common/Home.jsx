import React, { Component } from "react";
import Reports from "./../../components/Report";
import NavBar from "../../sections/NavBar";
const Home = () => {
  const screenHeight = window.innerHeight;
  // Set the height of the to the current screen height
  return (
    <React.Fragment>
      <div style={{ minHeight: screenHeight }}>
        <h1 className="App-header">Home</h1>
        <Reports title="100+ Parents got their children back successfully." />
        <Reports title="20+ People got their missing disabled person back successfully." />
        <Reports title="50+ People got their things back successfully." />
      </div>
    </React.Fragment>
  );
};

export default Home;
