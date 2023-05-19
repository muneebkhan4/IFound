import { useLocation, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import Input from "../../components/Input";
import axios from "axios";

import jwt_decode from "jwt-decode";
import { GenderType, RelationType } from "../../Enums/Enums";
import Dropdown from "./dropdown";
import { Navigate } from "react-router-dom";
import NavBar from "../../sections/NavBar"

const TestForm = ({ PostType, ApiUrl }) => {




    // return
    return (
        <React.Fragment>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        1 of 3
                    </Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col md="auto">Variable width content</Col>
                    <Col xs lg="2">
                        3 of 3
                    </Col>
                </Row>
            </Container>
            {/* <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form> */}
            {/* <h1 class="text-success text-center">
                GeeksforGeeks
            </h1>
            <h2 class="text-center">Stacked form</h2>
            <div class="container">
                <form action="#">
                    <div class="form-group">
                        <label for="fname">First Name:</label>
                        <input type="text" class="form-control" id="fname"
                            placeholder="Enter First Name" name="fname"/>
                    </div>
                    <div class="form-group">
                        <label for="lname">Last Name:</label>
                        <input type="text" class="form-control" id="lname"
                            placeholder="Enter Last Name" name="lname"/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Id:</label>
                        <input type="email" class="form-control" id="email"
                            placeholder="Enter Email Id" name="email"/>
                    </div>
                    <div class="form-group">
                        <label for="contact">Contact No:</label>
                        <input type="text" class="form-control" id="contact"
                            placeholder="Enter Contact Number" name="contact"/>
                    </div>
                    <div class="form-group form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"
                                name="remember">
                                Remember me</input>
                        </label>
                    </div>
                    <button type="submit" class="btn bg-success">
                        Submit
                    </button>
                </form>
            </div> */}


        </React.Fragment>
    );
};

export default TestForm;

