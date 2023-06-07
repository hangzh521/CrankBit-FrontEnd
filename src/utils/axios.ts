import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

// NOTE: Please use your own server port number, and will change to production server later
export const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

axiosClient.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});
