import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "../features/slices/WeatherSlice";
import LoadingSlice from "../features/slices/LoadingSlice";
import WeekInfoSlice from "../features/slices/WeekInfoSlice";
import UnitSlice from "../features/slices/UnitSlice"
import modalSlice from "../features/slices/ModalSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
    loading: LoadingSlice,
    weekInfo: WeekInfoSlice,
    unit : UnitSlice,
    modal:modalSlice,
  },
});
