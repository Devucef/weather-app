import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../../Context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../../App/Features/Slices/UnitSlice";
import { Tooltip } from "react-tooltip";
import { setCoords } from "../../App/Features/Slices/WeekInfoSlice";

const Settings = () => {
  return (
    <div className="w-52 z-50 *:duration-400 gap-x-2 px-2 flex items-center justify-end absolute top-4 right-3">
      <PositionButton />
      <UnitButton />
      <ThemeButton />
      <Tooltip
        variant=""
        delayShow={500}
        id="my-tooltip"
      />
    </div>
  );
};

const ThemeButton = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Change theme"
      data-tooltip-class-name="bg-primary  text-white font-semibold"
      onClick={toggleTheme}
      className="size-8 cursor-pointer rounded-full bg-primary text-text shadow"
    >
      <i className={`ri-${isDark ? "moon" : "sun"}-line`} />
    </button>
  );
};

const UnitButton = () => {
  const { unit } = useSelector(({ unit }) => unit);
  const [unitState, setUnitState] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setUnitState(unit === "c" ? "celsius" : "fahrenheit");
  }, [unit]);

  return (
    <button
      data-tooltip-id="my-tooltip"
      data-tooltip-class-name="bg-accent text-white font-semibold"
      data-tooltip-content="Change Temperature unit"
      onClick={() => {
        dispatch(toggleUnit());
      }}
      className="size-8 cursor-pointer rounded-full bg-accent text-text shadow"
    >
      <i className={`ri-${unitState}-line`} />
    </button>
  );
};

const PositionButton = () => {
  const dispatch = useDispatch();

  const FetchCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setCoords({lat: latitude, lon: longitude}));
        },
        (error) => {
          console.error("geolocation error", error);
          switch (error.code) {
            case 1:
              alert("Permission denied. Please allow location access.");
              break;
            case 2:
              alert("Location unavailable. Try again later or check your connection.");
              break;
            case 3:
              alert("Location request timed out. Please try again.");
              break;
            default:
              alert("An unknown error occurred. Try again.");
          }
        }
      );
    }
  };
  return (
    <button
      data-tooltip-id="my-tooltip"
      data-tooltip-class-name="bg-accent text-white font-semibold"
      data-tooltip-content="Use Your Current Position"
      className="size-8 cursor-pointer rounded-full bg-accent text-text shadow"
      onClick={FetchCurrentLocation}
    >
      <i className="ri-map-pin-line" />
    </button>
  );
};
export default Settings;
