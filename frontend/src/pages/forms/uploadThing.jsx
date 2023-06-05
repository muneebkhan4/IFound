import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Dropdown from "./dropdown";
import NavBar from "../../sections/NavBar";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { TargetType } from "../../Enums/Enums";
import { useParams } from "react-router-dom";
import IfFormOption from "./ifFormOption";

const UploadThing = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("MissingThing");

  const handleOptionChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "MissingThing") {
      navigate("/upload-thing/MissingThing");
      setSelectedOption(event.target.value);
    } else if (event.target.value === "FoundThing") {
      navigate("/upload-thing/FoundThing");
      setSelectedOption(event.target.value);
    }
  };

  // handle submit button event
  const handleUploadThingSubmit = async (e) => {
    e.preventDefault();
    // checking fileds data before sending request

    if (!credentials.name) {
      const message = "Name cannot be Empty.";
      setmessage(message);
      return;
    }
    if (credentials.category === "Category") {
      const message = "Please select the category.";
      setmessage(message);
      return;
    }

    if (credentials.color === "Color") {
      const message = "Please select the color.";
      setmessage(message);
      return;
    }

    if (credentials.city === "City") {
      const message = "Please select the city.";
      setmessage(message);
      return;
    }
    if (!phone || phone.length <= 9 || phone.length > 14) {
      const message = "Please enter valid phone number.";
      setmessage(message);
      return;
    }
    if (!credentials.detail) {
      const message =
        "Details cannot be Empty. Please enter few lines of details.";
      setmessage(message);
      return;
    }

    // // Create an object of formData
    const formData = new FormData();

    // Attaching the data to the form
    formData.append("name", credentials.name);
    formData.append("category", credentials.category);
    formData.append("city", credentials.city);
    formData.append("color", credentials.color);
    formData.append("details", credentials.detail);
    formData.append("phone", phone);
    formData.append("postType", selectedOption);
    if (selectedFile) {
      formData.append("file", selectedFile, selectedFile.name);
    }
    // authentication token
    const token = localStorage.getItem("x_auth_token");
    // Request made to the backend api
    // Send formData object

    try {
      const { data } = await axios.post(
        "http://localhost:1000/api/publish-thing-post",
        formData,
        {
          headers: {
            x_auth_token: token,
          },
        }
      );
      const response = data;
      if (response === "saved") {
        const message = response;
        setmessage("saved");
        console.log(message);
        let nav;
        if (credentials.postType === "TheftRecoveredThing")
          nav = "/police-dashboard";
        else if (
          credentials.postType === "MissingThing" ||
          credentials.postType === "FoundThing"
        )
          nav = "/user-dashboard";
        navigate("/LoadingPage", {
          state: {
            message: "Post added Successfully. ",
            navigate: nav,
          },
        });
      } else {
        const message = response;
        setmessage(message);
      }
      setCredentials({
        name: "",
        category: "category",
        color: "color",
        city: "city",
        detail: "",
      });
      const image = "";
      setSelectedFile(image); // clearing form
      setmessage(message);
    } catch (err) {
      const message = err.response.data;
      setmessage(message);
    }
  };

  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the selectedFile
    try {
      const data = event.target.files[0];
      setpreviewFile(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(data);
    } catch (ex) {
      setpreviewFile("");
      setSelectedFile("");
    }
  };

  // Update specific input field
  const handleChange = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form data

  const { postType: givenPostType } = useParams();

  // const location = useLocation();
  const title =
    selectedOption === "MissingThing" ? "Lost Thing" : "Found Thing";

  var [credentials, setCredentials] = useState({
    name: "",
    category: "Category",
    color: "Color",
    city: "City",
    detail: "",
    postType: selectedOption, // setting the postType
  });
  const [phone, setphone] = useState();
  var [selectedFile, setSelectedFile] = useState("");
  var [previewFile, setpreviewFile] = useState("");
  var [message, setmessage] = useState("");
  const [progressbar, setProgressbar] = useState("");

  const categories = [
    "Category",
    "Mobile",
    "Laptop",
    "Watch",
    "Wallet",
    "Glasses",
  ];
  const cities = [
    "City",
    "Lahore",
    "Karachi",
    "Islamabad",
    "Multan",
    "Peshwar",
  ];

  const colors = ["Color", "Black", "White", "Blue", "Red", "Green"];

  const screenHeight = window.innerHeight;
  // Set the height of the to the current screen height

  // return
  return (
    <React.Fragment>
      <NavBar currentUser={localStorage.getItem("email")} />
      <div className="row" style={{ minHeight: "80vh" }}>
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
          <div
            className="bg-light mt-2"
            style={{ width: "22rem", borderRadius: "1rem" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
              <IfFormOption
                option1={{
                  value: "FoundThing",
                  label: "Found Thing Form",
                }}
                option2={{
                  value: "MissingThing",
                  label: "Lost Thing Form",
                }}
                handleOptionChange={handleOptionChange}
                selectedOption={selectedOption}
              />
              <h1 className="App-header">{title}</h1>
            </div>
            <form onSubmit={(e) => handleUploadThingSubmit(e)}>
              <Input
                autofocus={true}
                label="Name"
                type="text"
                placeholder="name"
                name="name"
                value={credentials.name}
                handleChange={(e) => handleChange(e)}
              />

              <Dropdown
                type="text"
                name="category"
                value={credentials.category}
                options={categories}
                handleChange={(e) => handleChange(e)}
                opacity={credentials.category === "Category" ? 0.7 : 1}
              />
              <Dropdown
                type="text"
                name="color"
                value={credentials.color}
                options={colors}
                handleChange={(e) => handleChange(e)}
                opacity={credentials.color === "Color" ? 0.7 : 1}
              />
              <Dropdown
                type="text"
                name="city"
                value={credentials.city}
                options={cities}
                handleChange={(e) => handleChange(e)}
                opacity={credentials.city === "City" ? 0.7 : 1}
              />
              <div style={{ marginBottom: 20, marginLeft: -30 }}>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setphone}
                />
              </div>
              <Input
                autofocus={false}
                label="Detail"
                type="text"
                placeholder="detail"
                name="detail"
                value={credentials.detail}
                handleChange={(e) => handleChange(e)}
              />
              <Input
                id="imageUpload"
                type="file"
                name="upload picture"
                placeholder="Photo"
                required=""
                capture
                handleChange={(e) => onFileChange(e)}
              />
              {previewFile && (
                <img
                  alt="previewimage"
                  src={previewFile}
                  style={{ width: "5rem", height: "5rem", marginLeft: "10rem" }}
                />
              )}
              {message !== "saved" && (
                <p
                  style={{
                    color: "red",
                    marginBottom: "1rem",
                    marginLeft: "3rem",
                    width: "18rem",
                  }}
                >
                  {message}
                </p>
              )}
              {message === "saved" && (
                <p style={{ color: "green", marginBottom: "1rem" }}>
                  Post Saved Successfully. Navigating to Dashboard.
                </p>
              )}
              {progressbar && (
                <div className="spinner-grow fonts" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
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
};

export default UploadThing;
