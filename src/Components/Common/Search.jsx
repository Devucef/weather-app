import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { setData, setTimeZone } from "../../App/Features/Slices/WeatherSlice";
import { setLoading } from "../../App/Features/Slices/LoadingSlice";
import { setCoords } from "../../App/Features/Slices/WeekInfoSlice";

const Search = () => {
  const [options, setOptions] = useState([]);
  const [inputLoad, setInputLoad] = useState(false);
  const [selected, setSelected] = useState(null);
  const { unit } = useSelector(({ unit }) => unit);
  const [unity, setUnity] = useState("");
  const dispatch = useDispatch();
  const infos = useSelector(({ weekInfo }) => weekInfo);

  // Handle the input change to pass it to the geo-api to get the auto-complete and get the info about the city (lat , lon , city , country)
  const handleInputChange = (inputValue) => {
    if (!inputValue) return;
    const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;
    setInputLoad(true);

    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&type=city&format=json&apiKey=${GEO_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          const formattedOptions = data.results.map((item) => ({
            value: item.place_id,
            label: item.city || item.formatted,
            lat: item.lat, // Add lat and lon to options
            lon: item.lon,
            city: item.city,
            country: item.country,
          }));

          setOptions(formattedOptions);
          setInputLoad(false);
        }
      })
      .catch((error) => console.error("Error fetching options:", error));
  };

  // Handle the selected options and extract the (lat , lon ) to pass it to the weather-api
  const handleSelectChange = (selectedOption) => {
    setSelected(selectedOption);
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    if (!selectedOption) return;
    dispatch(setLoading(true));
    const { lon, lat } = selectedOption;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=${unity}`
    )
      .then((response) => response.json())
      .then((data) => {
        const { clouds, main, name, sys, visibility, weather, wind } = data;
        dispatch(
          setData({ clouds, main, name, sys, visibility, weather, wind })
        );
        dispatch(setTimeZone(data.timezone));
        dispatch(setLoading(false));
        dispatch(setCoords({ lat, lon }));
      });
  };

  useEffect(() => {
    setUnity(unit === "c" ? "metric" : "imperial");
  }, [unit]);

  useEffect(() => {
    if (selected) {
      handleSelectChange(selected); // Re-fetch weather when unit changes
    }
  }, [unity]);

  useEffect(() => {
    const { lat, lon } = infos;
    if (lat && lon) {
      handleSelectChange(infos);
    }
  }, [infos]);

  return (
    <div className="relative w-[95%] rounded-xl">
      <Select
        options={options}
        placeholder="Enter Your City ..."
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: "#ffcc00",
            primary25: "#ffcc00",
            primary50: "#ffaa00",
            neutral0: "white",
            neutral70: "none",
          },
        })}
        styles={{ control: (base) => ({ ...base, border: "none" }) }}
        className="rounded-lg"
        onInputChange={handleInputChange}
        isLoading={inputLoad}
        onChange={handleSelectChange} // Properly handle selected value
      />
    </div>
  );
};

export default Search;
