import {
  createApiClient,
  registerInterceptors,
  getTokenStorage,
  clearAuthStorage,
  apiFetch as fetchRequest,
} from '@project/frontend-core'

const API_URL = import.meta.env.VITE_API_URL

export const api = createApiClient(API_URL)

registerInterceptors(
  api,
  getTokenStorage,
  () => {
    clearAuthStorage()
    window.location.href = '/login'
  },
)

export function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
) {
  return fetchRequest<T>(
    API_URL,
    endpoint,
    options,
  )
}