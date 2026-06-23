import { Outlet, useLocation } from 'react-router-dom'
import { Container, Footer, Header } from '@project/ui'
import { publicLinks } from '@project/frontend-core'

export function PublicLayout() {
  const location = useLocation()

  const isFullWidthPage = location.pathname === '/'

  return (
    <div className='public-layout'>
      <Header
        logoText='WebProject'
        logoTo='/'
        links={publicLinks}
        theme='light'
        containerSize='wide'
        useContainer
      />

      <main>
        {isFullWidthPage ? (
          <Container size='full'>
            <Outlet />
          </Container>
        ) : (
          <Container size='default'>
            <Outlet />
          </Container>
        )}
      </main>

      <Footer variant='public' containerSize='wide' />
    </div>
  )
}