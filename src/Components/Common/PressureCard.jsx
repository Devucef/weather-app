import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import CountUp from "react-countup";
import { useSelector } from "react-redux";
import SkeletonWrapper from "../ui/SkeletonWrapper";

const PressureCard = () => {
  const weather = useSelector(({ weather }) => weather);
  const pressure = weather?.main?.pressure;
  const data = [
    { name: "Pressure", value: pressure ? pressure : 0, fill: "orange" },
  ];
  return (
    <SkeletonWrapper
      className={"w-full h-full -translate-y-1 invert dark:invert-0"}
      borderRadius={12}
      color1={"black"}
      color2={"gray"}
    >
      <div className="w-full rounded-xl duration-300 shadow grid grid-rows-3 items-center">
        <h2 className="w-full px-4 py-2 font-medium">Pressure</h2>
        <div className="justify-self-center -m-16 flex flex-col items-center">
          <RadialBarChart
            width={300}
            height={180}
            cx="50%"
            cy="90%"
            innerRadius="85%"
            outerRadius="85%"
            barSize={10}
            data={data}
            startAngle={180}
            endAngle={0}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <PolarAngleAxis
              type="number"
              className="text-xs"
              domain={[0, 3000]}
              tick={true}
              tickFormatter={(value) =>
                value % 3 === 0 ? value / 1000 + "K" : ""
              }
            />
            <RadialBar
              background
              isAnimationActive
              animationDuration={3000}
              dataKey="value"
            />
          </RadialBarChart>
          <h1 className="font-bold justify-self-center -translate-y-16">
            <CountUp
              className="text-5xl text-text"
              start={0}
              end={data[0]?.value || 0}
              duration={3}
            />
          </h1>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default PressureCard;
