import React from "react";
import "./App.css";
import "./test.css"
import ImageSlider, { Slide } from "react-auto-image-slider";

export default function (props) {

    return (
        <div>
            <div class="split left" style={{
                backgroundColor: "#d09e9e",
            }}>
                <ImageSlider effectDelay={500} autoPlayDelay={2000}>
                    <Slide>
                        <img
                            
                            alt="img2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEnjVv8PjYIlBgFJlFwaBpy7N0NGNhB7dJkpJyV24&s"
                        />
                    </Slide>
                    <Slide>
                        <img
                            alt="img2"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDsxwG-P8VDYTr7z6sA7J43I54p6-cT7bF5lSrS40&s"
                        />
                    </Slide>
                    <Slide>
                        <img
                            alt="img1"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XIQYj_3YJLxQ5D1jauhnhIAHHoxnqik8cwc1Dl3DzR6UIJfR5-w0OEotb_d38rRjn3A&usqp=CAU"
                        />
                    </Slide>
                </ImageSlider>
            </div>
            <div class="split right">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    );
}



