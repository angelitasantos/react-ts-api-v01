import { ReactNode, useMemo, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { loginRequest, AuthUser } from '../services/authService'
import {
  clearAuthStorage,
  getTokenStorage,
  getUserStorage,
  setAuthStorage,
} from '@project/frontend-core'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    return getTokenStorage()
  })

  const [user, setUser] = useState<AuthUser | null>(() => {
    return getUserStorage<AuthUser>()
  })

  async function signIn(email: string, password: string) {
    const data = await loginRequest({ email, password })

    setToken(data.token)
    setUser(data.user)
    setAuthStorage(data.token, data.user)
  }

  function signOut() {
    setToken(null)
    setUser(null)
    clearAuthStorage()
  }

  const value = useMemo(
    () => ({
      user,
      token,
      isAuthenticated: !!token,
      signIn,
      signOut,
    }),
    [user, token],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}