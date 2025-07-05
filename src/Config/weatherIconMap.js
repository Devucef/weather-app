// src/config/weatherIconMap.js

import sunny from "../assets/images/weatherIcons/Sunny.png";
import cloudy from "../assets/images/weatherIcons/Cloudy.png";
import partlyCloudy from "../assets/images/weatherIcons/PartlyCloudy.png";
import lightRain from "../assets/images/weatherIcons/LightRain.png";
import heavyRain from "../assets/images/weatherIcons/HeavyRain.png";
import drizzle from "../assets/images/weatherIcons/Drizzle.png";
import thunderstorm from "../assets/images/weatherIcons/Thunderstorm.png";
import lightning from "../assets/images/weatherIcons/Lightning.png";
import nightClear from "../assets/images/weatherIcons/NightMoonStar.png";
import nightCloudy from "../assets/images/weatherIcons/CloudyNight.png";
import nightStars from "../assets/images/weatherIcons/NightStars.png";
import windy from "../assets/images/weatherIcons/Windy.png";
import snow from "../assets/images/weatherIcons/Snow.png";
import fog from "../assets/images/weatherIcons/Fog.png";
import defaultIcon from "../assets/images/weatherIcons/Cloudy.png"; // fallback

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


