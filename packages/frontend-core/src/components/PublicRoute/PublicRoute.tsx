import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'

type PublicRouteProps = {
  children: ReactNode
  isAuthenticated: boolean
}

export function PublicRoute({children, isAuthenticated,}: PublicRouteProps) {
  if (isAuthenticated) {
    return <Navigate to="/manager" replace />
  }

  return <>{children}</>
}