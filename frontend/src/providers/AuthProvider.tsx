import { ReactNode, useEffect, useMemo, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { loginRequest, AuthUser } from '../services/authService'
import {
  clearAuthStorage,
  getTokenStorage,
  getUserStorage,
  setAuthStorage,
} from '../utils/storage'

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const storedToken = getTokenStorage()
    const storedUser = getUserStorage<AuthUser>()

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(storedUser)
    }
  }, [])

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