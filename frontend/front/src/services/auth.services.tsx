import {ISignupDto} from "../types/auth.types";
import httpClient from "../core/http.service";
import config from "../utils/config.json";

export const signup = async (data: ISignupDto) => {
  const signupUrl = `${config.apiBaseUrl}/auth/signup`;
  return await httpClient.post(signupUrl, data)
}