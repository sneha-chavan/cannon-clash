import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";

import motionReducer from "./redux/motionSlice";
import Game from "./Game";

// Configure the Redux store
const store = configureStore({
  reducer: {
    motion: motionReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Game />
  </Provider>
);
