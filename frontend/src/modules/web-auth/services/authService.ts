import { api } from '../../../shared/services/api'

export interface LoginPayload {
  email: string
  password: string
}

export interface AuthUser {
  id: number
  name: string
  email: string
  role: string
}

export interface LoginResponse {
  token: string
  user: AuthUser
}

export async function loginRequest(
  payload: LoginPayload): Promise<LoginResponse> {
  const response = await api.post('/auth/login', payload)
  return response.data.data
}