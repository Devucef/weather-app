import CountUp from "react-countup";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../ui/SkeletonWrapper";

const MaxTemperatureCard = () => {
  const weather = useSelector(({ weather }) => weather);
  const { unit } = useSelector(({ unit }) => unit);
  const MaxTemp = weather?.main?.temp_max;

  return (
    <SkeletonWrapper
      className={"w-full h-full -translate-y-1 invert dark:invert-0"}
      borderRadius={12}
      color1={"black"}
      color2={"gray"}
    >
      <div className="w-full h-full relative rounded-xl duration-300 shadow grid grid-rows-3 items-center">
        <h2 className="w-full px-4 py-2 font-medium">Max Temperature</h2>
        <h1 className="text-3xl justify-self-center flex items-end text-text/60 font-bold">
          <CountUp
            className="text-5xl text-text"
            start={0}
            end={MaxTemp}
            duration={1.5}
          />
          {unit === "c" ? "℃" : "℉"}
        </h1>
      </div>
    </SkeletonWrapper>
  );
};

export default MaxTemperatureCard;
