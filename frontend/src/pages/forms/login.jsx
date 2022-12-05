import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input";
import NavBar from "../../sections/NavBar";

const Login = () => {
  // navigate hook
  const navigate = useNavigate();

  // data
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Update specific input field
  const handleChange = (e) =>
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    validate();
  };
  // insecure implementation showing api calls,
  // send 400 in any case and show error
  const validate = async () => {
    try {
      const { data, headers } = await axios.post(
        "http://localhost:1000/api/auth",
        credentials
      );
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      localStorage.setItem("x_auth_token", headers.x_auth_token);
      navigate("/user-dashboard");
    } catch (err) {
      const error = err.response.data;
      setError(error);
    }
  };

  return (
    <React.Fragment>
      {localStorage.getItem("email") && (
        <Navigate to="/user-dashboard" replace={true} />
      )}
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
            <h1 className="App-header">Log In</h1>
            <form onSubmit={(e) => handleLoginSubmit(e)}>
              <Input
                autofocus={true}
                label="Email"
                type="text"
                placeholder="email"
                name="email"
                value={credentials.email}
                handleChange={(e) => handleChange(e)}
              />
              <Input
                autofocus={false}
                label="Password"
                type="password"
                placeholder="password"
                name="password"
                value={credentials.password}
                handleChange={(e) => handleChange(e)}
              />
              <p
                style={{ marginLeft: 120, marginBottom: "1rem", color: "red" }}
              >
                {error}
              </p>
              <button
                className="btn btn-primary"
                style={{ marginLeft: "8rem" }}
              >
                Submit
              </button>
              <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Not Registered? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;

// converted to functional component above
// class component as backup

// class Login extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       credentials: { email: "", password: "" },
//       error: "",
//     };
//   }

//   handleChange = (e) => {
//     const credentials = { ...this.state.credentials };
//     credentials[e.currentTarget.name] = e.currentTarget.value;
//     this.setState({ credentials });
//   };
//   handleLoginSubmit = (e) => {
//     e.preventDefault();
//     this.validate();
//   };
//   // insecure implementation showing api calls,
//   // send 400 in any case and show error
//   async validate() {
//     const { credentials } = this.state;
//     try {
//       const { data, headers } = await axios.post(
//         "http://localhost:1000/api/auth",
//         credentials
//       );
//       console.log(data.headers);
//       localStorage.setItem("email", data.email);
//       localStorage.setItem("name", data.name);
//       localStorage.setItem("x_auth_token", headers.x_auth_token);
//       //<Navigate to="/user-dashboard" replace={true} />;
//       this.props.history.push("/foo");
//     } catch (err) {
//       const error = err.response.data;
//       this.setState({ error });
//     }
//   }

//   render() {
//     const { email } = this.state.credentials;
//     const { password } = this.state.credentials;
//     const { error } = this.state;
//     return (
//       <React.Fragment>
//         {localStorage.getItem("email") && (
//           <Navigate to="/user-dashboard" replace={true} />
//         )}
//         <NavBar currentUser={localStorage.getItem("email")} />
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
//             <div className="bg-light mt-2" style={{ width: "20rem" }}>
//               <h1 className="App-header">Log In</h1>
//               <form onSubmit={this.handleLoginSubmit}>
//                 <Input
//                   autofocus={true}
//                   label="Email"
//                   type="text"
//                   placeholder="email"
//                   name="email"
//                   value={email}
//                   handleChange={this.handleChange}
//                 />
//                 <Input
//                   autofocus={false}
//                   label="Password"
//                   type="password"
//                   placeholder="password"
//                   name="password"
//                   value={password}
//                   handleChange={this.handleChange}
//                 />
//                 <p style={{ marginLeft: 120, color: "red" }}>{error}</p>
//                 <button
//                   className="btn btn-primary"
//                   style={{ marginLeft: "8rem" }}
//                 >
//                   Submit
//                 </button>
//                 <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
//                   Not Registered? <Link to="/signup">Sign up</Link>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Login;
