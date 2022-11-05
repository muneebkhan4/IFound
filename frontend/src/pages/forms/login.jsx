import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import UserDashboard from "./../Dashboards/user/userDashboard";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { email: "", password: "" },
      user: {},
      error: "",
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.validate();
  };

  async validate() {
    const { credentials } = this.state;
    try {
      const { data } = await axios.post(
        "http://localhost:1000/api/auth",
        credentials
      );
      const user = data;
      this.setState({ user });
    } catch (err) {
      const error = err.response.data;
      this.setState({ error });
    }
  }

  render() {
    const { email } = this.state.credentials;
    const { password } = this.state.credentials;
    const { user } = this.state;
    const { error } = this.state;
    if (user.email)
      return <UserDashboard email={user.email} name={user.name} />;
    return (
      <React.Fragment>
        <h1 className="App-header">Log In</h1>
        <div className="row">
          <div className="col">
            <div className="Background"></div>
          </div>
          <div className="col">
            <div className="position-absolute start-50">
              <form onSubmit={this.handleLoginSubmit}>
                <Input
                  autofocus={true}
                  label="Email"
                  type="text"
                  placeholder="email"
                  name="email"
                  value={email}
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
                <p style={{ marginLeft: 120, color: "red" }}>{error}</p>
                <button className="btn btn-primary m-2">Submit</button>
                <p>
                  Not Registered? <Link to="/signup">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
