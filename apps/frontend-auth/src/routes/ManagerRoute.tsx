import { ProtectedRoute } from '@project/frontend-core'
import { useAuth } from './../modules/web-auth/hooks/useAuth'

export function ManagerRoute() {
  const { isAuthenticated } = useAuth()

  return (
    <ProtectedRoute
      isAuthenticated={isAuthenticated}
    />
  )
}