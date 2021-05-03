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

export type ServiceInfo = {
  app_name: string;
  auth_id: string;
  logo_uri: string;
  manager_email: string;
  manager_name: string;
  manager_number: number;
  organization: string;
  redirect_uris: string[];
  secret_key: string;
  support_email: string;
};

export type Student = {
  student_id: string;
  student_name: string;
  student_number: number;
};

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

export const getServiceInfo = (auth_id: string) => {
  return api.get<ServiceInfo>(`/service?auth_id=${auth_id}`);
};

export const putServiceInfo = (
  auth_id: string,
  name: string,
  help_email: string,
  organization: string,
  logo_uri: string
) => {
  return api.put("/service", {
    auth_id,
    name,
    help_email,
    organization,
    logo_uri
  });
};

export const postURI = (auth_id: string, redirect_uris: string[]) => {
  return api.post("/service/redirect-uri", {
    auth_id,
    redirect_uris
  });
};

export const deleteURI = (auth_id: string, redirect_uri: string) => {
  return api.delete(
    `/service/redirect-uri?auth_id=${auth_id}&redirect_uri=${redirect_uri}`
  );
};

export const deleteService = (auth_id: string) => {
  return api.delete(`/service?auth_id=${auth_id}`);
};

export const getStudentInfo = () => {
  return api.get<Student>("/student");
};
