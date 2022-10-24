import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", password: "" },
      status: false,
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted \nName: ${this.state.credentials.name}\nPassword: ${this.state.credentials.password}`
    );
    var status = { ...this.state.status };
    status = true;
    this.setState({ status });
  };
  render() {
    const { name } = this.state.credentials;
    const { password } = this.state.credentials;
    if (this.state.status) return <Navigate replace to="/user-dashboard" />;
    else
      return (
        <div className="Background">
          <div className="border-2 border-dark position-absolute top-50 start-50 translate-middle">
            <h1 className="App-header">Log In</h1>
            <form onSubmit={this.handleLoginSubmit}>
              <Input
                autofocus={true}
                label="Name"
                type="text"
                placeholder="name"
                name="name"
                value={name}
                handleChange={this.handleChange}
              />
              <Input
                autofocus={false}
                label="Password"
                type="password"
                placeholder="password"
                name="password"
                value={password}
                handleChange={this.handleChange}
              />
              <button className="btn btn-primary m-2">Submit</button>
              <p>
                Not Registered? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      );
  }
}

export default Login;
