import { configureStore } from "@reduxjs/toolkit";
import WeatherSlice from "../features/slices/weatherSlice";
import LoadingSlice from "../features/slices/loadingSlice";
import WeekInfoSlice from "../features/slices/weekInfoSlice";
import UnitSlice from "../features/slices/unitSlice"
import modalSlice from "../features/slices/modalSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherSlice,
    loading: LoadingSlice,
    weekInfo: WeekInfoSlice,
    unit : UnitSlice,
    modal:modalSlice,
  },
});
