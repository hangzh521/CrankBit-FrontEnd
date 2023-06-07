import { axiosClient as api } from "../utils/axios";
import { RegisterPayload, LoginPayload } from "../interfaces/auth";

export const registerApi = (registerPayload: RegisterPayload) =>
  api.post("/auth/register", registerPayload);

export const loginApi = (loginPayload: LoginPayload) =>
  api.post("/auth/login", loginPayload);
