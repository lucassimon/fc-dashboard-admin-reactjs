import { AxiosInstance } from "axios";
import { v4 as uuidv4 } from "uuid";

export const configInterceptors = (axios: AxiosInstance) => {
  axios.interceptors.request.use((config) => {
    const requestId = uuidv4();
    config.headers.common["x-request-id"] = requestId;

    config.params = { ...config.params };

    return config;
  });

  axios.interceptors.response.use(
    (response) =>
      // Do something with response data
      response,
    (error) =>
      // Do something with response error
      Promise.reject(error)
  );
};
