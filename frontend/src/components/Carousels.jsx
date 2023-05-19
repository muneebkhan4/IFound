import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Carousel from "react-simply-carousel";
import Table from 'react-bootstrap/Table';
import { Button, Card, Row } from "react-bootstrap";
import { COLORS } from "../styles/globalColors";


export default function Carousels({ activePosts, setCurrentActiveCase }) {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  console.log("activePosts Props: ", activePosts);

  const onPostManageClick=(data)=>{
    debugger;
    console.log("event: ",data);
    navigate(`/Person-Details/${data.postId}`);
  }

  return (
    <div>
      <Carousel
        // containerProps={{
        //   style: {
        //     width: "100%",
        //     justifyContent: "space-between",
        //     userSelect: "text"
        //   }
        // }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: "#d8d8dd",
            width: "100%",
            height: "100%"
          }
        }}
        onAfterChange={setCurrentActiveCase}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0
            }
          }
          ,
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 16,
              borderRadius: "50%",
              border: 0,
              background: "black"
            }
          }
        }}
        itemsToShow={1}
        speed={400}
      >

        {activePosts && activePosts.map((post, index) => (

          <Card key={index} style={{ minWidth: "30vh", height: "40vh" }}>
            <Card.Img variant="top" src={"data:image/jpg;base64," + post.image} style={{ height: "28vh" }} />
            <Card.Body style={{ backgroundColor: COLORS.ifGrey, }}>
              <Card.Title><strong>{post.name}</strong></Card.Title>
              <Card.Text>
                <Row><strong>{post.city}</strong></Row>
                <Row>
                  <div>
                    {new Date(post.date).toDateString()}
                  </div>
                </Row>
                <Row >
                  <div className="d-flex justify-content-center">
                    <Button onClick={()=>onPostManageClick(post)} variant="outline-secondary" size="sm">Manage</Button>{' '}
                  </div>
                </Row>

              </Card.Text>


            </Card.Body>
          </Card>
        ))}

      </Carousel>
    </div>
  );
}