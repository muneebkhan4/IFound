import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import NavBar from "./sections/NavBar";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import FoundList from "./pages/FoundList";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LostList from "./pages/LostList";
import ContactUs from "./pages/ContactUs";
import LogIn from "./pages/login";
import SignUpForm from "./pages/Signup";
import UploadPerson from "./pages/uploadPerson";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="/Found-List" element={<FoundList />}></Route>
      <Route path="/Lost-List" element={<LostList />}></Route>
      <Route path="/Contact-Us" element={<ContactUs />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUpForm />}></Route>
      <Route path="/upload-person" element={<UploadPerson />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

function App() {
  return (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  );
}

function Wrapper() {
  return (
    <BrowserRouter>
      <App />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default Wrapper;
