import React from "react";
import { HomeCarousel, ReportImgs,ReviewImgs } from "../../Images/image.js";
import { Row, Col, Container, Card, Carousel } from 'react-bootstrap';
import NavBar from "../../sections/NavBar";
import { COLORS } from '../../styles/globalColors.js';


const Home = () => {
    const reviews = [
        { _id: 1, text: "abc" },
        // { _id: 2, text: "def" }
    ];

    const homeCarousel=[
        {
            img:HomeCarousel[0],
            alt:"First slide",
            title:"Second slide label",
            txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            img:HomeCarousel[1],
            alt:"Second Slide",
            title:"Second slide label",
            txt:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
    ]

    const statsArr = [
        {
            title: "Missing Childs",
            img: ReportImgs[0],
            lgHeading: "100+ Parents got their children back successfully.",
            smHeading: "These cases has been verified successfully."
        },
        {
            title: "Disabled Persons",
            img: ReportImgs[1],
            lgHeading: "20+ People got their missing disabled person back successfully.",
            smHeading: "These cases has been verified successfully."
        },
        {
            title: "Lost Objects",
            img: ReportImgs[2],
            lgHeading: "50+ People got their things back successfully.",
            smHeading: "These cases has been verified successfully."
        },

    ];

    const reviewCards = [
        {
            img:ReviewImgs[0],
            reviewTxt: "Great platform, very efficient and works really well on both phone and web. I think this is the it has made the whole process much more efficient.",
            value: 1,

        },
        {
            img:ReviewImgs[1],
            reviewTxt: "Great platform, very efficient and works really well on both phone and web. I think this is the it has made the whole process much more efficient.",
            value: 2
        },
        {
            img:ReviewImgs[2],
            reviewTxt: "Great platform, very efficient and works really well on both phone and web. I think this is the it has made the whole process much more efficient.",
            value: 3
        },

    ]

    return (
        <React.Fragment>
            <NavBar currentUser={localStorage.getItem("email")} />
            <Container style={{ backgroundColor: "white" }}>
                <Row >
                    <Carousel>
                        {homeCarousel.map((value, index)=>(
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={value.img}
                                alt={value.alt}
                            />
                            <Carousel.Caption>
                                <h3>{value.title}</h3>
                                <p>{value.txt}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        ))} 
                    </Carousel>
                </Row>
                <Row className="mt-3 mb-3">
                    {
                        statsArr.map((value, index) => (
                            <Col xs={6} md={4}>
                                <Card key={index} style={{}}>
                                    <Card.Img variant="top" src={value.img} />
                                    <Card.Body style={{ backgroundColor: COLORS.ifGrey, minHeight: "23vh" }}>
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Text>
                                            {
                                                value.lgHeading
                                            }
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row className="mt-3 mb-3">
                    <div className="bg-dark bg-opacity-25 container-fluid">
                        <Carousel style={{}}>
                            {reviews.map((review, index) => (
                                <Carousel.Item key={index} style={{ backgroundColor: COLORS.ifGrey }}>
                                    <Row>
                                        {
                                            reviewCards.map((value) => (
                                                <Col xs={6} md={4}>
                                                    <Card key={value} className="mt-3 mb-3">
                                                        <Card.Body>
                                                            <Card.Text>
                                                                {value.reviewTxt}
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d-flex flex-column align-items-center mb-1 me-1">
                                                                <img src={value.img} class="rounded-circle"
                                                                    style={
                                                                        {
                                                                            width: "4rem",
                                                                            height: "4rem",
                                                                        }
                                                                    } alt="Cinque Terre"></img>
                                                                <div><h6>Usman Kabeer</h6></div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home;
