import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Input from "../../components/Input";
import Dropdown from "./dropdown";
import NavBar from "../../sections/NavBar";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const UploadThing = () => {
  const navigate = useNavigate();

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
    if (!phone || phone.length != 13) {
      const message = "Please enter valid phone number.";
      setmessage(message);
      return;
    }
    if (
      !credentials.address ||
      credentials.address.length < 5 ||
      credentials.address.length > 200
    ) {
      const message = "Please enter valid address.";
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
    formData.append("address", credentials.address);
    formData.append("postType", credentials.postType);
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
        if (credentials.postType == "TheftRecoveredThing")
          nav = "/police-dashboard";
        else if (
          credentials.postType == "MissingThing" ||
          credentials.postType == "FoundThing"
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
    const data = event.target.files[0];
    setpreviewFile(URL.createObjectURL(event.target.files[0]));
    setSelectedFile(data);
  };

  // Update specific input field
  const handleChange = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form data
  const location = useLocation();
  const { givenPostType, title } = location.state;
  var [credentials, setCredentials] = useState({
    name: "",
    category: "Category",
    color: "Color",
    city: "City",
    address: "",
    detail: "",
    postType: givenPostType, // setting the postType
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
      <div className="row" style={{minHeight:"80vh"}}>
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
            <h1 className="App-header">{title}</h1>
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
                label="Address"
                type="text"
                placeholder="address"
                name="address"
                value={credentials.address}
                handleChange={(e) => handleChange(e)}
              />
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
                  src={previewFile}
                  style={{ width: "5rem", height: "5rem", marginLeft: "10rem" }}
                ></img>
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

// to be checked and test before remove below code, below code is just a backup

// class UploadThing extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       credentials: { name: "", type: "", detail: "", city: "" },
//       selectedFile: null,
//       message: "",
//     };
//   }

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   handleChange = (e) => {
//     const credentials = { ...this.state.credentials };
//     credentials[e.currentTarget.name] = e.currentTarget.value;
//     this.setState({ credentials });
//   };
//   handleUploadThingSubmit = async (e) => {
//     e.preventDefault();

//     // checking fileds data before sending request
//     if (!this.state.credentials.name) {
//       const message = "Name cannot be Empty.";
//       this.setState(message);
//       return;
//     }

//     if (!this.state.credentials.type) {
//       const message = "type cannot be Empty. You can enter an approximate type.";
//       this.setState(message);
//       return;
//     }
//     if (!this.state.credentials.city) {
//       const message = "City cannot be Empty.";
//       this.setState(message);
//       return;
//     }
//     if (!this.state.credentials.detail) {
//       const message =
//         "Details cannot be Empty. Please enter few lines of details.";
//       this.setState(message);
//       return;
//     }
//     if (!this.state.selectedFile) {
//       const message = "Please attach one Picture.";
//       this.setState(message);
//       return;
//     }

//     // Create an object of formData
//     const formData = new FormData();

//     // Attaching the data to the form
//     formData.append("name", this.state.credentials.name);
//     formData.append("type", this.state.credentials.type);
//     formData.append("city", this.state.credentials.city);
//     formData.append("details", this.state.credentials.detail);
//     formData.append("postType", "MissingPerson");
//     formData.append(
//       "file",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );
//     // authentication token
//     const token = localStorage.getItem("x_auth_token");
//     // Request made to the backend api
//     // Send formData object
//     try {
//       const { data } = await axios.post(
//         "http://localhost:1000/api/publish-missing-person-post",
//         formData,
//         {
//           headers: {
//             x_auth_token: token,
//           },
//         }
//       );
//       const message = data;
//       this.setState(message);
//     } catch (err) {
//       const message = err.response.data;
//       this.setState(message);
//     }
//   };
//   render() {
//     const { name } = this.state.credentials;
//     const { detail } = this.state.credentials;
//     const { type } = this.state.credentials;
//     const { city } = this.state.credentials;
//     console.log(this.state.selectedFile);
//     return (
//       <React.Fragment>
//         <div className="row">
//           <div
//             className="col-3 mt-5 center"
//             style={{ width: "40%", height: "100%" }}
//           >
//             <img
//               src="https://i.postimg.cc/tChbCN8h/bg-pic.jpg"
//               className="card-img-top"
//               alt="..."
//               width="auto"
//               height="500"
//             />
//           </div>
//           <div className="col-4 center">
//             <div className="bg-light mt-2" style={{ width: "22rem" }}>
//               <h1 className="App-header">Post Person Details</h1>
//               <form onSubmit={this.handleUploadThingSubmit}>
//                 <Input
//                   autofocus={true}
//                   label="Name"
//                   type="text"
//                   placeholder="name"
//                   name="name"
//                   value={name}
//                   handleChange={this.handleChange}
//                 />
//                 <Input
//                   autofocus={false}
//                   label="type"
//                   type="number"
//                   placeholder="type"
//                   name="type"
//                   value={type}
//                   handleChange={this.handleChange}
//                   min="1"
//                   max="5"
//                 />
//                 <Input
//                   autofocus={false}
//                   label="City"
//                   type="text"
//                   placeholder="city"
//                   name="city"
//                   value={city}
//                   handleChange={this.handleChange}
//                 />
//                 <Input
//                   autofocus={false}
//                   label="Detail"
//                   type="text"
//                   placeholder="detail"
//                   name="detail"
//                   value={detail}
//                   handleChange={this.handleChange}
//                 />
//                 <Input
//                   id="imageUpload"
//                   type="file"
//                   name="upload picture"
//                   placeholder="Photo"
//                   required=""
//                   capture
//                   handleChange={this.onFileChange}
//                 />
//                 {this.state.message !== "saved" && (
//                   <p style={{ color: "red", marginBottom: "1rem" }}>
//                     {this.state.message}
//                   </p>
//                 )}
//                 {this.state.message === "saved" && (
//                   <p style={{ color: "green", marginBottom: "1rem" }}>
//                     Post Added Successfully
//                   </p>
//                 )}
//                 <button
//                   className="btn btn-primary"
//                   style={{ marginLeft: "8rem", marginBottom: "1rem" }}
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default UploadThing;
