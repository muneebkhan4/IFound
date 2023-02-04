import React, { useState, useCallback } from "react";
import List from "./MatchPosts/List";

import Container from "react-bootstrap/Container";
import data from "./MatchPosts/data";



import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ActiveCase() {

    const [currentView, setCurrentView] = useState("lists");

  const handleToggleCurrentView = useCallback(() => {
    setCurrentView((view) => (view === "list" ? "grid" : "list"));
  }, [setCurrentView]);


    return (
        //   <MDBCard>
        //     <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
        //     <MDBCardBody>
        //       <MDBCardTitle>Card title</MDBCardTitle>
        //       <MDBCardText>
        //         Some quick example text to build on the card title and make up the bulk of the card's content.
        //       </MDBCardText>
        //       <MDBBtn href='#'>Button</MDBBtn>
        //     </MDBCardBody>
        //   </MDBCard>
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Container>
      <List
        items={data}
        currentView={currentView}
        onToggleCurrentView={handleToggleCurrentView}
      />
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

            {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
            {/* <Row>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                    xs=6 md=4
                </Col>
            </Row> */}

            {/* Columns are always 50% wide, on mobile and desktop */}
            {/* <Row>
                <Col xs={6}>xs=6</Col>
                <Col xs={6}>xs=6</Col>
            </Row> */}
        </Container>
    );
}