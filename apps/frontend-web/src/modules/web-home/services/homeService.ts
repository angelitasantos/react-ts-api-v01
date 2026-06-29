import type { ApiResponse } from '@project/shared'
import type { HomeContent } from '../types/home'
import { homeMock } from '../mocks/homeMock'
import { apiFetch } from '../../../services/api'

export const homeService = {
  async getActiveHome(): Promise<HomeContent> {
    try {
      const response = await apiFetch<ApiResponse<HomeContent>>('/home/active')
      return response.data
    } catch (error) {
      console.log('API de home indisponível. Utilizando mock.', error)
      return homeMock
    }
  },
}