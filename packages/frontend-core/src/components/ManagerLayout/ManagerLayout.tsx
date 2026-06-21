import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import type { NavigationItem } from '@project/ui'
import { Header, Footer, Sidebar } from '@project/ui'
import './ManagerLayout.css'

type ManagerLayoutProps = {
  userName?: string
  topLinks: NavigationItem[]
  sidebarLinks: NavigationItem[]
  actions?: ReactNode
}

export function ManagerLayout({
    userName,
    topLinks,
    sidebarLinks,
    actions
}: ManagerLayoutProps) {

  return (
    <div className='manager-layout'>
      <Header
        logoText='Manager Panel'
        logoTo='/manager'
        links={topLinks}
        theme='manager'
        userName={userName}
        actions={actions}
        useContainer={false}
      />

      <div className='manager-layout__body'>
        <Sidebar links={sidebarLinks} />

        <main className='manager-layout__content'>
          <Outlet />
        </main>
      </div>

      <Footer variant='manager' containerSize='full' />
    </div>
  )
}