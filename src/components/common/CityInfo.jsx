import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../ui/SkeletonWrapper";
import CountUp from "react-countup";
import weatherIconMap, { defaultIcon } from "../../config/weatherIconMap";

const CityInfo = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const Now = new Date();
  const Day = Now.toLocaleDateString("en-US", { weekday: "long" });
  const [imageSource, setImageSource] = useState(null);
  const weather = useSelector(({ weather }) => weather);
  const { unit } = useSelector(({ unit }) => unit);
  const timezone = weather?.timezone;
    const icon = weather?.weather?.map((dt) => dt.icon);
  const iconSrc = weatherIconMap[icon] || defaultIcon;
  


  useEffect(() => {
    const getLocalTimeFromOffset = (utcOffsetSeconds) => {
      const nowUTC = new Date();
      const localTime = new Date(nowUTC.getTime() + utcOffsetSeconds * 1000); // Adjust for offset
      setCurrentTime(() => {
        return localTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, // 24-hour format
        });
      });
    };
    getLocalTimeFromOffset(timezone);
  }, [timezone]);

  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

  async function fetchCityImage(city) {
    if (city) {
      const url = `https://api.pexels.com/v1/search?query=${city}&per_page=1`;

      const response = await fetch(url, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      const data = await response.json();
      if (data.photos.length > 0) {
        const imageUrl = data.photos[0].src.large;
        setImageSource(imageUrl);
      } else {
        console.log("No images found.");
      }
    }
  }

  fetchCityImage(weather?.name);
  return (
    <div className="w-full px-4 text-text *:duration-400">
      <SkeletonWrapper
        className={"w-full py-1.5 invert dark:invert-0"}
        borderRadius={5}
        color1={"black"}
        color2={"gray"}
        count={1}
      >
        <div className="w-full flex items-center justify-between">
          <h2 className="font-semibold capitalize flex items-center text-lg tracking-wider">
            <span className="line-clamp-1">{weather?.name} ,</span>
            <span>{weather?.sys?.country}</span> 
            <i className="ri-map-pin-line ml-2 font-normal"></i>
          </h2>
          <img
            src={`https://flagcdn.com/w40/${weather?.sys?.country?.toLowerCase()}.png`}
            alt=""
          />
        </div>
      </SkeletonWrapper>

      <SkeletonWrapper
        className={"mt-1 last-of-type:py-0 py-2.5 invert dark:invert-0"}
        width={120}
        borderRadius={5}
        color1={"black"}
        color2={"gray"}
        count={2}
      >
        <h1 className="text-4xl">
          <CountUp
            duration={0.5}
            end={weather?.main?.temp}
            className="font-semibold"
          />
          { unit === "c" ? "℃" : "℉"}
        </h1>
        <h2 className="">
          {Day} | {currentTime}
        </h2>
      </SkeletonWrapper>
      <div className=" w-full mt-12 border-t py-2 border-gray-300 flex flex-col">
        <SkeletonWrapper
          className={"w-full p-1.5 mb-8 invert dark:invert-0"}
          borderRadius={5}
          color1={"black"}
          color2={"gray"}
        >
          <div className="flex items-center gap-x-2 pb-10">
            <img
              className="w-5 h-5 object-contain"
              src={iconSrc}
              alt=""
            />
            <h1 className="font-medium capitalize">
              {weather?.weather?.map((dt) => dt.description)}
            </h1>
          </div>
        </SkeletonWrapper>
      </div>
      <SkeletonWrapper
        className={"w-full mt-12 h-20 invert dark:invert-0"}
        borderRadius={5}
        color1={"black"}
        color2={"gray"}
        count={1}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="w-full mt-12"
        >
          <a
            href={`https://www.google.com/search?&q=${weather?.name}`}
            target="_blank"
          >
            <div className="relative flex items-center justify-center rounded-xl overflow-hidden shadow w-full h-20">
              <h1 className="z-10 w-full h-full text-center content-center bg-black/40 text-white tracking-wider">
                {weather?.name} , {weather?.sys?.country}
              </h1>
              <img
                alt=""
                src={imageSource}
                loading="lazy"
                className="absolute w-full -bottom-1/3"
              />
            </div>
          </a>
        </motion.div>
      </SkeletonWrapper>
    </div>
  );
};

export default CityInfo;
