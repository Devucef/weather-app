import { motion } from "motion/react";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../UI/SkeletonWrapper";
import weatherIconMap, { defaultIcon } from "../../Config/weatherIconMap";
import { useState } from "react";
const WeatherIcon = () => {
  const weather = useSelector(({ weather }) => weather);
  const icon = weather?.weather?.map((dt) => dt.icon);
  const [loaded, setLoaded] = useState(false);
  const iconSrc = weatherIconMap[icon] || defaultIcon;

  return (
    <SkeletonWrapper
      className={"w-full my-3 h-full -translate-y-1 invert dark:invert-0"}
      width={200}
      height={200}
      borderRadius={100}
      color1={"black"}
      color2={"gray"}
    >
      <div className="w-full h-44 flex items-center  justify-center">
        <motion.img
          className={`size-44 drop-shadow-[2px_2px_2px] object-contain shadow-gray-900 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          animate={{ y: 10 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          src={iconSrc}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          alt="Weather icon"
        />
      </div>
    </SkeletonWrapper>
  );
};

export default WeatherIcon;
