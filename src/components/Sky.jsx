import React from "react";
import { skyAndGroundWidth } from "../utils/constants";

const Sky = () => {
  const skyStyle = {
    fill: "#30abef",
  };
  //   the width is not important in this game. You just have to set it to a number that is high enough to cover any screen size.
  const skyWidth = skyAndGroundWidth;
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyWidth / -2}
      y={100 - gameHeight}
      width={skyWidth}
      height={gameHeight}
    />
  );
};

export default Sky;
