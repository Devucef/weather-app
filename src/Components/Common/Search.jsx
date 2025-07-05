import { useEffect, useState, useCallback } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useSearchWeather } from "../../hooks/useSearchWeather";
import { setCoords } from "../../app/features/slices/weekInfoSlice";

const Search = ({ onSuccess }) => {
  const [options, setOptions] = useState([]);
  const [inputLoad, setInputLoad] = useState(false);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const { getSuggestions, getWeather, unit } = useSearchWeather();
  const infos = useSelector((state) => state.weekInfo);

  const units = unit === "c" ? "metric" : "imperial";

  // 🔒 Secure memoized fetch to prevent unnecessary renders
  const fetchWeather = useCallback(
    (location) => {
      if (!location) return;
      getWeather(location, units);
    },
    [getWeather, units]
  );

  useEffect(() => {
    if (selected) fetchWeather(selected);
  }, [selected, fetchWeather]);

  useEffect(() => {
    const { lat, lon } = infos || {};
    if (lat && lon) fetchWeather(infos);
  }, [infos, fetchWeather]);

  return (
    <div className="relative w-[95%] rounded-xl">
      <Select
        options={options}
        placeholder="Enter Your City ..."
        onInputChange={(input) => {
          if (input) getSuggestions(input, setOptions, setInputLoad);
          return input;
        }}
        isLoading={inputLoad}
        onChange={(selectedOption) => {
          if (!selectedOption) return;
          setSelected(selectedOption); // 🟢 triggers fetch via useEffect
            dispatch(setCoords({ lat: selectedOption.lat, lon: selectedOption.lon })); // ✅ moved here
          onSuccess?.(); // Optional chaining for safety
        }}
        classNames={{
          control: () =>
            "bg-card w-full shadow rounded-3xl px-3 py-1 text-sm text-text",
          menu: () => "bg-card shadow rounded-lg p-2 text-text mt-2",
          option: ({ isFocused }) =>
            `px-2 py-1 cursor-pointer rounded-md ${
              isFocused ? "bg-accent text-white" : ""
            }`,
        }}
        unstyled
      />
    </div>
  );
};

export default Search;
