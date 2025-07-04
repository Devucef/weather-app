// src/config/weatherIconMap.js

import sunny from "../Assets/Images/weatherIcons/Sunny.png";
import cloudy from "../Assets/Images/weatherIcons/Cloudy.png";
import partlyCloudy from "../Assets/Images/weatherIcons/PartlyCloudy.png";
import lightRain from "../Assets/Images/weatherIcons/LightRain.png";
import heavyRain from "../Assets/Images/weatherIcons/HeavyRain.png";
import drizzle from "../Assets/Images/weatherIcons/Drizzle.png";
import thunderstorm from "../Assets/Images/weatherIcons/Thunderstorm.png";
import lightning from "../Assets/Images/weatherIcons/Lightning.png";
import nightClear from "../Assets/Images/weatherIcons/NightMoonStar.png";
import nightCloudy from "../Assets/Images/weatherIcons/CloudyNight.png";
import nightStars from "../Assets/Images/weatherIcons/NightStars.png";
import windy from "../Assets/Images/weatherIcons/Windy.png";
import snow from "../Assets/Images/weatherIcons/Snow.png";
import fog from "../Assets/Images/weatherIcons/Fog.png";
import defaultIcon from "../Assets/Images/weatherIcons/Cloudy.png"; // fallback

const weatherIconMap = {
  // ☀️ Clear
  "01d": sunny,
  "01n": nightClear,

  // 🌤️ Few Clouds / Partly Cloudy
  "02d": partlyCloudy,
  "02n": nightCloudy,

  // ☁️ Scattered/Broken Clouds
  "03d": cloudy,
  "03n": cloudy,
  "04d": cloudy,
  "04n": cloudy,

  // 🌧️ Drizzle
  "09d": drizzle,
  "09n": drizzle,

  // 🌦️ Rain
  "10d": lightRain,
  "10n": lightRain,

  // ⛈️ Thunderstorm
  "11d": thunderstorm,
  "11n": thunderstorm,

  // ❄️ Snow
  "13d": snow,
  "13n": snow,

  // 🌫️ Atmosphere (mist, fog, haze, etc.)
  "50d": fog,
  "50n": fog,
};

export default weatherIconMap;
export { defaultIcon, sunny, cloudy, partlyCloudy, lightRain, heavyRain, drizzle, thunderstorm, lightning, nightClear, nightCloudy, nightStars, windy, snow, fog };


