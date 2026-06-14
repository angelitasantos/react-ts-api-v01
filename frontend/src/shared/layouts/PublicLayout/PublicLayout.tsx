import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../../../shared/components/Header/Header'
import { Footer } from '../../../shared/components/Footer/Footer'
import { Container } from '../../../shared/components/Container/Container'
import { publicLinks } from '../../types/publicNavigation'

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