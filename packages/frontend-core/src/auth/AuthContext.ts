import { createContext } from 'react'
import type { AuthUser } from './types'

export interface AuthContextData {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean

  signIn(
    email: string,
    password: string,
  ): Promise<void>

  signOut(): void
}

export const AuthContext =
  createContext<AuthContextData>(
    {} as AuthContextData,
  )