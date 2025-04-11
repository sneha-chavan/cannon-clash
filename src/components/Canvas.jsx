import React, { useEffect, useState } from "react";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonPipe from "./CannonPipe";
import CannonBase from "./CannonBase";
import PropTypes from "prop-types";

const Canvas = ({ angle, onMouseMove }) => {
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
      onMouseMove={onMouseMove}
    >
      <Sky />
      <Ground />
      <CannonPipe rotation={angle} />
      <CannonBase />
    </svg>
  );
};
Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};
export default Canvas;
