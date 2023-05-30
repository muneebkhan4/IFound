import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import ThingPost from "./../components/ThingPost";

export default function ThingsCarousel({ activePosts, setCurrentActiveCase }) {
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
          },
        }}
        onAfterChange={setCurrentActiveCase}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center",
          },
        }}
        dotsNav={{
          show: true,
          itemBtnProps: {
            style: {
              height: 16,
              width: 18,
              borderRadius: "50%",
              border: 0,
            },
          },
          activeItemBtnProps: {
            style: {
              height: 16,
              width: 18,
              borderRadius: "50%",
              border: 0,
              background: "black",
            },
          },
        }}
        itemsToShow={1}
        speed={400}
      >
        {activePosts &&
          activePosts.map((item, index) => (
            <div
              style={{ width: 270 }}
              key={Math.floor(Math.random() * 10000 + 1)}
            >
              <ThingPost data={item} image={item.image} />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
