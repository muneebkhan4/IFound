import React, { useState, useCallback } from "react";
import List from "./MatchPosts/List";
import Container from "react-bootstrap/Container";
import data from "./MatchPosts/data";


export default function CurrentCase() {

    const [currentView, setCurrentView] = useState("grid");

    return (

        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Container>
                <List
                    items={data}
                    currentView={currentView}
                    heading={"Active Person Cases"}
                />
                <List
                    items={data}
                    currentView={currentView}
                    heading={"Active Things Cases"}
                    >
                </List>
            </Container>
            {/* <Row>
                <Col >
                    xs=12 md=8
                </Col>
                <Col >
                    xs=6 md=4
                </Col>
                <Col >
                    xs=12 md=8
                </Col>
                <Col >
                    xs=6 md=4
                </Col><Col >
                    xs=12 md=8
                </Col>
                <Col >
                    xs=6 md=4
                </Col><Col >
                    xs=12 md=8
                </Col>
                <Col >
                    xs=6 md=4
                </Col><Col >
                    xs=12 md=8
                </Col>
                <Col >
                    xs=6 md=4
                </Col>
            </Row> */}


        </Container>
    );
}