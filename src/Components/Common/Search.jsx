import { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { useSearchWeather } from "../../Hooks/useSearchWeather";

const Search = ({ onSuccess }) => {
  const [options, setOptions] = useState([]);
  const [inputLoad, setInputLoad] = useState(false);
  const [selected, setSelected] = useState(null);

  const { getSuggestions, getWeather, unit } = useSearchWeather();
  const infos = useSelector((state) => state.weekInfo);


  const units = unit === "c" ? "metric" : "imperial";

  useEffect(() => {
    if (selected) {
      getWeather(selected, units);
    }
  }, [selected, units, getWeather]);

  // Fetch weather when coordinates info changes (e.g., from another part of your app)
  useEffect(() => {
    const { lat, lon } = infos;
    if (lat && lon) {
      getWeather(infos, units);
    }
  }, [infos, units, getWeather]);

  return (
    <div className="relative w-[95%] rounded-xl">
      <Select
        options={options}
        placeholder="Enter Your City ..."
        onInputChange={(input) => {
          if (input) {
            getSuggestions(input, setOptions, setInputLoad);
          }
          return input;
        }}
        isLoading={inputLoad}
        onChange={(selected) => {
          if (!selected) return;
          setSelected(selected);
          getWeather(selected, unity);
          onSuccess();
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
