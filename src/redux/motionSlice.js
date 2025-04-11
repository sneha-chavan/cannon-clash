// src/slices/motionSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { calculateAngle } from "../utils/formulas";

const motionSlice = createSlice({
  name: "motion",
  initialState: {
    angle: 45,
  },
  reducers: {
    moveObjects: (state, action) => {
      const { x, y } = action.payload;

      if (x === undefined || y === undefined) return state;

      // Calculate the angle relative to the origin (0, 0)
      state.angle = calculateAngle(0, 0, x, y);
    },
  },
});

export const { moveObjects } = motionSlice.actions;
export default motionSlice.reducer;
