import { Outlet } from 'react-router-dom'
import { useAuth } from '../../../modules/web-auth/hooks/useAuth'
import { LogoutButton } from '../../../shared/components/LogoutButton/LogoutButton'
import { Header } from '../../../shared/components/Header/Header'
import { Sidebar } from '../../../shared/components/Sidebar/Sidebar'
import { Footer } from '../../../shared/components/Footer/Footer'
import {
  managerTopLinks,
  managerSidebarLinks,
} from '../../types/managerNavigation'
import './ManagerLayout.css'

export function ManagerLayout() {
  const { user } = useAuth()

  return (
    <div className='manager-layout'>
      <Header
        logoText='Manager Panel'
        logoTo='/manager'
        links={managerTopLinks}
        theme='manager'
        userName={user?.name}
        actions={<LogoutButton />}
        useContainer={false}
      />

      <div className='manager-layout__body'>
        <Sidebar links={managerSidebarLinks} />

        <main className='manager-layout__content'>
          <Outlet />
        </main>
      </div>

      <Footer variant='manager' containerSize='full' />
    </div>
  )
}