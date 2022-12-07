import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../sections/NavBar";
import Input from "../../components/Input";

class UploadThing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", type: "", detail: "", city: "" },
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleUploadThingSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted \nName: ${this.state.credentials.name}\ndetail: ${this.state.credentials.detail}\nEmail: ${this.state.credentials.type}\city: ${this.state.credentials.city}`
    );
  };
  render() {
    const { name } = this.state.credentials;
    const { detail } = this.state.credentials;
    const { type } = this.state.credentials;
    const { city } = this.state.credentials;
    return (
      <React.Fragment>
        <NavBar currentUser={localStorage.getItem("email")} />
        <div className="row">
          <div
            className="col-3 mt-5 center"
            style={{ width: "40%", height: "100%" }}
          >
            <img
              src="https://i.ibb.co/tBYg2xv/bg-pic.png"
              alt="..."
              width="auto"
              height="500"
            />
          </div>
          <div className="col-4 center">
            <div className="bg-light mt-2" style={{ width: "22rem" }}>
              <h1 className="App-header">Post Thing Details</h1>
              <form onSubmit={this.handleUploadThingSubmit}>
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
                  label="Type"
                  type="text"
                  placeholder="type"
                  name="type"
                  value={type}
                  handleChange={this.handleChange}
                />
                <Input
                  autofocus={false}
                  label="City"
                  type="text"
                  placeholder="city"
                  name="city"
                  value={city}
                  handleChange={this.handleChange}
                />
                <Input
                  autofocus={false}
                  label="Detail"
                  type="text"
                  placeholder="detail"
                  name="detail"
                  value={detail}
                  handleChange={this.handleChange}
                />
                <Input
                  id="imtypeUpload"
                  type="file"
                  name="upload photo"
                  placeholder="Photo"
                  required=""
                  capture
                />
                <button
                  className="btn btn-primary"
                  style={{ marginLeft: "8rem", marginBottom: "1rem" }}
                >
                  Submit
                </button>
                <p></p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UploadThing;
