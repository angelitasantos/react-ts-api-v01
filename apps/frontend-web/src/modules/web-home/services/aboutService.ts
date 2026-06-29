import type { ApiResponse } from '@project/shared'
import type { AboutContent } from '../types/about'
import { aboutMock } from '../mocks/aboutMock'
import { apiFetch } from '../../../services/api'

export const aboutService = {
  async getActiveAbout(): Promise<AboutContent> {
    try {
      const response = await apiFetch<ApiResponse<AboutContent>>('/about/active')
      return response.data
    } catch (error) {
      console.log('API de about indisponível. Utilizando mock.', error)
      return aboutMock
    }
  },
}