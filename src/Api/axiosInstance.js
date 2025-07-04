import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify request config here (e.g., attach token)
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log or handle global errors here
    console.error("Axios error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
