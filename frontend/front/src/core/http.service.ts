import axios from "axios";
import logger from "./log.service";
import {toast} from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {

    logger.log(error.message)
    toast.error("An unexpected error has been occurred.");
  }

  return Promise.reject(error);
});

const setAuthorizationHeader = (jwt: string) => {
  if (jwt !== '') {
    axios.defaults.headers.common['authorization'] = jwt
  }
}

const httpClient = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setAuthorizationHeader
}

export default httpClient;