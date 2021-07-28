import { AxiosRequestConfig } from 'axios';
import axios from 'axios';

type NodeEnv = 'development' | 'production';

const BASE_VERSION = 'v1';

const ENV: NodeEnv = process.env.NODE_ENV as NodeEnv;

const API_BASE_URL = {
  development: 'http://localhost:8080/',
  production: 'http://localhost:8080/',
}[ENV];

const REQUEST_TIMEOUT = 30 * 1000;

const config = {
  timeout: REQUEST_TIMEOUT,
  headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(config);

const generateUrl = (path: string) => `${API_BASE_URL}${BASE_VERSION}${path}`;

export const api = {
  get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.get(generateUrl(path), config);
  },
  post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.post(generateUrl(path), data, config);
  },
  put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.put(generateUrl(path), data, config);
  },
  delete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return axiosInstance.delete(generateUrl(path), config);
  },
};
