import React from "react";
import { Container, Row, Col } from "react-bootstrap";



function PostCountReport(props) {
        const {heading}=props;
    return (

        <React.Fragment>
            <Row className="bg-white p-1">
                <Row className="fs-3">
                    {heading}
                </Row>
                <Row className="p-1">
                    <Col>
                        <div id="total-lost-posts" className="">
                            <div className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center">
                                    <span className="pe-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                        </svg>
                                    </span>
                                    <div id="lost-count" className="fs-6">
                                        255
                                    </div>
                                </div>
                                <p >
                                    Total {heading} Posts
                                </p>
                            </div>
                        </div>

                    </Col>
                    <Col>
                        <div id="total-found-posts" className="">
                            <div className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center">
                                    <span className="pe-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                                            <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                        </svg>
                                    </span>
                                    <div id="found-count" className="fs-6">
                                        255
                                    </div>
                                </div>
                                <p >
                                    Total Found Posts
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div id="total-resolved-posts" className="">
                            <div className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center">
                                    <span className="pe-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-person-fill-check" viewBox="0 0 16 16">
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                                        </svg>
                                    </span>
                                    <div id="resolved-count" className="fs-6">
                                        255
                                    </div>
                                </div>
                                <p >
                                    Total Resolved Posts
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div id="total-unresolved-posts" className="">
                            <div className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center">
                                    <span className="pe-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="bi bi-person-exclamation" viewBox="0 0 16 16">
                                            <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z" />
                                            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V11a.5.5 0 0 0-.5-.5Zm0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                                        </svg>
                                    </span>
                                    <div id="unresolved-count" className="fs-6">
                                        255
                                    </div>
                                </div>
                                <p >
                                    Total Unresolved Posts
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Row>
        </React.Fragment >
    );
}

export default PostCountReport;
