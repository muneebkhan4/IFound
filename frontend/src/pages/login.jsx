import React, { Component, useState } from "react";

const LogIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleNameChange = (e) => {
    setName(e.currentTarget.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(`submitted Name: ${name}  Password: ${password} `);
  };

  return (
    <div className="row center">
      <form onSubmit={handleLoginSubmit}>
        <h1 className="App-header m-5">Log In</h1>
        <div className="form-group">
          <label className="m-2" htmlFor="email">
            Username
          </label>
          <input
            placeholder="name"
            value={name}
            name="name"
            autoFocus
            type={"text"}
            id="email"
            className="form-control m-2"
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <input
            placeholder="password"
            value={password}
            name="password"
            onChange={handlePasswordChange}
            type="password"
            id="password"
            className="form-control m-2"
          />
        </div>
        <button className="btn btn-primary m-2">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
