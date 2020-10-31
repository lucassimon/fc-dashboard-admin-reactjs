import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpResource } from './http-resource'

export class GenreService extends HttpResource {
  list<T = any>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return super.list<T>(config)
  }
}