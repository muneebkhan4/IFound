import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";

class UploadPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", age: "", detail: "", city: "" },
    };
  }
  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleUploadPersonSubmit = (e) => {
    e.preventDefault();
    console.log(
      `submitted \nName: ${this.state.credentials.name}\ndetail: ${this.state.credentials.detail}\nEmail: ${this.state.credentials.age}\city: ${this.state.credentials.city}`
    );
  };
  render() {
    const { name } = this.state.credentials;
    const { detail } = this.state.credentials;
    const { age } = this.state.credentials;
    const { city } = this.state.credentials;
    return (
      <React.Fragment>
        <h1 className="App-header">Post Person Details</h1>
        <div className="row">
          <div className="col">
            <div className="Background"></div>
          </div>
          <div className="col">
            <div className="position-absolute start-50">
              <form onSubmit={this.handleUploadPersonSubmit}>
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
                  label="Age"
                  type="number"
                  placeholder="age"
                  name="age"
                  value={age}
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
                  id="imageUpload"
                  type="file"
                  name="profile_photo"
                  placeholder="Photo"
                  required=""
                  capture
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

export default UploadPerson;
