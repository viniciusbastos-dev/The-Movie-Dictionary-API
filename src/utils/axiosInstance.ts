import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers[
      "Authorization"
    ] = `Bearer ${process.env.TMDB_AUTHORIZATION}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
