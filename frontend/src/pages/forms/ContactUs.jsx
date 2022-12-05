import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import NavBar from "../../sections/NavBar";

class Contactus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", email: "", message: "" },
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleContactusSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted \nName: ${this.state.credentials.name}\nemail: ${this.state.credentials.email}\nmessage: ${this.state.credentials.message}`
    );
  };
  render() {
    const { name } = this.state.credentials;
    const { email } = this.state.credentials;
    const { message } = this.state.credentials;
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
              alt="..."
              width="auto"
              height="500"
            />
          </div>
          <div className="col-4 center">
            <div className="bg-light mt-2" style={{ width: "20rem" }}>
              <h1 className="App-header">Contact Us</h1>
              <form onSubmit={this.handleContactusSubmit}>
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
                  placeholder="email"
                  name="email"
                  value={email}
                  handleChange={this.handleChange}
                />
                <Input
                  autofocus={false}
                  label="Message"
                  type="text"
                  placeholder="Message"
                  name="message"
                  value={message}
                  handleChange={this.handleChange}
                />
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "9rem", marginBottom: "1rem" }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contactus;
