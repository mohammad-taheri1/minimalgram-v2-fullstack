import {ILoginDto, ISignupDto} from "../types/auth.types";
import httpClient from "../core/http.service";
import config from "../utils/config.json";

const {apiBaseUrl} = config;

export const signup = async (data: ISignupDto) => {
  const signupUrl = `${apiBaseUrl}/auth/signup`;
  return await httpClient.post(signupUrl, data)
}

export const login = async (data: ILoginDto) => {
  const loginUrl = `${apiBaseUrl}/auth/login`;
  return await httpClient.post(loginUrl, data);
}

export const saveJWTtoLocalStorage = (token: string) => {
  localStorage.setItem('token', token)
}