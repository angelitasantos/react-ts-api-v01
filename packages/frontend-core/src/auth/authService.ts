import type { AxiosInstance } from 'axios'
import type {
  LoginPayload,
  LoginResponse,
} from './types'

export async function loginRequest(
  api: AxiosInstance,
  payload: LoginPayload,
): Promise<LoginResponse> {
  const response = await api.post(
    '/auth/login',
    payload,
  )

  return response.data.data
}