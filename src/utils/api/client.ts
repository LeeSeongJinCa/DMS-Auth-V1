import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const client = () => {
  const instance = axios.create({
    baseURL: BASE_URL
  });

  instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("access_token");

    config.headers = {
      Authorization: `Bearer ${accessToken}`
    };

    return config;
  });

  instance.interceptors.response.use(
    res => res,
    err => {
      return Promise.reject(err);
    }
  );

  return instance;
};
