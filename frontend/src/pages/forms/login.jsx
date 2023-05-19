import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input";
import NavBar from "../../sections/NavBar"
import { Container, Col, Row } from "react-bootstrap";
import "./login.css";
import IFoundSvg from "../../components/Svgs/IfoundSvg";
import Footer from "../../sections/Footer";

const Login = ({ setTokenForFooter }) => {
  // navigate hook
  const navigate = useNavigate();

  // data
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [progressbar, setProgressbar] = useState("");

  const screenHeight = window.innerHeight;
  // Set the height of the to the current screen height

  // Update specific input field
  const handleChange = (e) =>
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setProgressbar("true");
    setTimeout(() => {
      setProgressbar("");
    }, 500);
    validate();
  };
  // insecure implementation showing api calls,
  // send 400 in any case and show error
  const validate = async () => {
    try {
      const { data, headers } = await axios.post(

        `${process.env.REACT_APP_NODE_API}api/auth`,
        credentials
      );
      debugger;
      localStorage.setItem("email", data.email);
      localStorage.setItem("name", data.name);
      localStorage.setItem("x_auth_token", headers.x_auth_token);
      if (data.userType === "admin") navigate("/admin-dashboard");
      else if (data.userType === "police") navigate("/police-dashboard");
      else if (data.userType === "user") navigate("/user-dashboard");
    } catch (err) {
      const error = err.response ? err.response.data : err.response;
      setError(error);
    }
  };

  return (
    <div className="bg-white">
      <NavBar currentUser={localStorage.getItem("email")} />
      {localStorage.getItem("email") && (
        <Navigate to="/user-dashboard" replace={true} />
      )}

      <Container >


        <div className="login-col">
          {/* <div className="box"> */}
          <div id="ifound-svg" className="svg-logo">
            <IFoundSvg height={"30px"} width={"7rem"} />

          </div>
          <div id="Sign In Heading" className="auth-form-header">
            <h1>
              Sign in to IFound
            </h1>
          </div>
          <div className="box">
            <form onSubmit={(e) => handleLoginSubmit(e)}>
              <div className="w-100">
                <Input
                  autofocus={true}
                  label="Email"
                  type="text"
                  placeholder="email"
                  name="email"
                  value={credentials.email}
                  handleChange={(e) => handleChange(e)}
                  style={{}}
                />
              </div>
              <div className="w-100">
                <Input
                  autofocus={false}
                  label="Password"
                  type="password"
                  placeholder="password"
                  name="password"
                  value={credentials.password}
                  handleChange={(e) => handleChange(e)}
                  style={{}}
                />
              </div>

              <p
                style={{
                  marginLeft: 120,
                  marginBottom: "1rem",
                  color: "red",
                }}
              >
                {error}
              </p>
              <button
                className="btn btn-primary w-100"

              >
                Login
              </button>

              <p style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                Not Registered? <Link to="/signup">Sign up</Link>
              </p>
              {progressbar && (
                <div class="spinner-grow fonts" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              )}
            </form>
          </div>
        </div>


      </Container>
    </div>

  );
};

export default Login;