import { aboutMock } from '../mocks/aboutMock'
import type { AboutContent } from '../types/about'
import type { ApiResponse } from '@project/shared'

const API_URL = import.meta.env.VITE_API_URL

export const aboutService = {
  async getActiveAbout(): Promise<AboutContent> {
    try {
      const response = await fetch(`${API_URL}/api/about/active`)

      if (!response.ok) {
        throw new Error()
      }

      const result: ApiResponse<AboutContent> = await response.json()
      return result.data
    } catch {
      return aboutMock
    }
  },
}