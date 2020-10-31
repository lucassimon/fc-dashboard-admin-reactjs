import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


export class HttpResource {

  constructor(protected http: AxiosInstance, protected resource: string) {}

  list<T = any>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(this.resource, config)
  }

  get<T = any>(config?: AxiosRequestConfig): Promise<AxiosResponse<T>>  {
    return this.http.get<T>(this.resource, config)
  }

  getById<T = any>(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>  {
    const url = `${this.resource}/${id}`
    return this.http.get<T>(url, config)
  }

  create<T = any>(data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>  {
    return this.http.post<T>(this.resource, data, config)
  }

  update<T = any>(id: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>  {
    const url = `${this.resource}/${id}`
    return this.http.put<T>(url, data, config)
  }

  delete<T = any>(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>>  {
    const url = `${this.resource}/${id}`
    return this.http.delete<T>(url, config)
  }
}