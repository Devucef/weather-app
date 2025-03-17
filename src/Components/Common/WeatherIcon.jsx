import React from "react";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../UI/SkeletonWrapper";
const WeatherIcon = () => {
  const weather = useSelector(({ weather }) => weather);
  const icon = weather?.weather?.map(dt=>dt.icon);
  return (
    <SkeletonWrapper className={"w-full my-3 h-full -translate-y-1 invert dark:invert-0"} width={200} height={200} borderRadius={100} color1={"black"} color2={"gray"} condition={!icon}>
    <div className="w-full h-44 flex items-center  justify-center">
      <motion.img
        className="size-36 drop-shadow-[2px_2px_2px] shadow rounded-full shadow-gray-900"
        animate={{ y: 10 }}
        transition={{ duration: 3 , repeat:Infinity,repeatType :"mirror"}}
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
      />
    </div>
    </SkeletonWrapper >
  );
};

export default WeatherIcon;
