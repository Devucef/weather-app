import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "../Features/Slices/WeatherSlice";
import LoadingSlice from "../Features/Slices/LoadingSlice";
import WeekInfoSlice from "../Features/Slices/WeekInfoSlice";
import UnitSlice from "../Features/Slices/UnitSlice"
import modalSlice from "../Features/Slices/ModalSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
    loading: LoadingSlice,
    weekInfo: WeekInfoSlice,
    unit : UnitSlice,
    modal:modalSlice,
  },
});
