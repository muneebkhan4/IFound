import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", email: "", password: "" },
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
  };
  render() {
    const { name } = this.state.credentials;
    const { password } = this.state.credentials;
    const { email } = this.state.credentials;
    return (
      <React.Fragment>
        <h1 className="App-header">Sign up</h1>
        <div className="row">
          <div className="col">
            <div className="Background"></div>
          </div>
          <div className="col">
            <div className="position-absolute start-50">
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
                <button className="btn btn-primary m-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signup;