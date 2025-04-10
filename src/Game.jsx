import React from "react";
import { useSelector } from "react-redux";
import App from "./App";

const Game = () => {
  const message = useSelector((state) => state.message);
  return (
    <div>
      <App message={message} />
    </div>
  );
};

export default Game;
