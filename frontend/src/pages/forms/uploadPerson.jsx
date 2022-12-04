import React, { useState, Component, createRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import axios from "axios";

class UploadPerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: { name: "", age: "", detail: "", city: "" },
      selectedFile: null,
    };
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleUploadPersonSubmit = async (e) => {
    e.preventDefault();
    // Create an object of formData
    const formData = new FormData();
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    formData.append("name", this.state.credentials.name);
    formData.append("age", this.state.credentials.age);
    formData.append("city", this.state.credentials.city);
    formData.append("details", this.state.credentials.detail);

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object

    console.log(
      `submitted \nName: ${this.state.credentials.name}\ndetail: ${this.state.credentials.detail}\nEmail: ${this.state.credentials.age}\ncity: ${this.state.credentials.city}`
    );
    const token = localStorage.getItem("x_auth_token");
    console.log(token);
    try {
      const { data } = await axios.post(
        "http://localhost:1000/api/publish-post",
        formData,
        {
          headers: {
            x_auth_token: token,
          },
        }
      );
    } catch (err) {
      const error = err.response.data;
    }
    // token secured
    //   const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdkMGZhNjRjOWYzMzI4NmI0YWY2NTciLCJpYXQiOjE2Njk3OTA1ODB9.YTdNf-iJ06tejNrADZ6hqiqoMw1lPI_2QVDl2Y-44yk";
    // await axios.post("http://localhost:1000/api/publish-post", {
    //   formData,
    //   headers: {
    //     token: `${token}`,
    //   },
    // });
  };
  render() {
    const { name } = this.state.credentials;
    const { detail } = this.state.credentials;
    const { age } = this.state.credentials;
    const { city } = this.state.credentials;
    return (
      <React.Fragment>
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
            <div className="bg-light mt-2" style={{ width: "22rem" }}>
              <h1 className="App-header">Post Person Details</h1>
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
                  min="1"
                  max="5"
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
                  name="upload picture"
                  placeholder="Photo"
                  required=""
                  capture
                  handleChange={this.onFileChange}
                />
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

export default UploadPerson;
