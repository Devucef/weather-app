import axios from "./axiosInstance";

const GEO_API_KEY = import.meta.env.VITE_GEO_API_KEY;

export const fetchCitySuggestions = async (input) => {
  const response = await axios.get(
    `https://api.geoapify.com/v1/geocode/autocomplete`,
    {
      params: {
        text: input,
        type: "city",
        format: "json",
        apiKey: GEO_API_KEY,
      },
    }
  );  
  return response.data.results;
};
