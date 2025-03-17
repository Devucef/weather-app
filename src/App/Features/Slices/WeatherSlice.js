import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clouds: undefined,
  main: undefined,
  name: undefined,
  sys: undefined,
  visibility: undefined,
  weather: undefined,
  wind: undefined,
  timezone : undefined,
};

export const WeatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { clouds, main, name, sys, visibility, weather, wind } = action.payload;
      state.clouds = clouds;
      state.main = main;
      state.name = name;
      state.sys = sys;
      state.visibility = visibility;
      state.weather = weather;
      state.wind = wind;

    },

    setTimeZone : (state, action) => {
      state.timezone = action.payload;
    }
  },
});

export const { setData , setTimeZone } = WeatherSlice.actions;
export default WeatherSlice.reducer;
