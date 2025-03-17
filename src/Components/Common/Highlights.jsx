import React from "react";
import PressureCard from "./PressureCard";
import WindStatusCard from "./WindStatusCard";
import SunriseSunsetCard from "./SunriseSunsetCard";
import HumidityCard from "./HumidityCard";
import VisibilityCard from "./VisibilityCard";
import MaxTemperatureCard from "./MaxTemperatureCard";

const Highlights = () => {
  return (
    <div className="flex flex-col mt-12 items-start">
      <h1 className="text-xl text-text duration-300 font-bold tracking-widest my-4">
        Today's Highlights
      </h1>
      <div className="p-2 *:not-[span]:bg-card *:text-text  w-full  md:h-92 grid grid-cols-1 sm:grid-cols-2  md:grid-rows-2 md:grid-cols-3 gap-2">
        <PressureCard />
        <WindStatusCard/>
        <SunriseSunsetCard/>
        <HumidityCard/>
        <VisibilityCard/>
        <MaxTemperatureCard/>
      </div>
    </div>
  );
};



export default Highlights;
