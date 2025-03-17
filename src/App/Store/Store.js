import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "../Features/Slices/WeatherSlice";
import LoadingSlice from "../Features/Slices/LoadingSlice";
import WeekInfoSlice from "../Features/Slices/WeekInfoSlice";
import UnitSlice from "../Features/Slices/UnitSlice"

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
    loading: LoadingSlice,
    weekInfo: WeekInfoSlice,
    unit : UnitSlice,
  },
});
