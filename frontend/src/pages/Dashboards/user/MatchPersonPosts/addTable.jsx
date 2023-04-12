import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Button, ButtonGroup } from "react-bootstrap";
import { Row, Dropdown } from "react-bootstrap";
import './addTable.jsx';
import { Container } from "rsuite";
import { COLORS } from "../../../../styles/globalColors.js";

const actionButtons = ["Active", "Resolved"];

const CustomToggleButton = React.forwardRef(({ children, onClick }, ref) => {
    return (
        <div
            ref={ref}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <span>
                <svg aria-label="More Options" class="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </span>
            {children}
        </div>
    );
});

//Controlled Component
function AddTable({ activeCases }) {
    const navigate = useNavigate();

    console.log("add table cases: ", activeCases);
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (value) => {
        setActiveButton(value);
    };


    const onPostManageClick = (data) => {
        debugger;
        console.log("event: ", data);
        navigate(`/searchPost/${data.postId}/${data.postType}`);
    }

    return (
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
            <ButtonGroup>
                <Button
                    onClick={() => handleButtonClick(1)}
                    active={activeButton == 1} // auto-focus on button1 when it's active
                >
                    {actionButtons[0]}
                </Button>
                <Button
                    onClick={() => handleButtonClick(2)}
                    active={activeButton === 2} // auto-focus on button2 when it's active
                >
                    {actionButtons[1]}
                </Button>
            </ButtonGroup>
            <div >
                {
                    activeCases && activeCases.map((activePost, index) => (
                        <Container>
                            <Row className="bg-white justify-content-md-center m-1 border border-secondary" key={index}>
                                <Col xs lg="2">
                                    <p style={{ backgroundColor: COLORS.ifColumnColor }} className="fs-5">{new Date(activePost.date).toDateString()}</p>
                                </Col>
                                <Col>
                                    <Row>
                                        <Col md="auto"><div>
                                            {activePost.name}
                                        </div></Col>
                                        <Col xs lg="2">
                                            <strong>{activePost.city}</strong>
                                        </Col>

                                    </Row>
                                    <Row className="p-1">
                                        <Col className="border-top"><strong>{activePost.details}</strong></Col>
                                        <Col className="d-flex">
                                            <Button onClick={() => onPostManageClick(activePost)} variant="outline-secondary" size="sm">Manage</Button>{' '}
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggleButton}>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Delete</Dropdown.Item>
                                                    <Dropdown.Item>Mark Resolve</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                        </Container>
                    )
                    )
                }
            </div>

        </div >
    );
}

export default AddTable;
