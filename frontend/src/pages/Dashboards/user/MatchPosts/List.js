import React, { useRef, useMemo, useLayoutEffect } from "react";
import Form from "react-bootstrap/Form";
import classNames from "classnames";

import "./List.style.scss";

export default function List({ items, currentView }) {

  // Helper function that allows finding first element in the view port
  const findFirstElementInViewPort = elements =>
    Array.prototype.find.call(
      elements,
      element => element.getBoundingClientRect().y >= 85 // nav height offset
    );

  // Ref to the container with elements
  const containerRef = useRef(null);

  const scrollTo = useMemo(() => {
    // Find all elements in container which will be checked if are in view or not
    const nodeElements = containerRef.current?.querySelectorAll("[data-item]");
    if (nodeElements) {
      return findFirstElementInViewPort(nodeElements);
    }

    return undefined;
  }, [currentView]);

  useLayoutEffect(() => {
    if (scrollTo) {
      // Scroll to element with should be in view after rendering
      scrollTo.scrollIntoView();
      // Scroll by height of nav
      window.scrollBy(0, -85);
    }
  }, [scrollTo, currentView]);

  return (
    <div>
      <div className="fixed-nav">
        <h3>Matched Cases </h3>
      </div>

      <div
        className={classNames("list", { "list-grid": "grid" })}
        ref={containerRef}
      >
        {items.map(item => (
          <div className="list-item" data-item="true" key={item.title}>
            <img
              width="150"
              height="300"
              src={item.img}
              alt={item.title}
              className="list-item-image"
            />
            <h3>{item.title}</h3>
            <p className="list-item-description">{item.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}
