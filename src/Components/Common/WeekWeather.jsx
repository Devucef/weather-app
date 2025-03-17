import React, { useEffect, useState } from "react";
import sunny from "../Icons/sunny.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkeletonWrapper from "../UI/SkeletonWrapper";
import { useSelector } from "react-redux";

const WeekWeather = () => {
  const weekInfo = useSelector(({ weekInfo }) => weekInfo);
  const [dailyData, setDailyData] = useState(null);
  const { loading } = useSelector(({ loading }) => loading);
  const { unit } = useSelector(({ unit }) => unit);
  const [unity, setUnity] = useState("");



  const { lat, lon } = weekInfo;

  const weatherIconCodes = {
    0: "01d", // Clear sky
    1: "02d", // Mainly clear
    2: "03d", // Partly cloudy
    3: "04d", // Overcast
    45: "50d", // Fog
    48: "50d", // Depositing rime fog
    51: "09d", // Light drizzle
    53: "09d", // Moderate drizzle
    55: "09d", // Dense drizzle
    61: "10d", // Light rain
    63: "10d", // Moderate rain
    65: "10d", // Heavy rain
    71: "13d", // Light snow
    73: "13d", // Moderate snow
    75: "13d", // Heavy snow
    95: "11d", // Thunderstorm
    99: "11d", // Severe thunderstorm
  };



  const GetWeatherData = () => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&temperature_unit=${unity}&timezone=auto&forecast_days=10`
    )
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.daily.time.map((date, index) => {
          const weatherCode = data.daily.weathercode[index];
          const weatherIcon = weatherIconCodes[weatherCode] || "01d"; // Fallback to "01d" if the weather code is not in the mapping

          return {
            date,
            maxTemp: data.daily.temperature_2m_max[index],
            minTemp: data.daily.temperature_2m_min[index],
            weatherIcon,
          };
        });
        setDailyData(mappedData);
        
      })
      .catch((error) => console.error("Error fetching options:", error));
  };

  useEffect(() => {
    setUnity(unit === "c" ? "celsius" : "fahrenheit");
  }, [unit]);
  
  useEffect(() => {
    if (!lat || !lon || !unity) return;
    GetWeatherData();
  }, [lat, lon, unity]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-start gap-y-4 container">
      <h1 className="text-xl font-bold tracking-widest text-text duration-300">
        Week
      </h1>
      <div className="w-full slider-container">
        <Slider {...settings} className="slider">
          {dailyData && !loading
            ? dailyData.map((dt, key) => (
                <WeekWeatherCard
                  key={key}
                  tempmax={dt.maxTemp}
                  tempmin={dt.minTemp}
                  date={dt.date}
                  weatherIcon={dt.weatherIcon}
                />
              ))
            : loading
            ? [1, 2, 3, 4, 5, 6, 7].map((dt, index) => (
                <WeekWeatherCard key={index} />
              ))
            : [1, 2, 3, 4, 5, 6, 7].map((dt, index) => (
                <WeekWeatherCard key={index} />
              ))}
        </Slider>
      </div>
    </div>
  );
};

const WeekWeatherCard = ({ date, tempmax, tempmin, weatherIcon }) => {
  const Day = new Date(date).toLocaleDateString("en-US", { weekday: "long" });

  return (
    <>
      <div className="min-w-28 mx-2 aspect-[1/1.5] duration-300 bg-card rounded-xl py-2 shadow flex flex-col items-center justify-between">
        <SkeletonWrapper
          className={"min-w-20 h-5 -translate-y-1 invert dark:invert-0"}
          borderRadius={12}
          color1={"black"}
          color2={"gray"}
        >
          <h1 className="font-medium text-text duration-300">{Day}</h1>
        </SkeletonWrapper>
        <SkeletonWrapper
          className={"min-w-20 h-20 -translate-y-1 invert dark:invert-0"}
          borderRadius={100}
          color1={"black"}
          color2={"gray"}
        >
          <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            className="aspect-square w-22 drop-shadow-[1px_3px_0]"
            alt=""
          />
        </SkeletonWrapper>
        <SkeletonWrapper
          className={"min-w-20 h-5 -translate-y-1 invert dark:invert-0"}
          borderRadius={12}
          color1={"black"}
          color2={"gray"}
        >
          <div className="flex duration-300 items-center text-text gap-x-2 font-medium">
            <span>{tempmax}°</span>
            <span className="text-text/50 font-normal duration-300">
              {tempmin}°
            </span>
          </div>
        </SkeletonWrapper>
      </div>
    </>
  );
};

export default WeekWeather;
