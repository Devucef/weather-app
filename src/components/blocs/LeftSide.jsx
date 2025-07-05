import Search from "../common/Search";
import WeatherIcon from "../common/WeatherIcon";
import CityInfo from "../common/CityInfo";

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
