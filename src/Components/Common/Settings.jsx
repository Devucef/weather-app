import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../../app/features/slices/unitSlice";
import { Tooltip } from "react-tooltip";
import { setCoords } from "../../app/features/slices/weekInfoSlice";
import { getCurrentPosition } from "../../hooks/useCurrentPostion";
import { openModal } from "../../app/features/slices/modalSlice";

const Settings = () => {
  return (
    <div className="w-52 z-50 *:duration-400 gap-x-2 px-2 flex items-center justify-end absolute top-4 right-3">
      <PositionButton />
      <UnitButton />
      <ThemeButton />
      <Tooltip variant="" delayShow={500} id="my-tooltip" />
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

  const getPosition = async () => {
    try {
      const location = await getCurrentPosition();
      dispatch(
        setCoords({
          lat: location.latitude,
          lon: location.longitude,
        })
      );
    } catch (error) {
      console.error("Could not fetch location:", error);
      dispatch(
        openModal({
          modalContent: {
            title: "Location Error",
            message: "Could not fetch your current location. Please try again.",
            type: "error",
          },
        })
      );
    }
  };

  return (
    <button
      data-tooltip-id="my-tooltip"
      data-tooltip-class-name="bg-accent text-white font-semibold"
      data-tooltip-content="Use Your Current Position"
      className="size-8 cursor-pointer rounded-full bg-accent text-text shadow"
      onClick={getPosition}
    >
      <i className="ri-map-pin-line" />
    </button>
  );
};
export default Settings;
