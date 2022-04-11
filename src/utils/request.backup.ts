import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosPromise } from 'axios'
import { stringify } from 'qs'

const { CancelToken } = axios

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  timeout: 30000,
})

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {})

axiosInstance.interceptors.response.use((response: AxiosResponse) => {})

export default axiosInstance
