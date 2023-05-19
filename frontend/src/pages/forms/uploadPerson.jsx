import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

import jwt_decode from "jwt-decode";
import { GenderType, RelationType } from "../../Enums/Enums";
import Dropdown from "./dropdown";
// import { Navigate } from "react-router-dom";
import NavBar from "../../sections/NavBar"
import { cities } from "../../static/static";

const UploadPerson = ({ PostType, ApiUrl }) => {
  const navigate = useNavigate();
  // handle submit button event
  const handleUploadPersonSubmit = async (e) => {
    e.preventDefault();
    debugger;
    // checking fileds data before sending request

    // if (!credentials.name) {
    //   const message = "Name cannot be Empty.";
    //   setMessage(message);
    //   return;
    // }

    // if (!credentials.age) {
    //   const message = "Age cannot be Empty. You can enter an approximate age.";
    //   setMessage(message);
    //   return;
    // }
    // if (!credentials.city) {
    //   const message = "City cannot be Empty.";
    //   setMessage(message);
    //   return;
    // }
    // if (!credentials.detail) {
    //   const message =
    //     "Details cannot be Empty. Please enter few lines of details.";
    //   setMessage(message);
    //   return;
    // }
    if (!selectedFile) {
      setError({
        message: "Please attach one Picture.",
        hasError: true
      });
      return;
    }
    // Create an object of formData
    // "Base64Image,Description,Location, Age,Name,
    debugger;
    console.log("Selected File: ", selectedFile);
    const formData = new FormData();

    // Attaching the data to the form
    formData.append("Name", credentials.name);
    formData.append("Age", credentials.age);
    formData.append("Location", credentials.city);
    formData.append("Description", credentials.detail);
    formData.append("TargetType", PostType);
    formData.append("Image", selectedFile, selectedFile.name);
    formData.append("Gender", credentials.genderType);
    formData.append("Relation", credentials.relationType);
    formData.append("Phone", credentials.phone);



    const token = localStorage.getItem("x_auth_token");
    var { _id } = jwt_decode(token);
    console.log("_id: ", _id);
    try {
      const { data: currentUser } = await axios.get("http://www.localhost:1000/api/users/" + _id);
      formData.append("UserId", currentUser["userID"]);
      
    } catch (err) {
      setError({
        hasError: true,
        message: "Internal Server Error"
      });
      return;
    }



    // authentication token
    // const token = localStorage.getItem("x_auth_token");
    // console.log("Token:  ",token);

    // Request made to the backend api
    // Send formData object

    // Send formData object

    // console.log("Token:  ", token,decoded);

    try {

      const responseObj = await axios.post(
        ApiUrl,
        formData,
        {
          headers: {
            x_auth_token: token,
          },
        }
      );
      if (responseObj.status === 500) {
        setError({
          hasError: true,
          message: "Internal Server Error"
        });
      }
      else if (responseObj.status === 200) {
        setMessage("saved");
        console.log(message);

        let nav = "/user-dashboard";

        navigate("/LoadingPage", {
          state: {
            message: "Post added Successfully. ",
            navigate: nav,
          },
        });
      }
      // setCredentials({
      //   name: "",
      //   category: "category",
      //   color: "color",
      //   city: "city",
      //   detail: "",
      //   genderType: GenderType.Male,
      //   relationType: RelationType.Brother,
      //   postType: PostType,
      // });
      // const image = "";
      // setSelectedFile(image); // clearing form
      // setMessage(message);
    } catch (err) {
      if (err.response.data.errors) {
        const message = Object.values(err.response.data.errors)[0];
        setError({
          hasError: true,
          message: message
        });
      }
      else {
        const message = err.response.data;
        setError({
          hasError: true,
          message: message
        });
      }
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
  const handleChange = (e) =>
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  // form data
  const location = useLocation();

  var [credentials, setCredentials] = useState({
    name: "",
    age: "",
    detail: "",
    city: "",
    genderType: Object.values(GenderType)[0],
    relationType: Object.values(GenderType)[1],
    postType: PostType, // setting the postType
    phone:""
  });
  var [selectedFile, setSelectedFile] = useState("");
  var [previewFile, setpreviewFile] = useState("");
  var [message, setMessage] = useState("");
  const [error, setError] = useState({
    hasError: false,
    message: ""
  });
  const [progressbar, setProgressbar] = useState("");
  const screenHeight = window.innerHeight;
  ;
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
          <div className="bg-light mt-2" style={{ width: "22rem" }}>
            <h1 className="App-header">Form</h1>
            <form onSubmit={(e) => handleUploadPersonSubmit(e)}>
              <Input
                autofocus={true}
                label="Name"
                type="text"
                placeholder="name"
                name="name"
                value={credentials.name}
                handleChange={(e) => handleChange(e)}
              />
              <Input
                autofocus={false}
                label="Age"
                type="number"
                placeholder="age"
                name="age"
                value={credentials.age}
                handleChange={(e) => handleChange(e)}
                min="1"
                max="5"
              />
              <div style={{ marginBottom: 20, marginLeft: -30 }}>
                <PhoneInput
                  placeholder="Enter phone number"
                  name="phone"
                  value={credentials.phone}
                  onChange={(e) => setCredentials((prevState) => ({
                    ...prevState,
                    phone: e,
                  })) }
                />
              </div>
              {/* <Input
                autofocus={false}
                label="City"
                type="text"
                placeholder="city"
                name="city"
                value={credentials.city}
                handleChange={(e) => handleChange(e)}
              /> */}
              <Dropdown
                name="city"
                options={cities}
                handleChange={handleChange}
                opacity={10}
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
              <Dropdown
                name="genderType"
                options={Object.keys(GenderType)}
                handleChange={handleChange}
                opacity={10}
              ></Dropdown>
              <Dropdown
                name="relationType"
                options={Object.keys(RelationType)}
                handleChange={handleChange}
                opacity={10}
              ></Dropdown>
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
              {
                error.hasError && (<div class="mt-2 alert alert-danger alert-dismissible fade show">
                  <strong>Error!</strong> {error.message}
                </div>)
              }

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

export default UploadPerson;

// to be checked and test before remove below code, below code is just a backup

// class UploadPerson extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       credentials: { name: "", age: "", detail: "", city: "" },
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
//   handleUploadPersonSubmit = async (e) => {
//     e.preventDefault();

//     // checking fileds data before sending request
//     if (!this.state.credentials.name) {
//       const message = "Name cannot be Empty.";
//       this.setState(message);
//       return;
//     }

//     if (!this.state.credentials.age) {
//       const message = "Age cannot be Empty. You can enter an approximate age.";
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
//     formData.append("age", this.state.credentials.age);
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
//     const { age } = this.state.credentials;
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
//               <form onSubmit={this.handleUploadPersonSubmit}>
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
//                   label="Age"
//                   type="number"
//                   placeholder="age"
//                   name="age"
//                   value={age}
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
//                 {this.state.message != "saved" && (
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

// export default UploadPerson;

// usmna's code API calling

// if (credentials.postType == "MissingPerson") {
//   try {
//     const { data } = await axios.post(
//       "https://localhost:44364/findFoundGroup",
//       formData,
//       {
//         headers: {
//           x_auth_token: token,
//         },
//       }
//     );
//     console.log("Searched MissingPerson: ", data);

//     const response = data;
//     setCredentials({
//       name: "",
//       age: "",
//       detail: "",
//       city: "",
//     });
//     const temp = "";
//     console.log(message);
//     setSelectedFile(temp); // clearing form
//     setMessage(message);
//     if (response.message === "Found") {
//       navigate("/resolved-cases", {
//         state: {
//           posted: previewFile,
//           matched: response.image,
//         },
//       });
//     } else {
//       message = "saved";
//       setProgressbar("true");
//       setTimeout(() => {
//         setProgressbar("");
//       }, 3000);
//       navigate("/user-dashboard");
//     }
//   } catch (err) {
//     const message = err.response.data;
//     setMessage(message);
//   }
// } else if (credentials.postType == "FoundPerson") {
//   try {
//     const { data } = await axios.post(
//       "https://localhost:44364/findLostGroup",
//       formData,
//       {
//         headers: {
//           x_auth_token: token,
//         },
//       }
//     );
//     console.log("Searched Found Person: ", data);
//     const { message } = data;
//     setCredentials({
//       name: "",
//       age: "",
//       detail: "",
//       city: "",
//     });
//     const temp = "";
//     setSelectedFile(temp); // clearing form
//     setMessage(message);
//     if (message === "Found") {
//       navigate("/resolved-cases", {
//         state: {
//           posted: previewFile,
//           matched: data.image,
//         },
//       });
//     } else {
//       message = "saved";
//       setProgressbar("true");
//       setTimeout(() => {
//         setProgressbar("");
//       }, 3000);
//       navigate("/user-dashboard");
//     }
//   } catch (err) {
//     const message = err.response.data;
//     setMessage(message);
//   }
// }
