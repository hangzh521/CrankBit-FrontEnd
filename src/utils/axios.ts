import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

// NOTE: Please use your own server port number, and will change to production server later
export const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

axiosClient.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});
