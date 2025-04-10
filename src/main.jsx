import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";

import reducer from "./redux/reducer";
import Game from "./Game";

// Configure the Redux store
const store = configureStore({
  reducer,
});

// Create root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <Provider store={store}>
    <Game />
  </Provider>
);
