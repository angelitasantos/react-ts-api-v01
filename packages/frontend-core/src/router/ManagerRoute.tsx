import { ProtectedRoute } from './ProtectedRoute'
import { useAuth } from '../auth/useAuth'

export function ManagerRoute() {
  const { isAuthenticated } = useAuth()

  return (
    <ProtectedRoute
      isAuthenticated={isAuthenticated}
    />
  )
}