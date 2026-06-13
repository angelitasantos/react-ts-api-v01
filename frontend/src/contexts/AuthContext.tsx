import { createContext } from 'react'
import { AuthUser } from '../services/authService'

export interface AuthContextData {
  user: AuthUser | null
  token: string | null
  isAuthenticated: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)