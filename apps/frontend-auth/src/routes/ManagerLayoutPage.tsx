import {
  ManagerLayout,
  LogoutButton,
} from '@project/frontend-core'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../modules/web-auth/hooks/useAuth'
import {
  managerTopLinks,
  managerSidebarLinks,
} from '@project/frontend-core'

export function ManagerLayoutPage() {
  const navigate = useNavigate()
  const { user, signOut } = useAuth()

  function handleLogout() {
    signOut()
    navigate('/login', { replace: true })
  }

  return (
    <ManagerLayout
      userName={user?.name}
      topLinks={managerTopLinks}
      sidebarLinks={managerSidebarLinks}
      actions={
        <LogoutButton
          onLogout={handleLogout}
        />
      }
    />
  )
}