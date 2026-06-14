import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../../modules/web-auth/hooks/useAuth'

export function ProtectedRoute() {
  const location = useLocation()
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ from: location }}
    />
  )
}