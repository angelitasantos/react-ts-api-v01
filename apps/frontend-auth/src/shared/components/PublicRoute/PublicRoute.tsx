import { Navigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useAuth } from '../../../modules/web-auth/hooks/useAuth'

type PublicRouteProps = {
  children: ReactNode
}

export function PublicRoute({
  children,
}: PublicRouteProps) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/manager" replace />
  }

  return <>{children}</>
}