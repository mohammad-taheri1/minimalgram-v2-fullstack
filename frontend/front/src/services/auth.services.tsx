import {IJwt, ILoginDto, ISignupDto} from "../types/auth.types";
import httpClient from "../core/http.service";
import config from "../utils/config.json";
import jwtDecode from "jwt-decode";

const {apiBaseUrl} = config;

const signup = async (data: ISignupDto) => {
  const signupUrl = `${apiBaseUrl}/auth/signup`;
  return await httpClient.post(signupUrl, data)
}

const login = async (data: ILoginDto) => {
  const loginUrl = `${apiBaseUrl}/auth/login`;
  return await httpClient.post(loginUrl, data);
}

const saveJwtToLocalStorage = (token: string) => {
  localStorage.setItem('token', token);
}

const logout = (): void => {
  localStorage.removeItem('token');
}

const getCurrentUser = () : IJwt | undefined=> {
  try {
    const token = localStorage.getItem('token') || ''
    return jwtDecode(token);
  } catch (e) {
    return undefined;
  }
}

const authService = {
  signup,
  login,
  saveJwtToLocalStorage,
  logout,
  getCurrentUser
}

export default authService