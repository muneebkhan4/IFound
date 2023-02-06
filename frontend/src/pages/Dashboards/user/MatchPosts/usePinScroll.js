import { useRef, useMemo } from "react";

const findFirstElementInViewPort = elements =>
  Array.prototype.find.call(
    elements,
    element => element.getBoundingClientRect().y > 0
  );

export default ({ elementsQuery }) => {
  const containerRef = useRef(null);

  const scrollTo = useMemo(() => {
    const nodeElements = containerRef.current?.querySelectorAll(elementsQuery);
    if (nodeElements) {
      return findFirstElementInViewPort(nodeElements);
    }

    return undefined;
  }, [currentView]);

  useLayoutEffect(() => {
    if (scrollTo) {
      scrollTo.scrollIntoView();
      window.scrollBy(0, -118);
    }
  }, [scrollTo, listView]);

  return { containerRef };
};
