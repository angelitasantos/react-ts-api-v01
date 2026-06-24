import axios from 'axios'
import { clearAuthStorage, getTokenStorage } from '@project/frontend-core'
import { REQUEST_ERRORS } from '@project/shared'

export const API_URL = import.meta.env.VITE_API_URL

export async function apiFetch<Response>(
  endpoint: string,
  options?: RequestInit
): Promise<Response> {
  const response = await fetch(
    `${API_URL}${endpoint}`,
    options
  )

  if (!response.ok) {
    throw new Error(REQUEST_ERRORS.REQUEST_ERROR)
  }

  return response.json()
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use((config) => {
  const token = getTokenStorage()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const isLoginRequest =
      error?.config?.url?.includes('/auth/login')

    if (
      error?.response?.status === 401 &&
      !isLoginRequest
    ) {
      clearAuthStorage()
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)