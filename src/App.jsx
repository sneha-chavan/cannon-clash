import React from "react";
import PropTypes from "prop-types";
import Canvas from "./components/Canvas";

const App = ({ message }) => (
  <div className="App">
    <Canvas />
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
