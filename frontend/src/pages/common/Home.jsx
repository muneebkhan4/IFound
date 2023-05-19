import React from "react";
import { HomeCarousel, ReportImgs, ReviewImgs, FlowGif } from "../../Images/image.js";
import { Row, Col, Container, Card, Carousel } from 'react-bootstrap';
import NavBar from "../../sections/NavBar";
import { COLORS } from '../../styles/globalColors.js';
import './Home.css';
import Footer from "../../sections/Footer.jsx";


const Home = () => {
    const reviews = [
        { _id: 1, text: "abc" },
        // { _id: 2, text: "def" }
    ];

    const homeCarousel = [
        {
            img: HomeCarousel[0],
            alt: "Matching",
            title: "",
            txt: "",
        },
        {
            img: HomeCarousel[1],
            alt: "Second Slide",
            title: "",
            txt: ""
        },
        {
            img: HomeCarousel[2],
            alt: "Second Slide",
            title: "",
            txt: ""
        },
        {
            img: HomeCarousel[3],
            alt: "Second Slide",
            title: "",
            txt: ""
        },
        {
            img: HomeCarousel[4],
            alt: "Second Slide",
            title: "",
            txt: ""
        },
        {
            img: HomeCarousel[5],
            alt: "Second Slide",
            title: "",
            txt: ""
        },
        {
            img: HomeCarousel[6],
            alt: "Second Slide",
            title: "",
            txt: ""
        },
        {
            img: HomeCarousel[7],
            alt: "Second Slide",
            title: "",
            txt: ""
        },

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
            name: "Shylla",
            img: ReviewImgs[0],
            reviewTxt: "Great platform, very efficient and works really well on both phone and web. I think this is amazing to use. it has made the whole process much more efficient.",
            value: 1,

        },
        {
            name: "Sial Haq",
            img: ReviewImgs[1],
            reviewTxt: "I was able to find my child 4 year old last year. I lost him at Main Plaza Sahiwal. Someone got my child but my child wasn't able to tell any useful information.",
            value: 2
        },
        {
            name: "Maryam",
            img: ReviewImgs[2],
            reviewTxt: "In the recent flood disaster, We got back deadbody of my second cousin through face matching who was the victim of it. Somebody got it without identifying the identity.",
            value: 3
        },

    ]

    return (
        <React.Fragment>
            <NavBar currentUser={localStorage.getItem("email")} />
            <Container className="rounded" style={{ backgroundColor: "white" }}>
                <Row className="border-top mt-2">
                    <Carousel interval={1000}>
                        {homeCarousel.map((value, index) => (
                            <Carousel.Item key={index}>
                                <div className=" m-auto" style={{width:"50vh"}}>
                                    <img
                                        className="d-block w-100"
                                        src={value.img}
                                        alt={value.alt}
                                        style={{ height: "400px",width:"10px" }}
                                    />
                                </div>

                                <Carousel.Caption>
                                    <h1>{value.title}</h1>
                                    <p>{value.txt}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                </Row>
                <Row>
                    <div className="fw-bd m-1 border-top"></div>

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
                <Row>
                    <div className="d-flex align-items-center justify-content-center">
                        <img src={FlowGif[0]} class=""
                            style={
                                {
                                    width: "",
                                    height: "",
                                }
                            } alt="Cinque Terre"></img>
                    </div>
                </Row>
                <Row className="mt-3 mb-3">
                    <div className="bg-dark bg-opacity-25 container-fluid">
                        <div style={{ backgroundColor: COLORS.ifGrey }} className="d-flex justify-content-center">
                            <h3 >What People Think About IFound ?</h3>
                        </div>
                        <Carousel controls={false}>
                            {reviews.map((review, index) => (
                                <Carousel.Item key={index} style={{ backgroundColor: COLORS.ifGrey }}>
                                    <Row className="justify-content-md-center">
                                        {
                                            reviewCards.map((value, index) => (
                                                <Col key={index} xs={6} md={4}>
                                                    <Card key={value} className="mt-3 mb-3">
                                                        <Card.Body>
                                                            <Card.Text>
                                                                {value.reviewTxt}
                                                            </Card.Text>
                                                        </Card.Body>
                                                        <div className="d-flex justify-content-end">
                                                            <div className="d-flex flex-column align-items-center mb-1 me-3">
                                                                <img src={value.img} class="rounded-circle"
                                                                    style={
                                                                        {
                                                                            width: "4rem",
                                                                            height: "4rem",
                                                                        }
                                                                    } alt="Cinque Terre"></img>
                                                                <div><h6>{value.name}</h6></div>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </Carousel.Item>
                            ))}
                            {reviews.map((review, index) => (
                                <Carousel.Item key={index} style={{ backgroundColor: COLORS.ifGrey }}>
                                    <Row className="justify-content-md-center">
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
                                                            <div className="d-flex flex-column align-items-center mb-1 me-3">
                                                                <img src={value.img} class="rounded-circle"
                                                                    style={
                                                                        {
                                                                            width: "4rem",
                                                                            height: "4rem",
                                                                        }
                                                                    } alt="Cinque Terre"></img>
                                                                <div><h4>{value.name}</h4></div>
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
            <Footer />

        </React.Fragment>
    )
}

export default Home;
