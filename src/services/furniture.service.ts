import { AxiosRequestConfig } from 'axios'
import { instance } from '@/api/axios.api'

export const FurnitureService = {
  async getAll(path: string, param: AxiosRequestConfig) {
    return instance.get(path, param)
  }
}
