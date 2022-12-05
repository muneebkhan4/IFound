import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import UserDashboard from "./../Dashboards/user/userDashboard";
import NavBar from "../../sections/NavBar";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", email: "", password: "" },
      user: {},
      error: "",
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted \nName: ${this.state.credentials.name}\nPassword: ${this.state.credentials.password}\Email: ${this.state.credentials.email}`
    );
    this.validate();
  };

  async validate() {
    const { credentials } = this.state;
    try {
      const { data } = await axios.post(
        "http://localhost:1000/api/users",
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
    const { name } = this.state.credentials;
    const { password } = this.state.credentials;
    const { email } = this.state.credentials;
    const { user } = this.state;
    const { error } = this.state;
    if (user.email)
      return <UserDashboard email={user.email} name={user.name} />;
    return (
      <React.Fragment>
        <NavBar currentUser={localStorage.getItem("email")} />
        <div className="row">
          <div
            className="col-3 mt-5 center"
            style={{ width: "40%", height: "100%" }}
          >
            <img
              src="https://i.postimg.cc/tChbCN8h/bg-pic.jpg"
              className="card-img-top"
              width="auto"
              height="500"
            />
          </div>
          <div className="col-4 center">
            <div className="bg-light mt-2" style={{ width: "20rem" }}>
              <h1 className="App-header">Sign up</h1>
              <form onSubmit={this.handleSignupSubmit}>
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
                  label="Email"
                  type="email"
                  placeholder="xyz@email.com"
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
                <p
                  style={{
                    marginLeft: "2rem",
                    marginBottom: "1rem",
                    color: "red",
                  }}
                >
                  {error}
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "8rem", marginBottom: "1rem" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;
