import { ReactNode, useMemo, useState } from 'react'
import {
  AuthContext,
  loginRequest,
  setAuthStorage,
  clearAuthStorage,
  getTokenStorage,
  getUserStorage,
  type AuthUser,
} from '@project/frontend-core'
import { api } from '../../../services/api'

interface Props {
  children: ReactNode
}

export function AuthProvider({
  children,
}: Props) {
  const [token, setToken] = useState(
    () => getTokenStorage(),
  )

  const [user, setUser] = useState<AuthUser | null>(
    () => getUserStorage<AuthUser>(),
  )

  async function signIn(
    email: string,
    password: string,
  ) {
    const data = await loginRequest(api, {
      email,
      password,
    })

    setToken(data.token)
    setUser(data.user)

    setAuthStorage(
      data.token,
      data.user,
    )
  }

  function signOut() {
    clearAuthStorage()

    setToken(null)
    setUser(null)
  }

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated: !!token,
      signIn,
      signOut,
    }),
    [token, user],
  )

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}