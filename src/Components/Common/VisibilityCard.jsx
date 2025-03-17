import React from "react";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../UI/SkeletonWrapper";

const VisibilityCard = () => {
  const weather = useSelector(({ weather }) => weather);
  const visibility = weather?.visibility;
  return (
    <SkeletonWrapper
      className={"w-full h-full  -translate-y-1 invert dark:invert-0"}
      borderRadius={12}
      color1={"black"}
      color2={"gray"}
    >
      <div className="w-full h-full relative rounded-xl duration-300 shadow grid grid-rows-3 items-center">
        <h2 className="w-full px-4 py-2 font-medium">Visibility</h2>
        <h1 className="text-3xl justify-self-center text-text/60 font-bold">
          <CountUp
            className="text-5xl text-text"
            start={0}
            end={visibility / 1000}
            decimals={1}
            duration={1.5}
          />{" "}
          km
        </h1>
      </div>
    </SkeletonWrapper>
  );
};

export default VisibilityCard;
