import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";

import { useDispatch, useSelector } from "react-redux";
import { moveObjects } from "./redux/motionSlice";
import { getCanvasPosition, radiansToDegrees } from "./utils/formulas";

const App = () => {
  const dispatch = useDispatch();
  const angle = useSelector((state) => state.motion.angle);
  const canvasMousePosition = useRef(null);

  // Track mouse position
  const trackMouse = (event) => {
    console.log("get canvas position:", getCanvasPosition(event));
    canvasMousePosition.current = getCanvasPosition(event);
  };

  // Move objects at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {
      if (canvasMousePosition.current) {
        const { x, y } = canvasMousePosition.current;
        dispatch(moveObjects({ x, y }));
        console.log("Canvas Position:", { x, y });
        console.log("Calculated Angle:", radiansToDegrees(Math.atan2(x, y)));
      }
    }, 10);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [dispatch]);

  return (
    <div className="App">
      <Canvas angle={angle} onMouseMove={trackMouse} />
    </div>
  );
};

App.propTypes = {
  angle: PropTypes.number,
};

export default App;
