import axios from "axios";

import { BASE_URL } from "./client";

export type Service = {
  auth_id: string;
  logo_uri: string;
  service_name: string;
};

export type ResService = {
  services: Service[];
};

export type Dialog = {
  code: string;
  is_accepted: boolean;
};

export type AccessToken = { access_token: string };

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`
  }
});

export const getServices = () => {
  return api.get<ResService>("/service/list");
};

export const postService = (
  name: string,
  email: string,
  organization: string
) => {
  return api.post("/service", {
    name,
    email,
    organization
  });
};

export const postLogin = (
  auth_id: string,
  redirect_uri: string,
  id: string,
  password: string
) => {
  return axios.post<Dialog>(`${BASE_URL}/auth/dialog`, {
    auth_id,
    redirect_uri,
    id,
    password
  });
};

export const getAuthValidation = (auth_id: string, redirect_uri: string) => {
  return axios.get(
    `${BASE_URL}/auth/dialog?auth_id=${auth_id}&redirect_uri=${redirect_uri}`
  );
};

export const getAccessToken = (code: string) => {
  return axios.post<AccessToken>(`${BASE_URL}/service/auth`, {
    code
  });
};
