import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: "c",
};

const UnitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    toggleUnit: (state) => {
      if (state.unit === "c") {
        state.unit = "f";
      } else if (state.unit === "f") {
        state.unit = "c";
      }      
    },
  },
});

export const { toggleUnit } = UnitSlice.actions;
export default UnitSlice.reducer;
