import axios from "axios";

export const BASE_URL = "http://192.168.137.1:5000";
// export const BASE_URL = "http://3.36.78.10:5000";

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
