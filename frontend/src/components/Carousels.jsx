import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import Table from 'react-bootstrap/Table';

export default function Carousels({ activePosts, setCurrentActiveCase }) {
  const [activeSlide, setActiveSlide] = useState(0);
  // console.log("activePosts Props: ", activePosts);

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

        {activePosts && activePosts.map((item, index) => (
          <div
            style={{
              display:"flex",
              
              border: "0px solid white",
              textAlign: "center",

            }}
            key={index}
          >
            <img
              src={"data:image/jpg;base64," + item.image}
              alt="image"
              className="card-img-top"
              style={{
                marginTop: "0.15rem",
                borderRadius: "1rem",
                width: "14rem",
              }}
            />
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <td>Zubair Ahmad</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Phone</th>
                  <td>03076331854</td>
                </tr>
                <tr>
                  <th>Place</th>
                  <td>Market</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))}

      </Carousel>
    </div>
  );
}