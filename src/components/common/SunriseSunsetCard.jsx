import { useSelector } from "react-redux";
import SkeletonWrapper from "../ui/SkeletonWrapper";

const SunriseSunsetCard = () => {
  const weather = useSelector(({ weather }) => weather);

  const sunrise = new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit", hour12: true }
  );
  const sunset = new Date(weather?.sys?.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <SkeletonWrapper
      className={"w-full  h-full -translate-y-1 invert dark:invert-0"}
      borderRadius={12}
      color1={"black"}
      color2={"gray"}
    >
      <div className="w-full h-full relative rounded-xl duration-300 shadow grid grid-rows-3 items-center">
        <h2 className="w-full px-4 py-2 font-medium">Sunrise & Sunset</h2>
        <div className="grid translate-y-2 justify-self-center uppercase grid-cols-4 items-center gap-x-2 gap-y-4 text-lg">
          <i className="ri-arrow-up-line size-7 content-center text-center shadow bg-yellow-400 text-white col-span-1 rounded-full"></i>
          <h2 className="tracking-widest font-semibold col-span-3">
            {sunrise}
          </h2>
          <i className="ri-arrow-down-line size-7 content-center text-center shadow bg-yellow-400 text-white col-span-1 rounded-full"></i>
          <h2 className="tracking-widest font-semibold col-span-3">{sunset}</h2>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default SunriseSunsetCard;
