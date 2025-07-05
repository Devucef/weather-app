import axios from "./axiosInstance";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeatherByCoords = async (lat, lon, unit) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather`,
    {
      params: {
        lat,
        lon,
        units: unit,
        appid: WEATHER_API_KEY,
      },
    }
  );
  return response.data;
};
