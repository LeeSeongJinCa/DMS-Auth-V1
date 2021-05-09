import { atom } from "recoil";

import { ServiceInfo } from "../utils/api/apis";

const serviceInitialState: ServiceInfo = {
  app_name: "",
  auth_id: "",
  logo_uri: "",
  manager_email: "",
  manager_name: "",
  manager_number: 0,
  organization: "",
  redirect_uris: [],
  secret_key: "",
  support_email: ""
};

export const serviceInfoState = atom<ServiceInfo>({
  key: "dashboard/serviceInfo",
  default: serviceInitialState
});
