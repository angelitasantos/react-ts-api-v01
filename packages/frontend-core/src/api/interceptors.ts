import type { AxiosInstance } from 'axios'

export function registerInterceptors(
  api: AxiosInstance,
  getToken: () => string | null,
  onUnauthorized?: () => void,
) {
  api.interceptors.request.use((config) => {
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const isLogin =
        error?.config?.url?.includes('/auth/login')

      if (
        error?.response?.status === 401 &&
        !isLogin
      ) {
        onUnauthorized?.()
      }

      return Promise.reject(error)
    },
  )

  return api
}