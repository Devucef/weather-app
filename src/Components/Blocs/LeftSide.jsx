import React from "react";
import Search from "../Common/Search";
import WeatherIcon from "../Common/WeatherIcon";
import CityInfo from "../Common/CityInfo";

const LeftSide = () => {
  return (
    <div className="col-span-full lg:col-span-2 bg-background py-4 flex flex-col items-center justify-between">
      <Search />
      <WeatherIcon />
      <CityInfo />
    </div>
  );
};

export default LeftSide;
