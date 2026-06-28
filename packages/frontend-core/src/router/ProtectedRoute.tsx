import { Navigate, Outlet, useLocation } from 'react-router-dom'

type ProtectedRouteProps = {
  isAuthenticated: boolean
}

export function ProtectedRoute({isAuthenticated,}: ProtectedRouteProps) {
  const location = useLocation()

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to='/login'
      replace
      state={{ from: location }}
    />
  )
}