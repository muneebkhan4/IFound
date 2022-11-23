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

  // // On file upload (click the upload button)
  // onFileUpload = () => {

  //   // Create an object of formData
  //   const formData = new FormData();

  //   // Update the formData object
  //   formData.append(
  //     "myFile",
  //     this.state.selectedFile,
  //     this.state.selectedFile.name
  //   );

  //   // Details of the uploaded file
  //   console.log(this.state.selectedFile);

  //   // Request made to the backend api
  //   // Send formData object
  //   axios.post("api/uploadfile", formData);
  // };

  handleChange = (e) => {
    const credentials = { ...this.state.credentials };
    credentials[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ credentials });
  };
  handleUploadPersonSubmit = (e) => {
    e.preventDefault();

    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);

    console.log(
      `submitted \nName: ${this.state.credentials.name}\ndetail: ${this.state.credentials.detail}\nEmail: ${this.state.credentials.age}\ncity: ${this.state.credentials.city}`
    );
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
