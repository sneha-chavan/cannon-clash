import React, { useEffect, useState } from "react";
import Sky from "./Sky";
import Ground from "./Ground";

const Canvas = () => {
  const [viewBox, setViewBox] = useState([
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight,
  ]);

  // Function to update the viewBox on window resize
  const updateViewBox = () => {
    setViewBox([
      window.innerWidth / -2,
      100 - window.innerHeight,
      window.innerWidth,
      window.innerHeight,
    ]);
  };

  // Setting up event listener for window resize
  useEffect(() => {
    window.addEventListener("resize", updateViewBox);
    return () => {
      window.removeEventListener("resize", updateViewBox);
    };
  }, []);

  return (
    <svg
      id="aliens-go-home-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      <Sky />
      <Ground />
      <circle cx={0} cy={0} r={50} />
    </svg>
  );
};

export default Canvas;
