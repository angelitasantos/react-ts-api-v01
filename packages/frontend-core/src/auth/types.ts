export interface AuthUser {
  id: number
  name: string
  email: string
  role: string
}
export interface LoginPayload {
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  user: AuthUser
}