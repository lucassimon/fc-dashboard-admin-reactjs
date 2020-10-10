import rootAxios from "axios";

import { configInterceptors } from "./interceptor";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const axios = rootAxios.create({
  baseURL,
});

configInterceptors(axios);

const disableTransform = { headers: { disableTransform: true } };

export { axios, disableTransform };
