import rootAxios, { AxiosRequestConfig } from "axios";

import { configInterceptors } from "./interceptor";

const baseURL = process.env.REACT_APP_MICRO_VIDEO_API_URL;

const httpVideo = rootAxios.create({
  baseURL,
});

configInterceptors(httpVideo);

const disableTransform = { headers: { disableTransform: true } };

export { httpVideo, disableTransform };
