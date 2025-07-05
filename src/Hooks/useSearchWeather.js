import { useDispatch, useSelector } from "react-redux";
import { setCoords } from "../app/features/slices/WeekInfoSlice";
import { setData, setTimeZone } from "../app/features/slices/WeatherSlice";
import { fetchCitySuggestions } from "../api/geoApi";
import { fetchWeatherByCoords } from "../api/weatherApi";
import { setLoading } from "../app/features/slices/LoadingSlice";

export const useSearchWeather = () => {
  const dispatch = useDispatch();
  const { unit } = useSelector(({ unit }) => unit);

  const getSuggestions = async (input, setOptions, setInputLoad) => {
    try {
      setInputLoad(true);
      const data = await fetchCitySuggestions(input);
      const options = data.map((item) => ({
        value: item.place_id,
        label: item.city || item.formatted,
        lat: item.lat,
        lon: item.lon,
        city: item.city,
        country: item.country,
      }));
      setOptions(options);
    } catch (error) {
      console.error("GeoAPI error:", error);
    } finally {
      setInputLoad(false);
    }
  };

  const getWeather = async (selected, unitParam) => {
    if (!selected) return;
    try {
      dispatch(setLoading(true));
      const unitsToUse = unitParam || unit;

      const data = await fetchWeatherByCoords(
        selected.lat,
        selected.lon,
        unitsToUse
      );

      const { clouds, main, name, sys, visibility, weather, wind, timezone } =
        data;

      dispatch(setData({ clouds, main, name, sys, visibility, weather, wind }));
      dispatch(setTimeZone(timezone));
      dispatch(setCoords({ lat: selected.lat, lon: selected.lon }));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("WeatherAPI error:", error);
    }
  };

  return { getSuggestions, getWeather, unit };
};
