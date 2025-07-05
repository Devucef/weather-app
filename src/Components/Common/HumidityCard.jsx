import CountUp from "react-countup";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../ui/SkeletonWrapper";

const HumidityCard = () => {
  const weather = useSelector(({ weather }) => weather);
  const { loading } = useSelector(({ loading }) => loading);

  const humidity = weather?.main?.humidity;

  return (
    <SkeletonWrapper
      className={"w-full h-full  -translate-y-1 invert dark:invert-0"}
      borderRadius={12}
      color1={"black"}
      color2={"gray"}
      condition={loading}
    >
      <div className="w-full h-full relative rounded-xl duration-300 shadow grid grid-rows-3 items-center">
        <h2 className="w-full px-4 py-2 font-medium">Humidity</h2>
        <h1 className="text-3xl justify-self-center text-text/60 font-bold">
          <CountUp
            className="text-5xl text-text"
            start={0}
            end={humidity}
            duration={1.5}
          />{" "}
          %
        </h1>
      </div>
    </SkeletonWrapper>
  );
};

export default HumidityCard;
