import { homeMock } from '../mocks/homeMock'
import type { HomeContent } from '../types/home'
import type { ApiResponse } from '@project/shared'

const API_URL = import.meta.env.VITE_API_URL

export const homeService = {
  async getActiveHome(): Promise<HomeContent> {
    try {
      const response = await fetch(`${API_URL}/api/home/active`)

      if (!response.ok) {
        throw new Error()
      }

      const result: ApiResponse<HomeContent> = await response.json()
      return result.data
    } catch {
      return homeMock
    }
  },
}